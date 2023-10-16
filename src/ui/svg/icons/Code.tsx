import * as React from 'react'
import { G, Path } from 'react-native-svg'
import styled from 'styled-components/native'

import { AccessibleSvg } from 'ui/svg/AccessibleSvg'

import { AccessibleIcon } from './types'

function CodeSvg({ size, color, accessibilityLabel, testID }: AccessibleIcon) {
  return (
    <AccessibleSvg
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      accessibilityLabel={accessibilityLabel}
      testID={testID}>
      <G fill="none" fillRule="evenodd">
        <G fill={color}>
          <Path
            d="M10.3537 2.43808C10.6801 2.11174 11.1365 1.95264 11.5957 2.01236L19.0796 2.94846C19.1108 2.95237 19.141 2.95909 19.1699 2.96833C19.3696 3.01271 19.5292 3.17822 19.556 3.39278L20.4481 10.8647C20.5014 11.2742 20.3807 11.6909 20.1145 12.0071C19.3933 11.6813 18.5928 11.5 17.75 11.5C14.5744 11.5 12 14.0744 12 17.25C12 18.0948 12.1822 18.8971 12.5094 19.6196L11.6058 20.5232C11.0229 21.1062 10.0751 21.1062 9.49215 20.5232L4.53687 15.5679C4.50074 15.5318 4.47132 15.4915 4.44861 15.4486L2.61838 13.6183C2.57953 13.5965 2.54298 13.5691 2.50993 13.536L1.93721 12.9633C1.35426 12.3804 1.35426 11.4325 1.93721 10.8496L10.3537 2.43808ZM15.1036 9.34911C16.2042 9.34911 17.0956 8.45766 17.0956 7.35704C17.0956 6.25642 16.2042 5.36497 15.1036 5.36497C14.0029 5.36497 13.1115 6.25642 13.1115 7.35704C13.1115 8.45766 14.0079 9.34911 15.1036 9.34911ZM22.5 17.25C22.5 14.6267 20.3733 12.5 17.75 12.5C15.1267 12.5 13 14.6267 13 17.25C13 19.8733 15.1267 22 17.75 22C20.3733 22 22.5 19.8733 22.5 17.25ZM18.2367 14.9867C18.2367 14.718 18.0189 14.5 17.75 14.5C17.5037 14.5 17.2999 14.683 17.2677 14.9208L17.2633 14.9867V16.7633H15.4867C15.218 16.7633 15 16.9813 15 17.25C15 17.4963 15.183 17.7001 15.4205 17.7323L15.4867 17.7367H17.2633V19.5133C17.2633 19.782 17.4811 20 17.75 20C17.9963 20 18.2001 19.817 18.2323 19.5795L18.2367 19.5133V17.7367H20.0133C20.2819 17.7367 20.5 17.5189 20.5 17.25C20.5 17.0037 20.317 16.7999 20.0795 16.7677L20.0133 16.7633H18.2367V14.9867Z"
            transform="translate(-146 -1065) translate(134 1061) translate(12 4)"
          />
        </G>
      </G>
    </AccessibleSvg>
  )
}

export const Code = styled(CodeSvg).attrs(({ color, size, theme }) => ({
  color: color ?? theme.colors.black,
  size: size ?? theme.icons.sizes.standard,
}))``