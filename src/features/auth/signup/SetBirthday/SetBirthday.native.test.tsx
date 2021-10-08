import { StackScreenProps } from '@react-navigation/stack'
import mockdate from 'mockdate'
import React from 'react'

import { navigate } from '__mocks__/@react-navigation/native'
import { mockGoBack } from 'features/navigation/__mocks__/useGoBack'
import { RootStackParamList } from 'features/navigation/RootNavigator'
import { analytics } from 'libs/analytics'
import { fireEvent, render, RenderAPI } from 'tests/utils'
import { ColorsEnum } from 'ui/theme'

import { SetBirthday } from './SetBirthday'

jest.mock('features/auth/settings')

describe('SetBirthday Page', () => {
  beforeEach(() => {
    mockdate.set(new Date('2020-12-01T00:00:00Z'))
    jest.useFakeTimers()
    jest.clearAllMocks()
  })

  it('should render properly', () => {
    const { toJSON } = renderSetBirthday()
    expect(toJSON()).toMatchSnapshot()
  })

  it('should navigate to the previous page on back navigation', () => {
    const { getByTestId } = renderSetBirthday()
    const leftIcon = getByTestId('leftIcon')
    fireEvent.press(leftIcon)

    expect(mockGoBack).toBeCalledTimes(1)
  })

  it('should keep disabled the button "Continuer" when the date is not complete', () => {
    const renderAPI = renderSetBirthday()

    changeDate(renderAPI, '1', '1', '1')

    const button = renderAPI.getByTestId('Continuer')
    expect(button.props.style.backgroundColor).toEqual(ColorsEnum.GREY_LIGHT)
  })

  it('should show the correct deposit amount', async () => {
    const component = renderSetBirthday()
    fireEvent.press(component.getByTestId('Pourquoi ?'))
    expect(component.queryByText(/une aide financière de/)).toBeTruthy()
    expect(component.queryByText(/300 €/)).toBeTruthy()
  })

  it('should display the error message "date incorrecte" when the date is too old', () => {
    const renderAPI = renderSetBirthday()

    changeDate(renderAPI, '31', '12', '1889')

    const message = renderAPI.queryByText('La date choisie est incorrecte')
    expect(message).toBeTruthy()
  })

  it('should display the error message "date incorrecte" when the date is incorrect', () => {
    const renderAPI = renderSetBirthday()

    changeDate(renderAPI, '?!', '01', '2002')

    const message = renderAPI.queryByText('La date choisie est incorrecte')
    expect(message).toBeTruthy()
  })

  it('should display the error message "tu dois avoir 15 ans" when the date is too young', () => {
    const renderAPI = renderSetBirthday()

    changeDate(renderAPI, '01', '01', '2006')

    const message = renderAPI.queryByText(
      'Tu dois avoir' + '\u00a0' + 15 + '\u00a0' + "ans pour t'inscrire"
    )
    expect(message).toBeTruthy()
  })

  it('should navigate to CGU', () => {
    const renderAPI = renderSetBirthday()

    changeDate(renderAPI, '16', '01', '1995')

    const continueButton = renderAPI.getByText('Continuer')
    fireEvent.press(continueButton)

    expect(navigate).toBeCalledWith('AcceptCgu', {
      birthday: '1995-01-16',
      email: 'john.doe@example.com',
      isNewsletterChecked: true,
      password: 'password',
    })
  })

  it('should display a information modal when clicking "Pourquoi" link', () => {
    const { getByTestId, toJSON } = renderSetBirthday()

    const whyBirthdayLink = getByTestId('Pourquoi ?')
    fireEvent.press(whyBirthdayLink)

    const birthdayModal = getByTestId('modal-birthday-information')
    expect(birthdayModal.props.visible).toBeTruthy()
    expect(toJSON()).toMatchSnapshot()
  })

  it('should display 4 step dots with the third one as current step', () => {
    const { getAllByTestId } = renderSetBirthday()
    const dots = getAllByTestId('dot-icon')
    expect(dots.length).toBe(4)
    expect(dots[2].props.fill).toEqual(ColorsEnum.PRIMARY)
  })

  it('should call clear focuses', () => {
    const { getByTestId, getByText } = renderSetBirthday()
    const quitSignupModalButton = getByTestId("Abandonner l'inscription")

    fireEvent.press(quitSignupModalButton)

    expect(getByText("Continuer l'inscription")).toBeTruthy()
  })

  describe('SetBirthday - analytics', () => {
    it('should log ConsultModalWhyAnniversary when clicking "Pourquoi" link', () => {
      const { getByTestId } = renderSetBirthday()

      const whyBirthdayLink = getByTestId('Pourquoi ?')
      fireEvent.press(whyBirthdayLink)

      expect(analytics.logConsultWhyAnniversary).toHaveBeenCalledTimes(1)
    })

    it('should log CancelSignup when clicking on "Abandonner l\'inscription"', () => {
      const { getByTestId, getByText } = renderSetBirthday()

      const rightIcon = getByTestId('rightIcon')
      fireEvent.press(rightIcon)

      const abandonButton = getByText("Abandonner l'inscription")
      fireEvent.press(abandonButton)

      expect(analytics.logCancelSignup).toHaveBeenCalledTimes(1)
      expect(analytics.logCancelSignup).toHaveBeenCalledWith('Birthday')
    })

    it('should not log any birthday analytics if the user is 15 years old or more', () => {
      const renderAPI = renderSetBirthday()

      changeDate(renderAPI, '01', '12', '2005')
      expect(analytics.logSignUpBetween14And15Included).not.toBeCalled()
      expect(analytics.logSignUpLessThanOrEqualTo13).not.toBeCalled()

      changeDate(renderAPI, '01', '12', '2000')
      expect(analytics.logSignUpBetween14And15Included).not.toBeCalled()
      expect(analytics.logSignUpLessThanOrEqualTo13).not.toBeCalled()
    })

    it('should log between 14 and 15 birthday analytics if the user is 14 years old', () => {
      const renderAPI = renderSetBirthday()

      changeDate(renderAPI, '01', '12', '2006')

      expect(analytics.logSignUpBetween14And15Included).toBeCalledTimes(1)
      expect(analytics.logSignUpLessThanOrEqualTo13).not.toBeCalled()
    })

    it('should log <= 13 birthday analytics if the user is 13 years old', () => {
      const renderAPI = renderSetBirthday()

      changeDate(renderAPI, '01', '12', '2007')

      expect(analytics.logSignUpBetween14And15Included).not.toBeCalled()
      expect(analytics.logSignUpLessThanOrEqualTo13).toBeCalledTimes(1)
    })

    it('should log <= 13 birthday analytics if the user is less than 13 years old', () => {
      const renderAPI = renderSetBirthday()

      changeDate(renderAPI, '01', '12', '2010')

      expect(analytics.logSignUpBetween14And15Included).not.toBeCalled()
      expect(analytics.logSignUpLessThanOrEqualTo13).toBeCalledTimes(1)
    })

    it('it should not log between 14 and 15 birthday analytics more than once', () => {
      const renderAPI = renderSetBirthday()

      changeDate(renderAPI, '01', '12', '2006')
      expect(analytics.logSignUpBetween14And15Included).toBeCalledTimes(1)
    })

    it('it should not log <= 13 birthday analytics more than once', () => {
      const renderAPI = renderSetBirthday()

      changeDate(renderAPI, '01', '12', '2007')
      expect(analytics.logSignUpLessThanOrEqualTo13).toBeCalledTimes(1)

      changeDate(renderAPI, '01', '12', '2010')
      expect(analytics.logSignUpLessThanOrEqualTo13).toBeCalledTimes(1)
    })
  })
})

function renderSetBirthday() {
  const navigationProps = {
    route: {
      params: { email: 'john.doe@example.com', isNewsletterChecked: true, password: 'password' },
    },
  } as StackScreenProps<RootStackParamList, 'SetBirthday'>
  return render(<SetBirthday {...navigationProps} />)
}

function changeDate(renderAPI: RenderAPI, dayStr: string, monthStr: string, yearStr: string) {
  const day = renderAPI.getByPlaceholderText('JJ')
  const month = renderAPI.getByPlaceholderText('MM')
  const year = renderAPI.getByPlaceholderText('AAAA')

  fireEvent.changeText(day, dayStr)
  fireEvent.changeText(month, monthStr)
  fireEvent.changeText(year, yearStr)
}
