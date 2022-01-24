import React, { FunctionComponent } from 'react'

import { AppButton, BaseButtonProps } from 'ui/components/buttons/AppButton'
// eslint-disable-next-line no-restricted-imports
import { ColorsEnum } from 'ui/theme/colors'

export const ButtonPrimaryWhite: FunctionComponent<BaseButtonProps> = (props) => {
  let textColor = ColorsEnum.PRIMARY
  const loadingIconColor = ColorsEnum.PRIMARY_DARK
  let iconColor = ColorsEnum.PRIMARY
  const backgroundColor = ColorsEnum.WHITE

  if (props.disabled) {
    iconColor = textColor = ColorsEnum.GREY_DARK
  }

  return (
    <AppButton
      {...props}
      loadingIconColor={loadingIconColor}
      backgroundColor={backgroundColor}
      iconColor={iconColor}
      textColor={textColor}
    />
  )
}
