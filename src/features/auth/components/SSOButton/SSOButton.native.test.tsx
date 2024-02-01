// eslint-disable-next-line no-restricted-imports
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import React from 'react'
import DeviceInfo from 'react-native-device-info'

import * as API from 'api/api'
import { AccountState, OauthStateResponse, SigninResponse, UserProfileResponse } from 'api/gen'
import { SSOButton } from 'features/auth/components/SSOButton/SSOButton'
import { beneficiaryUser } from 'fixtures/user'
import * as useFeatureFlagAPI from 'libs/firebase/firestore/featureFlags/useFeatureFlag'
import { eventMonitoring } from 'libs/monitoring'
import { mockServer } from 'tests/mswServer'
import { reactQueryProviderHOC } from 'tests/reactQueryProviderHOC'
import { act, fireEvent, render, screen } from 'tests/utils'

jest.mock('features/identityCheck/context/SubscriptionContextProvider', () => ({
  useSubscriptionContext: jest.fn(() => ({ dispatch: jest.fn() })),
}))

const useFeatureFlagSpy = jest.spyOn(useFeatureFlagAPI, 'useFeatureFlag').mockReturnValue(false)
const apiGetOAuthState = jest.spyOn(API.api, 'getNativeV1OauthState')
const apiPostGoogleAuthorize = jest.spyOn(API.api, 'postNativeV1OauthGoogleAuthorize')
const getModelSpy = jest.spyOn(DeviceInfo, 'getModel')
const getSystemNameSpy = jest.spyOn(DeviceInfo, 'getSystemName')
const onSignInFailureSpy = jest.fn()

jest.useFakeTimers({ legacyFakeTimers: true })

describe('<SSOButton />', () => {
  beforeEach(() => {
    mockServer.getApiV1<OauthStateResponse>('/oauth/state', {
      oauthStateToken: 'oauth_state_token',
    })
  })

  it('should not query auth state when FF is disabled', async () => {
    renderSSOButton()

    await act(async () => {})

    expect(apiGetOAuthState).not.toHaveBeenCalled()
  })

  it('should sign in with device info when sso button is clicked', async () => {
    useFeatureFlagSpy.mockReturnValueOnce(true)
    getModelSpy.mockReturnValueOnce('iPhone 13')
    getSystemNameSpy.mockReturnValueOnce('iOS')
    mockServer.postApiV1<SigninResponse>('/oauth/google/authorize', {
      accessToken: 'accessToken',
      refreshToken: 'refreshToken',
      accountState: AccountState.ACTIVE,
    })
    mockServer.getApiV1<UserProfileResponse>('/me', beneficiaryUser)

    renderSSOButton()

    await act(async () => fireEvent.press(await screen.findByTestId('S’inscrire avec Google')))

    expect(apiPostGoogleAuthorize).toHaveBeenCalledWith({
      authorizationCode: 'mockServerAuthCode',
      oauthStateToken: 'oauth_state_token',
      deviceInfo: {
        deviceId: 'ad7b7b5a169641e27cadbdb35adad9c4ca23099a',
        os: 'iOS',
        source: 'iPhone 13',
      },
    })
  })

  it('should log to Sentry on SSO login error', async () => {
    useFeatureFlagSpy.mockReturnValueOnce(true)
    jest.spyOn(GoogleSignin, 'signIn').mockRejectedValueOnce('GoogleSignIn Error')

    renderSSOButton()
    await act(async () => fireEvent.press(await screen.findByTestId('S’inscrire avec Google')))

    expect(eventMonitoring.captureMessage).toHaveBeenCalledWith(
      'Can’t login via Google: GoogleSignIn Error',
      'info'
    )
  })

  it('should call onSignInFailure when signin fails', async () => {
    useFeatureFlagSpy.mockReturnValueOnce(true)
    mockServer.postApiV1<SigninResponse>('/oauth/google/authorize', {
      responseOptions: { statusCode: 500 },
    })

    renderSSOButton()
    await act(async () => fireEvent.press(await screen.findByTestId('S’inscrire avec Google')))

    expect(onSignInFailureSpy).toHaveBeenCalledWith({
      isSuccess: false,
      content: { code: 'NETWORK_REQUEST_FAILED', general: [] },
    })
  })
})

const renderSSOButton = () => {
  render(reactQueryProviderHOC(<SSOButton type="signup" onSignInFailure={onSignInFailureSpy} />))
}