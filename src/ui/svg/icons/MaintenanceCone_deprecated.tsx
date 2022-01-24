import * as React from 'react'
import Svg, { Path, G } from 'react-native-svg'

// eslint-disable-next-line no-restricted-imports
import { ColorsEnum } from 'ui/theme/colors'

import { RectangleIconInterface } from './types'

export function MaintenanceConeDeprecated({
  width = 197,
  height = 124,
  color = ColorsEnum.WHITE,
  testID,
}: RectangleIconInterface) {
  return (
    <Svg width={width} height={height} viewBox="0 0 197 124" testID={testID}>
      <G fill="none" fillRule="evenodd">
        <G fill={color}>
          <G>
            <Path
              d="M103.466 19c2.128 0 4.007 1.3 4.667 3.207l.054.165 23.73 78.073c.056.185.083.372.083.555h40.872c1.175 0 2.128.895 2.128 2 0 1.065-.886 1.936-2.003 1.997l-.125.003h-56.744c-1.175 0-2.128-.895-2.128-2 0-1.065.886-1.936 2.003-1.997l.125-.003h11.574l-10.631-34.976-49.677 21.681L63.299 101h4.59c1.166 0 2.111.895 2.111 2 0 1.065-.879 1.936-1.987 1.997l-.124.003H43.111c-1.166 0-2.111-.895-2.111-2 0-1.065.879-1.936 1.987-1.997l.124-.003H59c0-.148.017-.298.054-.448l.031-.114L83.13 22.357c.595-1.933 2.425-3.278 4.53-3.354l.186-.003h15.62zm-75.533 82c1.142 0 2.067.895 2.067 2 0 1.065-.86 1.936-1.945 1.997l-.122.003h-3.866c-1.142 0-2.067-.895-2.067-2 0-1.065.86-1.936 1.945-1.997l.122-.003h3.866zm85.286-47.648L72.661 70.601l-3.668 11.91 46.871-20.456-2.645-8.703zm-4.326-14.232L77.931 53.487l-3.737 12.134 37.86-16.101-3.161-10.4zM103.466 23h-15.62c-.284 0-.536.161-.645.404l-.029.075-7.615 24.727 28.131-13.053-3.547-11.671c-.08-.26-.314-.446-.59-.477l-.085-.005z"
              transform="translate(-89 -184) translate(89 184)"
            />
          </G>
        </G>
      </G>
    </Svg>
  )
}
