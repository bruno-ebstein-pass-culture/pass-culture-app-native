import * as React from 'react'
import Svg, { Defs, LinearGradient, Stop, Path, G, Mask, Use } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

import { svgIdentifier } from 'ui/svg/utils'

import { getSpacing } from '../theme'

interface Props {
  height?: number
}

const NotMemoizedHeaderBackground: React.FC<Props> = (props) => {
  const width = useTheme().appContentWidth + getSpacing(1)
  const height = props.height || getSpacing(73.5)
  const { id: id1, fill: fill1 } = svgIdentifier()
  const { id: id2, fill: fill2 } = svgIdentifier()
  const { id: id3, xlinkHref: xlinkHref3 } = svgIdentifier()
  const { id: id4, fill: fill4 } = svgIdentifier()
  return (
    <Svg
      preserveAspectRatio="none"
      height={height}
      width={width}
      viewBox={`0 0 375 352`}
      aria-hidden>
      <Defs>
        <LinearGradient id={id1} x1="34.782%" x2="88.023%" y1="5.945%" y2="111.119%">
          <Stop offset="0%" stopColor="#EB0055" />
          <Stop offset="100%" stopColor="#320096" />
        </LinearGradient>
        <LinearGradient id={id2} x1="50%" x2="37.519%" y1="15.944%" y2="116.187%">
          <Stop offset="0%" stopColor="#EB0055" />
          <Stop offset="100%" stopColor="#320096" />
        </LinearGradient>
        <Path id={id3} d="M0 0h375v352H0z" />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Mask id={id4} fill="#fff">
          <Use xlinkHref={xlinkHref3} />
        </Mask>
        <Use fill={fill1} xlinkHref={xlinkHref3} />
        <Path
          fill={fill2}
          d="M89.727-4.98c24.421 187.472 211.753 121.594 197.5 277.418-4.24 46.354-22.177 69.072-46.982 79.563L0 351.989V-5z"
          mask={fill4}
        />
      </G>
    </Svg>
  )
}

export const HeaderBackground = React.memo(NotMemoizedHeaderBackground)
