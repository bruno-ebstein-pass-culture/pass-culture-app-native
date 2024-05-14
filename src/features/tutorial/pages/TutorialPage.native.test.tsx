import React from 'react'

import * as useGoBack from 'features/navigation/useGoBack'
import { fireEvent, render, screen } from 'tests/utils'
import { ButtonPrimary } from 'ui/components/buttons/ButtonPrimary'

import { TutorialPage } from './TutorialPage'

jest.spyOn(useGoBack, 'useGoBack').mockReturnValue({
  goBack: jest.fn(),
  canGoBack: jest.fn(() => true),
})

describe('TutorialPage', () => {
  it('should render correctly', () => {
    renderTutorialPage()

    expect(screen).toMatchSnapshot()
  })

  it('should trigger onPress when clicking on button', async () => {
    renderTutorialPage()

    const button = screen.getByLabelText('Continuer')
    fireEvent.press(button)

    expect(onPress).toHaveBeenCalledTimes(1)
  })
})

const onPress = jest.fn()
const renderTutorialPage = () =>
  render(
    <TutorialPage
      title="Titre"
      subtitle="Sous-titre"
      buttons={[<ButtonPrimary key={1} wording="Continuer" onPress={onPress} />]}
    />
  )
