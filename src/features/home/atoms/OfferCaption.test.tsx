import { render } from '@testing-library/react-native'
import React from 'react'

import { OfferCaption } from './OfferCaption'

let props = {
  name: 'Mensch ! Où sont les Hommes ?',
  distance: '1,2km',
  imageWidth: 50,
  date: 'Dès le 2 mars 2020',
  isDuo: true,
  price: 'Dès 5€',
}

describe('OfferCaption component', () => {
  afterAll(() => jest.resetAllMocks())

  it('should render correctly', () => {
    const { toJSON } = render(<OfferCaption {...props} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should have the isDuo text if needed', () => {
    let { getByTestId } = render(<OfferCaption {...props} />)
    expect(getByTestId('priceIsDuo').children[0]).toBe('Dès 5€ - Duo')

    getByTestId = render(<OfferCaption {...props} isDuo={false} />).getByTestId
    expect(getByTestId('priceIsDuo').children[0]).toBe('Dès 5€')
  })
})
