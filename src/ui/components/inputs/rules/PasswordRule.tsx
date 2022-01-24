import React, { FunctionComponent } from 'react'

import { InputRule } from 'ui/components/inputs/rules/InputRule'
import { Check } from 'ui/svg/icons/Check'
import { Close } from 'ui/svg/icons/Close'
// eslint-disable-next-line no-restricted-imports
import { ColorsEnum } from 'ui/theme/colors'

type Props = {
  title: string
  isValidated: boolean
}

export const PasswordRule: FunctionComponent<Props> = ({ title, isValidated }) => {
  return (
    <InputRule
      title={title}
      icon={isValidated ? Check : Close}
      iconSize={10}
      testIdSuffix={isValidated ? 'check' : 'close'}
      color={isValidated ? ColorsEnum.GREEN_VALID : ColorsEnum.ERROR}
    />
  )
}
