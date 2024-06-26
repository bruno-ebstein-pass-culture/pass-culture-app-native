import React from 'react'
import { TextInput as RNTextInput } from 'react-native'

import { render } from 'tests/utils/web'

import { BaseTextInput } from './BaseTextInput'

describe('<BaseTextInput />', () => {
  it('should render correctly', () => {
    const { container } = render(<BaseTextInput placeholder="placeholder" value="value" />)

    expect(container).toMatchSnapshot()
  })

  it('should render ref correctly', () => {
    const ref = React.createRef<RNTextInput>()
    render(<BaseTextInput placeholder="placeholder" value="value" ref={ref} />)

    expect(ref.current).toBeTruthy()
  })
})
