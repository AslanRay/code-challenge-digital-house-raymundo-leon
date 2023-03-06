import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useProductsAPI } from '../../hooks/useProductsAPI';
import { Loading } from '../loading/Loading';
import { Error } from '../error/Error';
import { sumPoints } from './utils/sumPoints';
import { formatPoints } from './utils/formatPoints';

const ScoreCard = () => {
  const { data, error, loading } = useProductsAPI();
  const totalPoints = sumPoints({ products: data });
  const formatedPoints = formatPoints({ points: totalPoints });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTopLeft}>Diciembre</Text>
      <Text style={styles.textCenter}>{`${formatedPoints} pts`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 286,
    height: 143,
    backgroundColor: '#334FFA',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
  },
  textTopLeft: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '800',
    fontFamily: 'Avenir',
    marginTop: 21,
    marginLeft: 18,
    marginBottom: 7
  },
  textCenter: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: '800',
    fontFamily: 'Avenir',
    textAlign: 'center'
  },
});

export { ScoreCard };
