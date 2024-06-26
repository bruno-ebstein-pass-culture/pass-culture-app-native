import mockdate from 'mockdate'
import React from 'react'

import {
  MINIMUM_DATE,
  CURRENT_DATE,
  DEFAULT_SELECTED_DATE,
  MAXIMUM_DATE,
} from 'features/auth/fixtures/fixtures'
import { fireEvent, render, screen } from 'tests/utils/web'
import { DatePickerSpinner } from 'ui/components/inputs/DateInput/DatePicker/DatePickerSpinner.web'

const props = {
  onChange: jest.fn(),
  date: DEFAULT_SELECTED_DATE,
  minimumDate: MINIMUM_DATE,
  maximumDate: MAXIMUM_DATE,
}

describe('<DatePickerSpinner />', () => {
  mockdate.set(CURRENT_DATE)
  props.onChange.mockReset()

  it('should call onChange with the selected date when a date is selected', () => {
    // FIXME(PC-211174): This warning comes from react-native-date-picker (https://passculture.atlassian.net/browse/PC-21174)
    jest.spyOn(global.console, 'warn').mockImplementationOnce(() => null)

    render(<DatePickerSpinner {...props} />)

    const day = screen.getByText('2')
    fireEvent.click(day)

    const month = screen.getByText('Juil.')
    fireEvent.click(month)

    const year = screen.getByText('2005')
    fireEvent.click(year)

    expect(props.onChange).toHaveBeenNthCalledWith(1, DEFAULT_SELECTED_DATE) // first render trigger useEffect
    expect(props.onChange).toHaveBeenNthCalledWith(2, new Date('2006-12-02T00:00:00.000Z'))
    expect(props.onChange).toHaveBeenNthCalledWith(3, new Date('2006-07-02T00:00:00.000Z'))
    expect(props.onChange).toHaveBeenNthCalledWith(4, new Date('2005-07-02T00:00:00.000Z'))
  })
})
