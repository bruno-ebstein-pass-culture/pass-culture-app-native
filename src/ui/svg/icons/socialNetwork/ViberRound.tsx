import * as React from 'react'
import { Path, Defs, ClipPath, G, Rect } from 'react-native-svg'
import styled from 'styled-components/native'

import { AccessibleSvg } from 'ui/svg/AccessibleSvg'
import { AccessibleIcon } from 'ui/svg/icons/types'
import { svgIdentifier } from 'ui/svg/utils'

const ViberRoundSvg = ({ color: _color, size, accessibilityLabel, testID }: AccessibleIcon) => {
  const { id: clipPathId, fill: clipPathFill } = svgIdentifier()

  return (
    <AccessibleSvg
      width={size}
      height={size}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      viewBox="0 0 48 48">
      <G clipPath={clipPathFill}>
        <Rect width={48} height={48} rx={24} fill="#fff" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0Zm1.437 9.776c1.632.204 2.951.597 4.398 1.303 1.423.696 2.334 1.354 3.539 2.553 1.129 1.132 1.755 1.99 2.42 3.32.924 1.857 1.45 4.064 1.541 6.494.033.83.01 1.014-.18 1.25-.36.46-1.153.384-1.423-.132-.086-.17-.11-.317-.138-.98-.047-1.019-.119-1.677-.26-2.463-.56-3.084-2.04-5.547-4.403-7.314-1.969-1.478-4.004-2.198-6.67-2.354-.901-.052-1.058-.085-1.262-.242-.38-.298-.398-1-.033-1.326.223-.204.38-.232 1.153-.208.403.014.996.061 1.318.1Zm-10.844.512c.166.056.422.19.57.284.9.597 3.41 3.803 4.23 5.404.47.915.627 1.592.48 2.094-.152.54-.403.824-1.528 1.729-.45.365-.873.739-.939.838-.17.247-.308.73-.308 1.07.005.792.517 2.227 1.19 3.33.522.858 1.457 1.957 2.382 2.8 1.086.995 2.044 1.672 3.126 2.207 1.39.692 2.24.867 2.86.578.157-.07.323-.166.375-.208.048-.043.413-.488.812-.98.768-.967.944-1.123 1.47-1.303.67-.228 1.352-.166 2.04.184.522.27 1.66.976 2.396 1.488.967.677 3.036 2.363 3.316 2.7.493.606.578 1.383.246 2.24-.35.905-1.717 2.6-2.67 3.325-.864.654-1.476.905-2.282.943-.664.033-.94-.024-1.789-.374-6.66-2.743-11.978-6.835-16.2-12.458-2.206-2.936-3.885-5.982-5.033-9.141-.67-1.843-.702-2.644-.152-3.586.237-.398 1.248-1.383 1.983-1.933 1.224-.91 1.788-1.245 2.239-1.34.308-.067.844-.014 1.186.109Zm11.172 2.922c2.88.422 5.109 1.757 6.57 3.927.82 1.222 1.333 2.657 1.508 4.197.062.563.062 1.591-.004 1.762-.062.16-.261.379-.432.468-.185.095-.579.086-.797-.028-.365-.185-.474-.478-.474-1.274 0-1.227-.318-2.52-.868-3.524a7.205 7.205 0 0 0-2.647-2.752c-.954-.569-2.363-.99-3.648-1.094-.465-.038-.722-.133-.897-.337a.862.862 0 0 1-.071-1.07c.246-.384.626-.445 1.76-.275Zm1.01 3.576c.935.2 1.651.555 2.263 1.128.788.743 1.22 1.643 1.409 2.936.128.844.076 1.175-.223 1.45-.28.256-.797.265-1.11.023-.228-.17-.299-.35-.351-.838-.062-.649-.176-1.104-.37-1.525-.418-.895-1.153-1.36-2.396-1.511-.583-.071-.759-.137-.949-.36-.346-.412-.213-1.08.266-1.326.18-.09.256-.1.655-.076.246.014.612.057.806.1Z"
          fill="#7F4DA0"
        />
      </G>
      <Defs>
        <ClipPath id={clipPathId}>
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </AccessibleSvg>
  )
}

export const ViberRound = styled(ViberRoundSvg).attrs(({ color, size, theme }) => ({
  color: color ?? theme.colors.greyDark,
  size: size ?? theme.icons.sizes.standard,
}))``