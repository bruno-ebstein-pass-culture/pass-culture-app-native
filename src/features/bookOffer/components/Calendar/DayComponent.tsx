import debounce from 'lodash/debounce'
import React, { useCallback, useRef } from 'react'
import { View } from 'react-native'
import { DateData } from 'react-native-calendars/src/types'
import styled, { DefaultTheme } from 'styled-components/native'

import { DiagonalStripe } from 'features/bookOffer/components/Calendar/DiagonalStripe'
import { Step } from 'features/bookOffer/context/reducer'
import { useBookingContext } from 'features/bookOffer/context/useBookingContext'
import { OfferStatus } from 'features/bookOffer/helpers/utils'
import { getSpacing, Typo } from 'ui/theme'

interface Props {
  status: OfferStatus
  selected: boolean
  date: DateData
  enablePricesByCategories?: boolean
}

type VoidFn = () => void

export const useSelectDay = (): ((props: Props) => VoidFn | undefined) => {
  const { dispatch } = useBookingContext()
  const debouncedDispatch = useRef(debounce(dispatch, 300)).current

  const selectDate = (date: DateData, enablePricesByCategories?: boolean) => () => {
    dispatch({ type: 'SELECT_DATE', payload: new Date(date.year, date.month - 1, date.day) })
    if (enablePricesByCategories) return
    debouncedDispatch({ type: 'CHANGE_STEP', payload: Step.HOUR })
  }

  return useCallback<
    ({ date, selected, status, enablePricesByCategories }: Props) => (() => void) | undefined
  >(({ date, selected, status, enablePricesByCategories }) => {
    if (selected) return selectDate(date, enablePricesByCategories)
    if (status === OfferStatus.BOOKABLE) return selectDate(date, enablePricesByCategories)
    return undefined
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export const DayComponent: React.FC<Props> = ({ status, selected, date }) => {
  if (selected) {
    return (
      <SelectedDay>
        <SelectedDayNumber>{date.day}</SelectedDayNumber>
      </SelectedDay>
    )
  }

  if (status === OfferStatus.BOOKABLE) {
    return (
      <DayContainer>
        <Day status={status}>{date.day}</Day>
      </DayContainer>
    )
  }

  if (status === OfferStatus.NOT_BOOKABLE) {
    return (
      <DiagonalStripe>
        <DayContainer>
          <Day status={status}>{date.day}</Day>
        </DayContainer>
      </DiagonalStripe>
    )
  }

  return (
    <DayContainer>
      <Body>{date.day}</Body>
    </DayContainer>
  )
}

function getStatusColor({ colors }: DefaultTheme, status: OfferStatus) {
  if (status === OfferStatus.BOOKABLE) {
    return colors.primary
  }
  if (status === OfferStatus.NOT_BOOKABLE) {
    return colors.greyDark
  }
  return colors.greyDark
}

const Body = styled(Typo.Body)(({ theme }) => ({
  color: theme.colors.greyDark,
}))

const Day = styled(Typo.ButtonText)<{ status: OfferStatus }>(({ theme, status }) => ({
  textAlign: 'center',
  minWidth: getSpacing(6),
  color: getStatusColor(theme, status),
}))

const SelectedDay = styled(View)(({ theme }) => ({
  backgroundColor: theme.colors.primary,
  borderRadius: getSpacing(3),
  width: getSpacing(6),
  height: getSpacing(6),
  alignSelf: 'center',
  justifyContent: 'center',
}))

const SelectedDayNumber = styled(Typo.ButtonText)(({ theme }) => ({
  alignSelf: 'center',
  color: theme.colors.white,
}))

const DayContainer = styled(View)({
  height: getSpacing(6),
  justifyContent: 'center',
})
