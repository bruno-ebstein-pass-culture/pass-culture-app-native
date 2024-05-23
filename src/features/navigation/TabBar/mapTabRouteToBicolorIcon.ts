import React from 'react'

import { BicolorFavoriteCount } from 'features/favorites/components/BicolorFavoriteCount'
import { BicolorFavoriteCountV2 } from 'features/favorites/components/BicolorFavoriteCountV2'
import { BicolorBookings } from 'ui/svg/icons/BicolorBookings'
import { BicolorBookingsV2 } from 'ui/svg/icons/BicolorBookingsV2'
import { BicolorLogo } from 'ui/svg/icons/BicolorLogo'
import { BicolorSearch } from 'ui/svg/icons/BicolorSearch'
import { BicolorSearchV2 } from 'ui/svg/icons/BicolorSearchV2'
import { BicolorTabBarProfile } from 'ui/svg/icons/BicolorTabBarProfile'
import { BicolorTabBarProfileV2 } from 'ui/svg/icons/BicolorTabBarProfileV2'
import { AccessibleBicolorIcon } from 'ui/svg/icons/types'

import { TabRouteName } from './types'

export function mapTabRouteToBicolorIcon(
  route: TabRouteName,
  v2: boolean
): React.FC<AccessibleBicolorIcon> {
  switch (route) {
    case 'Home':
      return BicolorLogo
    case 'SearchStackNavigator':
      return v2 ? BicolorSearchV2 : BicolorSearch
    case 'Bookings':
      return v2 ? BicolorBookingsV2 : BicolorBookings
    case 'Favorites':
      return v2 ? BicolorFavoriteCountV2 : BicolorFavoriteCount
    case 'Profile':
      return v2 ? BicolorTabBarProfileV2 : BicolorTabBarProfile
    default:
      return BicolorLogo
  }
}
