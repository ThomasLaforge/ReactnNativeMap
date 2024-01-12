import React from 'react';
import MapView from 'react-native-maps';
import { SafeAreaView, StyleSheet, View } from 'react-native';

export default function Map() {
  return (
    <SafeAreaView style={styles.container}>
      <MapView style={styles.map} />
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