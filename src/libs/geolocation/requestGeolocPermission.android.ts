import { PermissionsAndroid } from 'react-native'

import { GeolocPermissionState } from './permissionState.d'

export const requestGeolocPermissionSystem = async (): Promise<GeolocPermissionState> => {
  const permissions = await PermissionsAndroid.requestMultiple([
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
  ])
  if (
    permissions[PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION] === 'granted' ||
    permissions[PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION] === 'granted'
  ) {
    return GeolocPermissionState.GRANTED
  } else if (
    permissions[PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION] === 'never_ask_again' ||
    permissions[PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION] === 'never_ask_again'
  ) {
    return GeolocPermissionState.NEVER_ASK_AGAIN
  }
  return GeolocPermissionState.DENIED
}

export const requestGeolocPermission = requestGeolocPermissionSystem
