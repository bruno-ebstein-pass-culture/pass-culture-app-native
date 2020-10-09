import { render } from '@testing-library/react-native'
import React from 'react'

import CoordinatesView from './index'

describe('CoordinatesView component', () => {
  it('should render correctly', () => {
    const coordinatesView = render(
      <CoordinatesView
        position={{
          latitude: 45,
          longitude: 25,
          altitude: 200,
        }}
      />
    )
    expect(coordinatesView).toMatchSnapshot()
  })
})
