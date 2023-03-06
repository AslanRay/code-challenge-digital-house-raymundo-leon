import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native';
import { useSearchParams, Stack } from 'expo-router';
import { formatDate } from '../utils/formatDate';
import { formatPoints } from '../components/scoreCard/utils/formatPoints';
import { useGoBack } from '../hooks/useGoBack';

export default function DetailsScreen() {
  const { product, points, image, createdAt, is_redemption } = useSearchParams();
  const { goBack } = useGoBack();
  const dateFormated = formatDate(createdAt as string);
  const pointNumber = parseInt(points as string)
  const formatedPoints = formatPoints({ points: pointNumber }); 
  
  return (
    <ScrollView style={styles.container}> 
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.titleContainer}>
        <Text style={styles.product}>{product}</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: image as string }} />
        </View>
        <Text style={styles.detailsTitle}>Detalles del producto:</Text>
        <Text style={styles.purchaseDate}>{`Comprado el ${dateFormated}`}</Text>
        <Text style={styles.purchaseInfo}>
          {`Con esta compra ${is_redemption ? 'gastaste' : 'acumulaste'}:`}
        </Text>
        <Text style={styles.points}>{`${formatedPoints} puntos`}</Text>
        <Pressable onPress={goBack}>
          <View style={styles.backButton}>
            <Text style={styles.backText}>Aceptar</Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    width: '100%',
    height: 100,
    backgroundColor: '#CFD6FF',
    justifyContent: 'flex-end',
    paddingLeft: 20,
    paddingBottom: 24,
  },
  product: {
    fontSize: 24,
    fontWeight: '800',
    fontFamily: 'Avenir',
    color: '#000'
  },
  imageContainer: {
    width: 350,
    height: 353,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    backgroundColor: '#FFF',
    elevation: 8,
    marginTop: 20
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  detailsTitle: {
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '800',
    color: '#9B9898',
    marginTop: 32
  },
  mainContainer: {
    paddingHorizontal: 20
  },
  purchaseDate: {
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '800',
    color: '#000',
    marginTop: 19
  },
  purchaseInfo: {
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '800',
    color: '#9B9898',
    marginTop: 20
  },
  points: {
    fontFamily: 'Avenir',
    fontSize: 24,
    fontWeight: '800',
    color: '#000',
    marginTop: 32
  },
  backButton: {
    width: 353,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#334FFA',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 47,
    marginBottom: 40
  },
  backText: {
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '800',
    color: '#FFF',
  }
});
