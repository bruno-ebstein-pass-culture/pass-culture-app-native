import React from 'react'

import { render, screen } from 'tests/utils'
import { GenericInfoPage } from 'ui/pages/GenericInfoPage'
import { BicolorPhonePending } from 'ui/svg/icons/BicolorPhonePending'

// We unmock these modules to make sure they are not used because
// navigation with @react-navigation is not always defined in GenericInfoPage
jest.unmock('@react-navigation/native')
jest.unmock('@react-navigation/stack')
jest.unmock('@react-navigation/bottom-tabs')
jest.unmock('features/navigation/useGoBack')

describe('<GenericInfoPage />', () => {
  it('should render correctly', () => {
    render(<GenericInfoPage title="GenericInfoPage" icon={BicolorPhonePending} />)

    expect(screen).toMatchSnapshot()
  })
})
