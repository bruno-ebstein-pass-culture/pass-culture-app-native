import React from 'react'
import { Animated } from 'react-native'
import styled from 'styled-components/native'

import { styledButton } from 'ui/components/buttons/styledButton'
import { Touchable } from 'ui/components/touchable/Touchable'
import { BicolorLocationPointer } from 'ui/svg/icons/BicolorLocationPointer'
import { getSpacing, Typo } from 'ui/theme'

const LOCATION_TITLE_MAX_WIDTH = getSpacing(20)

export const LocationWidget: React.FC = () => {
  const locationTitle = 'Me localiser'

  return (
    <StyledTouchable onPress={() => null} accessibilityLabel="Ouvrir la modale de localisation">
      <IconContainer>
        <LocationPointer />
      </IconContainer>
      <StyledCaption numberOfLines={1}>{locationTitle}</StyledCaption>
    </StyledTouchable>
  )
}

const StyledTouchable = styledButton(Touchable)({
  alignItems: 'center',
})

const StyledCaption = styled(Typo.Caption)({
  paddingTop: getSpacing(1),
  maxWidth: LOCATION_TITLE_MAX_WIDTH,
})

const IconContainer = styled(Animated.View)(({ theme }) => ({
  width: theme.buttons.roundedButton.size,
  height: theme.buttons.roundedButton.size,
  borderRadius: theme.buttons.roundedButton.size,
  border: 1,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: theme.colors.greyDark,
}))

export const LocationPointer = styled(BicolorLocationPointer).attrs(({ theme }) => ({
  color: theme.colors.black,
  color2: theme.colors.black,
  size: theme.icons.sizes.small,
}))``
