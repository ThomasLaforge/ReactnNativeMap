import React from 'react';
import { MapView, Marker }from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MapScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <MapView style={styles.map} region={
            {
            latitude: 45.18825,
            longitude: 5.7324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }
        }>
        <Marker coordinate={region}/>
       </MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});