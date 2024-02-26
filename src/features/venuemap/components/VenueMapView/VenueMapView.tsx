import React, { FunctionComponent, useState } from 'react'
import { useWindowDimensions } from 'react-native'
import styled from 'styled-components/native'

import { Venue } from 'features/venue/types'
import {
  calculateHorizontalDistance,
  calculateRoundRadiusInKilometers,
  calculateVerticalDistance,
  distanceToLatitudeDelta,
  distanceToLongitudeDelta,
} from 'features/venuemap/helpers/calculateDistanceMap'
import { useGetAllVenues } from 'features/venuemap/useGetAllVenues'
import { useLocation } from 'libs/location'
import MapView, { EdgePadding, Marker, Region } from 'libs/maps/maps'
import { ButtonPrimary } from 'ui/components/buttons/ButtonPrimary'
import { useGetHeaderHeight } from 'ui/components/headers/PageHeaderWithoutPlaceholder'
import { getSpacing } from 'ui/theme'

type Props = {
  padding: EdgePadding
}

const RADIUS_IN_METERS = 10000

type GeolocatedVenue = Venue & {
  _geoloc: { lat: number; lng: number }
}

export const VenueMapView: FunctionComponent<Props> = ({ padding }) => {
  const { userLocation } = useLocation()

  const { height, width } = useWindowDimensions()
  const screenRatio = height / width
  const headerHeight = useGetHeaderHeight()

  const verticalDistanceInMeters = calculateVerticalDistance(RADIUS_IN_METERS, screenRatio)
  const horizontalDistanceInMeters = calculateHorizontalDistance(RADIUS_IN_METERS, screenRatio)

  const latitudeDelta = distanceToLatitudeDelta(verticalDistanceInMeters)
  const longitudeDelta = distanceToLongitudeDelta(
    horizontalDistanceInMeters,
    userLocation?.latitude ?? 0
  )

  const defaultCoordinates: Region = {
    latitude: userLocation?.latitude ?? 0,
    longitude: userLocation?.longitude ?? 0,
    latitudeDelta,
    longitudeDelta,
  }

  const [currentRegion, setCurrentRegion] = useState<Region>(defaultCoordinates)
  const [lastRegionSearched, setLastRegionSearched] = useState<Region>(defaultCoordinates)
  const [showSearchButton, setShowSearchButton] = useState<boolean>(false)
  const radius = calculateRoundRadiusInKilometers(lastRegionSearched)

  const { data: venues = [] } = useGetAllVenues({ region: lastRegionSearched, radius })
  const geolocatedVenues = venues.filter(
    (venue): venue is GeolocatedVenue => !!(venue._geoloc?.lat && venue._geoloc.lng)
  )

  const handleRegionChangeComplete = (region: Region) => {
    setCurrentRegion(region)
    setShowSearchButton(true)
  }

  const handleSearchPress = () => {
    setLastRegionSearched(currentRegion)
    setShowSearchButton(false)
  }

  const handleMarkerPress = () => {
    setShowSearchButton(false)
  }

  return (
    <React.Fragment>
      <StyledMapView
        showsUserLocation
        initialRegion={defaultCoordinates}
        mapPadding={padding}
        rotateEnabled={false}
        onRegionChangeComplete={handleRegionChangeComplete}
        testID="venue-map-view">
        {geolocatedVenues.map((venue) => (
          <Marker
            key={venue.venueId}
            coordinate={{
              latitude: venue._geoloc.lat,
              longitude: venue._geoloc.lng,
            }}
            onPress={handleMarkerPress}
          />
        ))}
      </StyledMapView>
      {showSearchButton ? (
        <ButtonContainer top={headerHeight}>
          <ButtonPrimary wording="Rechercher dans cette zone" onPress={handleSearchPress} />
        </ButtonContainer>
      ) : null}
    </React.Fragment>
  )
}

const StyledMapView = styled(MapView)({ height: '100%', width: '100%' })

const ButtonContainer = styled.View<{ top: number }>(({ top }) => ({
  position: 'absolute',
  top: top + getSpacing(4),
  left: getSpacing(13.5),
  right: getSpacing(13.5),
  alignItems: 'center',
}))
