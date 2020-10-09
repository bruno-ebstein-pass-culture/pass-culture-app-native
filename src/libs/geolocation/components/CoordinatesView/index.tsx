import React, { FunctionComponent } from 'react'
import { StyleSheet, Text, View, StyleProp, ViewStyle } from 'react-native'

import { Colors } from 'ui/theme/colors'

import { GeoLocationCoordinates } from '../../types'

interface Props {
  position: GeoLocationCoordinates
  style?: StyleProp<ViewStyle>
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', flex: 1 },
  geolocationText: { fontSize: 9 },
  coordinateLabel: { color: Colors.blue },
})

/**
 * Temporary component to demonstrate the geolocation feature
 */
const CoordinatesView: FunctionComponent<Props> = ({ position, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.geolocationText}>
        <Text style={styles.coordinateLabel}> Lat </Text>
        {position?.latitude}
      </Text>
      <Text style={styles.geolocationText}>
        <Text style={styles.coordinateLabel}> Lon </Text>
        {position?.longitude}
      </Text>
      <Text style={styles.geolocationText}>
        <Text style={styles.coordinateLabel}> Alt </Text>
        {position?.altitude}
      </Text>
    </View>
  )
}

export default CoordinatesView
