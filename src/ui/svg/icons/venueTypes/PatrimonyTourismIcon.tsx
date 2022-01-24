import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

// eslint-disable-next-line no-restricted-imports
import { ColorsEnum } from 'ui/theme/colors'

import { IconInterface } from '../types'

export function PatrimonyTourismIcon({
  size = 32,
  color = ColorsEnum.BLACK,
  testID,
}: IconInterface): JSX.Element {
  return (
    <Svg width={size} height={size} testID={testID} fill={color} viewBox="0 0 96 96" aria-hidden>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.4007 4.80969C16.7851 4.30036 17.3926 4 18.0382 4H33.0191C34.1448 4 35.0573 4.89604 35.0573 6.00136V13.8067H39.5414V6.00136C39.5414 4.89604 40.4539 4 41.5796 4H54.4204C55.5461 4 56.4586 4.89604 56.4586 6.00136V13.8067H60.9427V6.00136C60.9427 4.89604 61.8552 4 62.9809 4H77.9618C78.6071 4 79.2142 4.30005 79.5987 4.80894C79.9832 5.31783 80.0995 5.97543 79.9124 6.58183L73.8589 26.1952C73.8417 26.251 73.8222 26.3054 73.8006 26.3586C74.5521 27.3355 75.0064 28.5315 75.0064 29.8776V55.0348C75.0064 56.1401 74.0938 57.0361 72.9681 57.0361C71.8425 57.0361 70.9299 56.1401 70.9299 55.0348V29.8776C70.9299 28.8931 69.8752 27.6161 67.9745 27.6161H28.0255C26.1182 27.6161 25.0701 28.8787 25.0701 29.8776V89.3582C25.0701 90.4635 24.1575 91.3595 23.0319 91.3595C21.9062 91.3595 20.9937 90.4635 20.9937 89.3582V29.8776C20.9937 28.5166 21.4525 27.3137 22.2104 26.3351C22.1928 26.29 22.1766 26.244 22.1621 26.197L16.0882 6.58362C15.9003 5.97708 16.0163 5.31902 16.4007 4.80969ZM75.2143 8.00273L70.2865 23.9688C69.5471 23.7369 68.765 23.6133 67.9745 23.6133H28.0255C27.2416 23.6133 26.4653 23.7341 25.7305 23.9614L20.7884 8.00273H30.9809V15.808C30.9809 16.9134 31.8934 17.8094 33.0191 17.8094H41.5796C42.7053 17.8094 43.6178 16.9134 43.6178 15.808V8.00273H52.3822V15.808C52.3822 16.9134 53.2947 17.8094 54.4204 17.8094H62.9809C64.1066 17.8094 65.0191 16.9134 65.0191 15.808V8.00273H75.2143ZM75.0061 67.3032C75.0061 66.1978 74.0936 65.3018 72.9679 65.3018C71.8422 65.3018 70.9297 66.1978 70.9297 67.3032V89.9986C70.9297 91.104 71.8422 92 72.9679 92C74.0936 92 75.0061 91.104 75.0061 89.9986V67.3032ZM43.3528 47.1695C43.3528 45.5704 45.0831 43.6871 47.9795 43.6871C50.8921 43.6871 52.6063 45.5668 52.6063 47.1695V56.9761C52.6063 57.0726 52.6132 57.1675 52.6267 57.2603V64.9015H43.3528V47.1695ZM56.6827 47.1695V56.692C56.6962 56.7848 56.7031 56.8797 56.7031 56.9761V66.9029C56.7031 68.0082 55.7906 68.9043 54.6649 68.9043H41.3146C40.1889 68.9043 39.2764 68.0082 39.2764 66.9029V47.1695C39.2764 42.7244 43.5385 39.6844 47.9795 39.6844C52.4454 39.6844 56.6827 42.728 56.6827 47.1695Z"
      />
    </Svg>
  )
}
