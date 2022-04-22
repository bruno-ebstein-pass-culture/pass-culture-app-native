import * as React from 'react'
import { Defs, LinearGradient, Path, Stop } from 'react-native-svg'
import styled, { useTheme } from 'styled-components/native'

import { AccessibleSvg } from 'ui/svg/AccessibleSvg'
import { AccessibleIcon } from 'ui/svg/icons/types'
import { svgIdentifier } from 'ui/svg/utils'

function TurntableSvg({
  size,
  color,
  color2,
  accessibilityLabel,
  testID,
}: AccessibleIcon): JSX.Element {
  const {
    colors: { primary, secondary },
  } = useTheme()
  const { id: gradientId, fill: gradientFill } = svgIdentifier()
  return (
    <AccessibleSvg
      width={size}
      height={size}
      testID={testID}
      viewBox="0 0 96 96"
      accessibilityLabel={accessibilityLabel}>
      <Defs>
        <LinearGradient id={gradientId} x1="28.841%" x2="71.159%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor={color ?? primary} />
          <Stop offset="100%" stopColor={color2 ?? color ?? secondary} />
        </LinearGradient>
      </Defs>
      <Path
        fill={gradientFill}
        clipRule={'evenodd'}
        fillRule={'evenodd'}
        d="M68.6201 16.4092C53.0608 5.33047 31.4703 8.97913 20.4103 24.5387L20.409 24.5405C11.311 37.3096 12.1443 54.161 21.3398 65.9067V38.7143L24.9505 35.0865C23.7222 32.6589 24.1206 29.6109 26.1457 27.5858L29.3057 24.4258C31.8267 21.9048 35.933 21.9048 38.4541 24.4258C40.9751 26.9469 40.9751 31.0532 38.4541 33.5742L35.2941 36.7342C33.2636 38.7647 30.2049 39.1598 27.7742 37.9196L25.3398 40.3656V75.5601H27.8201C30.1647 75.5601 32.0601 77.4555 32.0601 79.8001V84.2801C32.0601 86.6362 30.1331 88.5201 27.8201 88.5201H18.8601C16.5155 88.5201 14.6201 86.6246 14.6201 84.2801V79.8001C14.6201 77.4555 16.5155 75.5601 18.8601 75.5601H21.3398V71.4665C20.9681 71.3789 20.6174 71.1842 20.3374 70.8839C8.10361 57.7642 6.32794 37.4111 17.1507 22.2203C29.4909 4.86065 53.5798 0.789675 70.9402 13.1508C88.2981 25.5101 92.3712 49.578 80.0098 66.9394C70.748 79.9565 54.8847 85.5002 40.2081 82.2527C39.1296 82.0141 38.4488 80.9464 38.6874 79.8679C38.926 78.7894 39.9938 78.1086 41.0722 78.3472C54.2356 81.2598 68.4523 76.2834 76.7506 64.6205L76.751 64.6199C87.829 49.0615 84.1821 27.4897 68.6201 16.4092ZM23.0567 79.5601H18.8601C18.7247 79.5601 18.6201 79.6646 18.6201 79.8001V84.2801C18.6201 84.4155 18.7247 84.5201 18.8601 84.5201H27.8201C27.8752 84.5201 27.9356 84.4983 27.9878 84.4465C28.0382 84.3964 28.0601 84.3391 28.0601 84.2801V79.8001C28.0601 79.6646 27.9555 79.5601 27.8201 79.5601H23.623C23.5305 79.5732 23.436 79.5799 23.3398 79.5799C23.2437 79.5799 23.1492 79.5732 23.0567 79.5601ZM48.6202 38.5601C45.3285 38.5601 42.6602 41.2284 42.6602 44.5201C42.6602 47.8117 45.3285 50.4801 48.6202 50.4801C51.9118 50.4801 54.5802 47.8117 54.5802 44.5201C54.5802 41.2284 51.9118 38.5601 48.6202 38.5601ZM38.6602 44.5201C38.6602 39.0193 43.1194 34.5601 48.6202 34.5601C54.1209 34.5601 58.5802 39.0193 58.5802 44.5201C58.5802 50.0208 54.1209 54.4801 48.6202 54.4801C43.1194 54.4801 38.6602 50.0208 38.6602 44.5201ZM32.1341 27.2542C33.093 26.2953 34.6667 26.2953 35.6257 27.2542C36.5846 28.2132 36.5846 29.7869 35.6257 30.7458L32.4657 33.9058C31.5067 34.8648 29.933 34.8648 28.9741 33.9058C28.0151 32.9469 28.0151 31.3732 28.9741 30.4142L32.1341 27.2542Z"
      />
    </AccessibleSvg>
  )
}

export const Turntable = styled(TurntableSvg).attrs(({ color, size, theme }) => ({
  color: color ?? theme.colors.black,
  size: size ?? theme.icons.sizes.standard,
}))``
