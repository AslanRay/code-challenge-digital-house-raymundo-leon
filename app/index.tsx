import React from 'react';
import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { ProductsList } from '../components/productList/ProductsList';
import { ScoreCard } from '../components/scoreCard/ScoreCard';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Text style={styles.welcome}>Bienvenido de vuelta!</Text>
      <Text style={styles.name}>Ruben Rodriguez</Text>
      <Text style={styles.points}>TUS PUNTOS</Text>
      <View style={styles.scoreCardContainer}>
        <ScoreCard />
      </View>
      <Text style={styles.moves}>TUS MOVIMIENTOS</Text>
      <ProductsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 27,
    paddingHorizontal: 20,
  },
  scoreCardContainer: {
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    fontWeight: '800',
    fontFamily: 'Avenir',
    color: '#020202',
    marginTop: 20
  },
  name: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Avenir',
    color: '#020202'
  },
  points: {
    fontSize: 14,
    fontWeight: '800',
    fontFamily: 'Avenir',
    color: '#9B9898',
    marginVertical: 20
  },
  moves: {
    fontSize: 14,
    fontWeight: '800',
    fontFamily: 'Avenir',
    color: '#9B9898',
    marginVertical: 20
  }
});
