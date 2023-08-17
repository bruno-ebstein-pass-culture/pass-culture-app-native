import * as React from 'react'
import { Rect, Path, G, Defs, ClipPath } from 'react-native-svg'
import styled from 'styled-components/native'

import { AccessibleSvg } from 'ui/svg/AccessibleSvg'
import { AccessibleIcon } from 'ui/svg/icons/types'
import { svgIdentifier } from 'ui/svg/utils'

const GoogleMessagesRoundSvg = ({ size, accessibilityLabel, testID }: AccessibleIcon) => {
  const { id: clipPathId, fill: clipPath } = svgIdentifier('clipPath')

  return (
    <AccessibleSvg
      width={size}
      height={size}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      viewBox="0 0 48 48">
      <Rect width={48} height={48} rx={24} fill="none" />
      <G clipPath={clipPath}>
        <Path
          d="M24.0125 47.9753C37.2605 47.9753 48.0002 37.2357 48.0002 23.9877C48.0002 10.7397 37.2605 5.34058e-05 24.0125 5.34058e-05C10.7646 5.34058e-05 0.0249329 10.7397 0.0249329 23.9877C0.0249329 37.2357 10.7646 47.9753 24.0125 47.9753Z"
          fill="#1A73E8"
        />
        <Path
          d="M32.7419 34.3493H16.3957C14.0711 34.3493 12.0433 32.5935 12.0433 30.269V30.2442V31.6043C12.0433 33.929 14.0711 35.9568 16.3956 35.9568H32.7419C35.0912 35.9568 37.0943 33.9042 37.0943 31.6043V30.2443C37.0943 32.5688 35.0665 34.3493 32.7419 34.3493ZM12.0186 22.6276V20.7728L8.97687 15.7528C8.80376 15.4807 8.72954 15.2334 8.75431 14.9861V17.1128C8.75431 17.3107 8.82844 17.5085 8.9521 17.7311L12.0186 22.6276Z"
          fill="#185ABC"
        />
        <Path
          d="M32.7421 14.17H9.84248C8.92747 14.17 8.40823 14.9614 9.02646 15.8021L12.0187 20.9953V30.2689C12.0187 32.6429 13.7498 34.6213 16.0991 34.6213H32.7173C35.0666 34.6213 37.0697 32.6183 37.0697 30.2689V18.5472C37.0944 16.173 35.0913 14.17 32.7421 14.17Z"
          fill="white"
        />
        <Path
          d="M32.4698 20.7232H16.6674C15.975 20.7232 15.3073 20.3029 15.3073 19.6351C15.3073 18.9674 15.9751 18.5471 16.6674 18.5471H32.4696C33.162 18.5471 33.8298 18.9674 33.8298 19.6351C33.8298 20.3029 33.162 20.7232 32.4696 20.7232H32.4698ZM32.4698 25.0757H16.6674C15.975 25.0757 15.3073 24.6553 15.3073 23.9876C15.3073 23.3198 15.9751 22.8995 16.6674 22.8995H32.4696C33.162 22.8995 33.8298 23.3199 33.8298 23.9876C33.8298 24.6553 33.162 25.0757 32.4696 25.0757H32.4698ZM28.0926 29.4527H16.6428C15.9504 29.4527 15.2827 29.0324 15.2827 28.3647C15.2827 27.697 15.9504 27.2766 16.6428 27.2766H28.0926C28.785 27.2766 29.4526 27.6969 29.4526 28.3647C29.4526 29.0325 28.785 29.4527 28.0926 29.4527Z"
          fill="#8AB4F8"
        />
        <Path
          d="M48.0003 23.8642C47.9508 34.3742 41.1007 43.3015 31.654 46.467C29.2552 47.283 26.6833 47.7034 24.0126 47.7034C10.807 47.7034 0.0991504 37.045 0.0249329 23.8642V24.0125C0.0249329 37.2676 10.7576 48.0001 24.0126 48.0001C26.6833 48.0001 29.2552 47.555 31.654 46.7637C41.1501 43.5736 48.0003 34.5968 48.0003 24.0125V23.8642Z"
          fill="#185ABC"
        />
        <Path
          d="M31.629 1.2365C29.2303 0.420579 26.6584 0.000232697 23.9876 0.000232697C10.7326 0.000138512 0 10.7327 0 23.9878V24.1361C0.0741233 10.9552 10.782 0.29682 23.9876 0.29682C26.6584 0.29682 29.2303 0.741937 31.629 1.53337C41.1004 4.69873 47.9258 13.626 47.9752 24.1361V23.9878C48 13.4035 41.1499 4.42672 31.629 1.2365Z"
          fill="#8AB4F8"
        />
      </G>
      <Defs>
        <ClipPath id={clipPathId}>
          <Rect width="48" height="48" fill="white" />
        </ClipPath>
      </Defs>
    </AccessibleSvg>
  )
}

export const GoogleMessagesRound = styled(GoogleMessagesRoundSvg).attrs(({ size, theme }) => ({
  size: size ?? theme.icons.sizes.standard,
}))``
