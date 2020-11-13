import React, { FunctionComponent, useState } from 'react'
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import styled from 'styled-components/native'

import { useKeyboardEvents } from 'ui/components/keyboard/useKeyboardEvents'
import { Background } from 'ui/svg/Background'
import { ColorsEnum, getShadow, getSpacing, Spacer } from 'ui/theme'

export const BottomCard: FunctionComponent = ({ children }) => {
  const [keyboardHeight, setKeyboardHeight] = useState(0)
  useKeyboardEvents({
    onBeforeShow(data) {
      if (data.keyboardShown) {
        setKeyboardHeight(data.keyboardHeight)
      }
    },
    onBeforeHide(data) {
      if (!data.keyboardShown) {
        setKeyboardHeight(0)
      }
    },
  })

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <AvoidingKeyboardContainer keyboardHeight={keyboardHeight}>
        <Background />
        <StyledBottomCardContainer>
          {children}
          {keyboardHeight === 0 && <Spacer.TabBar />}
        </StyledBottomCardContainer>
      </AvoidingKeyboardContainer>
    </TouchableWithoutFeedback>
  )
}

interface AvoidingKeyboardContainerProps {
  keyboardHeight: number
}
const AvoidingKeyboardContainer = styled(View)<AvoidingKeyboardContainerProps>(
  ({ keyboardHeight }) => ({
    bottom: keyboardHeight,
  })
)

const StyledBottomCardContainer = styled.View({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  padding: getSpacing(6),
  borderTopLeftRadius: getSpacing(4),
  borderTopRightRadius: getSpacing(4),
  backgroundColor: `${ColorsEnum.WHITE}`,
  ...getShadow({
    shadowOffset: {
      width: 0,
      height: getSpacing(2),
    },
    shadowRadius: getSpacing(1),
    shadowColor: ColorsEnum.BLACK,
    shadowOpacity: 0.15,
  }),
})
