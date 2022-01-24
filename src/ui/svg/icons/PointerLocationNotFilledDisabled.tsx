import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

// eslint-disable-next-line no-restricted-imports
import { ColorsEnum } from 'ui/theme/colors'
import { STANDARD_ICON_SIZE } from 'ui/theme/constants'

import { IconInterface } from './types'

export const PointerLocationNotFilledDisabled: React.FunctionComponent<IconInterface> = ({
  size = STANDARD_ICON_SIZE,
  color = ColorsEnum.PRIMARY,
  testID,
}) => (
  <Svg width={size} height={size} testID={testID} fill={color} viewBox="0 0 48 48">
    <Path d="M23.9999 4C21.6277 4 19.4038 4.60425 17.4617 5.66142C16.9767 5.92546 16.7975 6.53264 17.0616 7.0176C17.3257 7.50257 17.933 7.68167 18.4181 7.41763C20.076 6.51517 21.9721 5.99963 23.9999 5.99963C30.4476 5.99963 35.6699 11.2209 35.6699 17.6674C35.6699 19.6873 34.8451 21.7826 34.1305 23.4531L34.13 23.4541C33.8913 24.0138 32.5928 26.545 31.0046 29.5858L25.4472 24.0294C27.8675 23.391 29.6501 21.1887 29.6501 18.5672C29.6501 15.4455 27.1224 12.9183 24.0001 12.9183C21.3781 12.9183 19.1754 14.7005 18.5368 17.1204L6.70711 5.29284C6.31658 4.90239 5.68342 4.90239 5.29289 5.29284C4.90237 5.68329 4.90237 6.31634 5.29289 6.70679L11.3794 12.7921C11.2383 12.9066 11.1266 13.0608 11.0636 13.2454C10.5892 14.6362 10.3301 16.1148 10.3301 17.6674C10.3301 20.0825 11.1437 22.0715 11.9613 24.0702L12.0244 24.2245L12.0253 24.2267C12.4786 25.3282 14.8827 29.9517 17.1275 34.2186C18.2596 36.3703 19.3646 38.4564 20.1865 40.0045C20.5975 40.7785 20.9377 41.4182 21.1753 41.8643L21.5478 42.5634L21.5534 42.5738L21.5645 42.5935C22.6468 44.464 25.3523 44.4754 26.4288 42.5881C26.4338 42.5793 26.4389 42.5699 26.4437 42.561L26.7013 42.0749C26.8671 41.7618 27.1067 41.309 27.4019 40.75C27.9923 39.632 28.8053 38.0887 29.696 36.3877C29.9522 35.8985 29.7632 35.2944 29.2739 35.0382C28.7846 34.7821 28.1803 34.9711 27.9241 35.4603C27.0348 37.1587 26.2229 38.6998 25.6333 39.8164C25.3385 40.3747 25.0993 40.8267 24.9338 41.1392L24.6852 41.6082C24.3798 42.1261 23.6226 42.1374 23.3028 41.6043L22.9407 40.9247C22.7035 40.4792 22.3636 39.8402 21.953 39.0669C21.1318 37.5202 20.0281 35.4365 18.8976 33.2877C16.6174 28.9537 14.2815 24.454 13.8748 23.4658L13.8719 23.4586C13.012 21.3548 12.3301 19.6864 12.3301 17.6674C12.3301 16.4741 12.5087 15.3343 12.8397 14.2522L23.2929 24.7034L30.538 31.9472C30.5475 31.957 30.5572 31.9667 30.5671 31.9762L41.2929 42.7001C41.6834 43.0905 42.3166 43.0905 42.7071 42.7001C43.0976 42.3096 43.0976 41.6766 42.7071 41.2861L32.4867 31.0677C34.1845 27.8229 35.6774 24.9234 35.9693 24.2395C36.6747 22.5906 37.6699 20.1467 37.6699 17.6674C37.6699 10.1166 31.5522 4 23.9999 4ZM25.5601 42.0929C26.4434 42.5615 26.4437 42.561 26.4437 42.561L25.5601 42.0929ZM21.5478 42.5634L22.4215 42.0974L21.6018 42.5347C21.5478 42.5635 21.5478 42.5635 21.5478 42.5634ZM20.2993 18.8825L23.6847 22.2673C23.7839 22.2343 23.8899 22.2165 24.0001 22.2165C26.0178 22.2165 27.6501 20.5845 27.6501 18.5672C27.6501 16.5499 26.0178 14.9179 24.0001 14.9179C21.9824 14.9179 20.3501 16.5499 20.3501 18.5672C20.3501 18.6774 20.3323 18.7834 20.2993 18.8825Z" />
  </Svg>
)
