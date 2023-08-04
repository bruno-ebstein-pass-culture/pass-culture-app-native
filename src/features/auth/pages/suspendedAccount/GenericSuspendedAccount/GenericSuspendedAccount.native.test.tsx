import React from 'react'

import { navigate } from '__mocks__/@react-navigation/native'
import { GenericSuspendedAccount } from 'features/auth/pages/suspendedAccount/GenericSuspendedAccount/GenericSuspendedAccount'
import { navigateToHomeConfig } from 'features/navigation/helpers'
import * as NavigationHelpers from 'features/navigation/helpers/openUrl'
import { env } from 'libs/environment'
import { act, fireEvent, render, screen } from 'tests/utils'

const openUrl = jest.spyOn(NavigationHelpers, 'openUrl')

const mockSignOut = jest.fn()
jest.mock('features/auth/helpers/useLogoutRoutine', () => ({
  useLogoutRoutine: jest.fn(() => mockSignOut.mockResolvedValueOnce(jest.fn())),
}))

describe('<GenericSuspendedAccount />', () => {
  it('should open mail app when clicking on "Contacter le support" button', () => {
    render(<GenericSuspendedAccount />)

    const contactSupportButton = screen.getByText('Contacter le service fraude')
    fireEvent.press(contactSupportButton)

    expect(openUrl).toBeCalledWith(`mailto:${env.FRAUD_EMAIL_ADDRESS}`, undefined, true)
  })

  it('should go to home page when clicking on go to home button', async () => {
    render(<GenericSuspendedAccount />)

    const homeButton = screen.getByText('Retourner à l’accueil')
    await act(async () => fireEvent.press(homeButton))

    expect(navigate).toHaveBeenNthCalledWith(
      1,
      navigateToHomeConfig.screen,
      navigateToHomeConfig.params
    )
    expect(mockSignOut).toBeCalledTimes(1)
  })
})