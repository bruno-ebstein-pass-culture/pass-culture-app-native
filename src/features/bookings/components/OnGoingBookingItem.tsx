import { useNavigation } from '@react-navigation/native'
import React from 'react'
import styled from 'styled-components/native'

import { useAppSettings } from 'features/auth/settings'
import { UseNavigationType } from 'features/navigation/RootNavigator'
import { mapCategoryToIcon } from 'libs/parsers'
import { useSubcategory } from 'libs/subcategories'
import { Clock } from 'ui/svg/icons/Clock'
import { Duo } from 'ui/svg/icons/Duo'
import { getSpacing, Spacer, Typo } from 'ui/theme'
// eslint-disable-next-line no-restricted-imports
import { ColorsEnum } from 'ui/theme/colors'

import { getBookingProperties, getBookingLabels } from '../helpers'

import { BookingItemTitle } from './BookingItemTitle'
import { OnGoingTicket } from './OnGoingTicket'
import { BookingItemProps } from './types'

export const OnGoingBookingItem = ({ booking }: BookingItemProps) => {
  const { navigate } = useNavigation<UseNavigationType>()
  const { data: settings = null } = useAppSettings()
  const { categoryId, isEvent } = useSubcategory(booking.stock.offer.subcategoryId)

  const { stock } = booking
  const bookingProperties = getBookingProperties(booking, isEvent)
  const { dateLabel, withdrawLabel } = getBookingLabels(booking, bookingProperties, settings)

  return (
    <Container
      onPress={() => navigate('BookingDetails', { id: booking.id })}
      testID="OnGoingBookingItem">
      <OnGoingTicket image={stock.offer.image?.url} altIcon={mapCategoryToIcon(categoryId)} />
      <AttributesView>
        <BookingItemTitle title={stock.offer.name} />
        {!!dateLabel && <DateLabel color={ColorsEnum.GREY_DARK}>{dateLabel}</DateLabel>}
        <Spacer.Column numberOfSpaces={1} />
        {!!bookingProperties.isDuo && <Duo />}
        <Spacer.Flex />
        {!!withdrawLabel && (
          <WithDrawContainer>
            <Clock size={16} color={ColorsEnum.PRIMARY} />
            <Spacer.Row numberOfSpaces={1} />
            <WithdrawCaption color={ColorsEnum.PRIMARY} numberOfLines={2}>
              {withdrawLabel}
            </WithdrawCaption>
          </WithDrawContainer>
        )}
      </AttributesView>
    </Container>
  )
}

const Container = styled.TouchableOpacity.attrs(({ theme }) => ({
  activeOpacity: theme.activeOpacity,
}))({
  paddingHorizontal: getSpacing(6),
  flexDirection: 'row',
})

const AttributesView = styled.View({
  flex: 1,
  paddingLeft: getSpacing(4),
  paddingRight: getSpacing(1),
})

const WithDrawContainer = styled.View({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
})

const DateLabel = styled(Typo.Body)({
  flex: 1,
})

const WithdrawCaption = styled(Typo.Caption)({
  marginRight: getSpacing(4),
})
