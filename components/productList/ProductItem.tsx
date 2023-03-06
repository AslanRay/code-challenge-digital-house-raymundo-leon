import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Product } from '../../types/product';
import { formatDate } from '../../utils/formatDate';
import { useNavToDetails } from './hooks/useNavToDetails';

const ProductItem = ({ product, points, image, createdAt, is_redemption }: Product) => {
  const dateFormated = formatDate(createdAt);
  const { navigateToDetails } = useNavToDetails({ product, points, image, createdAt, is_redemption });

  return (
    <Pressable onPress={navigateToDetails}>
      <View style={styles.container}>
        <>      
          <Image style={styles.image} source={{ uri: image }} />
          <View style={styles.textContainer}>
            <Text style={styles.product}>{product}</Text>
            <Text style={styles.date}>{dateFormated}</Text>
          </View>
        </>
        <>
          {is_redemption ? (
            <Text style={styles.minus}>-<Text style={styles.points}>{`${points}  >`}</Text></Text>
          ) : (
          <Text style={styles.plus}>+<Text style={styles.points}>{`${points}  >`}</Text></Text>
        )}
        </>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 55,
    height: 55,
    marginRight: 11,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
  },
  product: {
    fontSize: 14,
    fontWeight: '800',
    color: '#000',
    fontFamily: 'Avenir'
  },
  date: {
    fontSize: 12,
    fontWeight: '400',
    marginTop: 7,
    color: '#000',
    fontFamily: 'Avenir'
  },
  minus: {
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '800',
    color: '#FF0000'
  },
  plus: {
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '800',
    color: '#00B833'
  },
  points: {
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '800',
    color: '#000'
  },
});

export { ProductItem };
