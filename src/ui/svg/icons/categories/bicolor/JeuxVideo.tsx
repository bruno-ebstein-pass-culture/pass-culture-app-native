import * as React from 'react'
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg'

import { IconInterface } from 'ui/svg/icons/types'
import { svgIdentifier } from 'ui/svg/utils'
// eslint-disable-next-line no-restricted-imports
import { ColorsEnum } from 'ui/theme/colors'

export const JeuxVideo: React.FunctionComponent<IconInterface> = ({
  size = 32,
  color = ColorsEnum.PRIMARY,
  color2,
  testID,
}) => {
  const { id: gradientId, fill: gradientFill } = svgIdentifier()

  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" testID={testID} aria-hidden>
      <Defs>
        <LinearGradient id={gradientId} x1="0%" x2="100%" y1="18.569%" y2="81.431%">
          <Stop offset="0%" stopColor={color ?? ColorsEnum.PRIMARY} />
          <Stop offset="100%" stopColor={color2 ?? color ?? ColorsEnum.SECONDARY} />
        </LinearGradient>
      </Defs>
      <Path
        fill={gradientFill}
        clipRule={'evenodd'}
        fillRule={'evenodd'}
        d="M25.0048 12.7006C25.0048 9.58165 27.4665 7.0535 30.5035 7.0535C33.2098 7.0535 35.4593 9.06107 35.9171 11.7053C36.0113 12.2494 36.4499 12.7006 37.002 12.7006C37.5542 12.7006 38.0084 12.2507 37.9394 11.7029C37.4631 7.92119 34.3156 5 30.5035 5C26.3622 5 23.0052 8.44753 23.0052 12.7006C23.0052 12.7892 23.0161 12.8751 23.0367 12.9571C23.0161 13.0392 23.0051 13.1253 23.0051 13.214V17.321H12.0077C8.79945 17.321 6.28248 18.4253 4.56631 20.3111C2.86246 22.1834 2.0375 24.7271 2.01007 27.4525C2 28.1631 2 31.4173 2 34.64V34.6731C2 39.265 5.62689 42.9898 10.0982 42.9898C12.8701 42.9898 15.4475 41.5366 16.9404 39.1257L16.9412 39.1244L20.0564 34.0769L23.941 34.0725L27.935 34.0679L31.0693 39.1355C32.5514 41.5354 35.1284 43 37.9018 43C42.3731 43 46 39.2753 46 34.6834V27.5105L46 27.5064L45.9999 27.4974C45.9568 22.4066 42.6924 17.321 37.002 17.321H25.0051V13.214C25.0051 13.1251 24.9941 13.0389 24.9734 12.9566C24.9939 12.8748 25.0048 12.789 25.0048 12.7006ZM36.0027 26.0483C36.8311 26.0483 37.5027 25.3588 37.5027 24.5082C37.5027 23.6576 36.8311 22.9681 36.0027 22.9681C35.1743 22.9681 34.5027 23.6576 34.5027 24.5082C34.5027 25.3588 35.1743 26.0483 36.0027 26.0483ZM34.5032 27.5885C34.5032 28.4391 33.8316 29.1286 33.0032 29.1286C32.1747 29.1286 31.5032 28.4391 31.5032 27.5885C31.5032 26.7379 32.1747 26.0484 33.0032 26.0484C33.8316 26.0484 34.5032 26.7379 34.5032 27.5885ZM39.002 29.1286C39.8304 29.1286 40.502 28.4391 40.502 27.5885C40.502 26.7379 39.8304 26.0484 39.002 26.0484C38.1735 26.0484 37.502 26.7379 37.502 27.5885C37.502 28.4391 38.1735 29.1286 39.002 29.1286ZM37.5027 30.6688C37.5027 31.5193 36.8311 32.2089 36.0027 32.2089C35.1743 32.2089 34.5027 31.5193 34.5027 30.6688C34.5027 29.8182 35.1743 29.1286 36.0027 29.1286C36.8311 29.1286 37.5027 29.8182 37.5027 30.6688ZM12.0081 31.6955C11.4581 31.6955 11.0081 31.2335 11.0081 30.6687V28.6153H9.00832C8.45844 28.6153 8.00854 28.1532 8.00854 27.5885C8.00854 27.0238 8.45844 26.5618 9.00832 26.5618H11.0081V24.8865V24.5082C11.0081 23.9435 11.4581 23.4815 12.0081 23.4815C12.5581 23.4815 13.0081 23.9435 13.0081 24.5082V26.3071V26.5618H13.3666H15.0069C15.5568 26.5618 16.0067 27.0238 16.0067 27.5885C16.0067 27.8455 15.9135 28.0812 15.7602 28.2618C15.5765 28.4781 15.3066 28.6153 15.0069 28.6153H13.0081V30.6687C13.0081 31.2335 12.5581 31.6955 12.0081 31.6955ZM22.5054 24.5082C22.5054 23.9412 22.9531 23.4815 23.5054 23.4815H24.5054C25.0577 23.4815 25.5054 23.9412 25.5054 24.5082C25.5054 25.0753 25.0577 25.535 24.5054 25.535H23.5054C22.9531 25.535 22.5054 25.0753 22.5054 24.5082ZM4.00949 27.4757C4.0325 25.1504 4.7322 23.1363 6.02718 21.7133C6.09436 21.6394 6.16338 21.5669 6.23427 21.4958C7.51738 20.2085 9.4108 19.3745 12.0077 19.3745H37.002C41.2479 19.3745 43.9618 23.1576 44.0004 27.5109V34.6834C44.0004 38.1412 41.2688 40.9465 37.9018 40.9465C35.8165 40.9465 33.8744 39.8439 32.7571 38.0345L29.0329 32.0132L21.0545 32.0223L18.9556 32.0247L15.2531 38.0238L15.2525 38.0248C14.1259 39.8435 12.1847 40.9363 10.0982 40.9363C6.73121 40.9363 3.99954 38.1309 3.99954 34.6731C3.99954 31.4211 3.99959 28.1686 4.00944 27.4804L4.00949 27.4757Z"
      />
    </Svg>
  )
}
