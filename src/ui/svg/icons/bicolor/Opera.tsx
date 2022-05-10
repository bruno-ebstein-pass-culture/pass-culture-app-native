import React from 'react'
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg'
import styled, { useTheme } from 'styled-components/native'

import { svgIdentifier } from 'ui/svg/utils'

import { IconInterface } from '../types'

const OperaSvg: React.FunctionComponent<IconInterface> = ({ size, color, color2, testID }) => {
  const { id: gradientId, fill: gradientFill } = svgIdentifier()
  const {
    colors: { primary, secondary },
  } = useTheme()
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" testID={testID} aria-hidden>
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
        d="M1.33333 4C1.33333 3.63181 1.63181 3.33334 2 3.33334H15.36C15.7282 3.33334 16.0267 3.63181 16.0267 4C16.0267 4.36819 15.7282 4.66667 15.36 4.66667H3.13661C3.31301 4.8104 3.54002 4.96117 3.82148 5.11505C4.69226 5.59114 5.96083 6.03103 7.48649 6.39117C7.84483 6.47575 8.06675 6.83482 7.98217 7.19316C7.89758 7.5515 7.53851 7.77343 7.18017 7.68884C5.99181 7.40832 4.90678 7.07117 4.00831 6.68436C4.71047 7.37761 5.66157 8.02494 6.79695 8.58979C9.36615 9.86797 12.7637 10.6667 16 10.6667C19.576 10.6667 22.7947 9.8655 25.0958 8.60227C26.0995 8.05129 26.9019 7.42978 27.4899 6.76702C26.933 7.02565 26.2995 7.2589 25.608 7.46611C23.1139 8.2135 19.7131 8.66667 16 8.66667C14.8527 8.66667 13.6875 8.61238 12.5449 8.51773C12.178 8.48733 11.9052 8.16523 11.9356 7.7983C11.966 7.43137 12.2881 7.15855 12.655 7.18895C13.7658 7.28096 14.8939 7.33334 16 7.33334C19.6201 7.33334 22.8861 6.88984 25.2253 6.18889C26.3991 5.83714 27.302 5.43156 27.8965 5.01148C28.0687 4.88981 28.2049 4.77455 28.3118 4.66667H24.6667C24.2985 4.66667 24 4.36819 24 4C24 3.63181 24.2985 3.33334 24.6667 3.33334H29.3333H29.3333H30C30.3682 3.33334 30.6667 3.63181 30.6667 4V18L30.6667 18.0028V26.6667C30.6667 27.0349 30.3682 27.3333 30 27.3333C29.6778 27.3333 29.409 27.1048 29.3469 26.801C29.338 26.7576 29.3333 26.7127 29.3333 26.6667V18.6667L29.06 18.6667L29 18.6667L28.9989 18.6667H28C27.3366 18.6667 26.7273 19.2122 26.23 20.4965C25.7523 21.7304 25.4967 23.3744 25.3918 24.9315L25.3918 24.932C25.3014 26.2575 24.7579 27.5182 23.8047 28.4714C23.5444 28.7318 23.1223 28.7318 22.8619 28.4714C22.6016 28.2111 22.6016 27.7889 22.8619 27.5286C23.3524 27.0381 23.7026 26.4346 23.8961 25.7734H22.8126C22.932 25.9887 23 26.2364 23 26.5C23 27.3284 22.3284 28 21.5 28C20.6716 28 20 27.3284 20 26.5C20 25.7824 20.5039 25.1825 21.1772 25.0348C21.2131 24.7005 21.4961 24.4401 21.84 24.4401H24.0917C24.216 22.9381 24.4829 21.3161 24.9866 20.0151C25.2654 19.295 25.6528 18.5896 26.1854 18.0831C26.159 18.068 26.1326 18.0528 26.1063 18.0374C25.4587 17.658 24.7667 17.1197 24.0746 16.4678C22.7577 15.2275 21.3963 13.5341 20.2976 11.6201C18.9394 11.8673 17.4942 12 16 12C14.579 12 13.1286 11.8556 11.7204 11.5888C10.6185 13.5156 9.24947 15.2207 7.92542 16.4678C7.23331 17.1197 6.54128 17.658 5.89369 18.0374C5.86737 18.0528 5.84101 18.068 5.81461 18.0831C6.34721 18.5896 6.73455 19.295 7.01336 20.0151C7.51705 21.3161 7.78399 22.9381 7.90835 24.4401H12.1733V24.4399V19.4034L11.7474 19.6094C11.416 19.7698 11.0173 19.6311 10.857 19.2996C10.6966 18.9682 10.8353 18.5695 11.1668 18.4092L13.498 17.2814C13.8294 17.121 14.2281 17.2597 14.3884 17.5912C14.5488 17.9226 14.4101 18.3213 14.0786 18.4816L13.489 18.7669C13.5006 18.816 13.5067 18.8673 13.5067 18.9199V24.4399V24.4401H17.3333C17.7015 24.4401 18 24.7386 18 25.1068C18 25.475 17.7015 25.7734 17.3333 25.7734H8.10385C8.29743 26.4346 8.64758 27.0381 9.13807 27.5286C9.39842 27.7889 9.39842 28.2111 9.13807 28.4714C8.87772 28.7318 8.45561 28.7318 8.19526 28.4714C7.24205 27.5182 6.69859 26.2575 6.60821 24.932L6.60817 24.9315C6.50327 23.3744 6.24768 21.7304 5.76997 20.4965C5.27269 19.2122 4.66336 18.6667 4 18.6667L2.66667 18.6667V26C2.66667 26.3682 2.36819 26.6667 2 26.6667C1.63181 26.6667 1.33333 26.3682 1.33333 26V18V4ZM10.3517 11.2876C9.35332 12.9536 8.15542 14.4195 7.01124 15.4972C6.37002 16.1012 5.75789 16.5716 5.21965 16.887C4.66597 17.2114 4.25527 17.3333 4 17.3333H2.66667V7.2027C2.69574 7.23612 2.72519 7.26936 2.75501 7.30241C3.60602 8.24569 4.78408 9.07028 6.13985 9.75194C5.71074 10.9051 5.36397 11.7185 5.12433 12.2439C5.00007 12.5163 4.90463 12.7112 4.84149 12.8358C4.80992 12.8981 4.78642 12.9429 4.77143 12.9709L4.75538 13.0006L4.75222 13.0064C4.57189 13.3272 4.68561 13.7335 5.00635 13.914C5.32719 14.0946 5.73383 13.9807 5.91444 13.6599L5.91488 13.6591L5.91565 13.6577L5.9178 13.6538L5.92453 13.6416C5.93009 13.6315 5.93779 13.6173 5.94757 13.599C5.96714 13.5624 5.99505 13.5091 6.03087 13.4384C6.10252 13.297 6.20584 13.0857 6.33741 12.7972C6.58466 12.2552 6.93177 11.4408 7.35606 10.3065C8.29501 10.6942 9.30418 11.0245 10.3517 11.2876ZM5.91444 13.6599L5.33337 13.333C5.91432 13.6601 5.91438 13.66 5.91444 13.6599ZM21.6703 11.3242C22.6642 12.9751 23.853 14.4274 24.9888 15.4972C25.63 16.1012 26.2421 16.5716 26.7804 16.887C26.9744 17.0007 27.1509 17.0895 27.3093 17.1569C27.2069 16.9879 27.1048 16.8072 27.0033 16.6169C26.4106 15.5047 25.7935 13.9676 25.2742 12.2162C25.1695 11.8632 25.3708 11.4922 25.7238 11.3875C26.0768 11.2828 26.4478 11.4842 26.5525 11.8371C27.0532 13.5257 27.6394 14.9753 28.18 15.9898C28.4519 16.5 28.7001 16.8769 28.9054 17.1162C29.007 17.2345 29.0826 17.3008 29.1293 17.3333H29.3333L29.3333 6.47343C28.6022 7.78134 27.3196 8.90253 25.7375 9.77107C24.5595 10.4177 23.1835 10.9451 21.6703 11.3242Z"
      />
    </Svg>
  )
}

export const Opera = styled(OperaSvg).attrs(({ color, size, theme }) => ({
  color: color ?? theme.colors.black,
  size: size ?? theme.icons.sizes.standard,
}))``