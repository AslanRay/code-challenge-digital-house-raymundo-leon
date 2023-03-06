import React from 'react';
import { FlatList, Pressable, View, StyleSheet, Text } from 'react-native';
import { Loading } from '../loading/Loading';
import { Error } from '../error/Error';
import { ProductItem } from './ProductItem';
import { useProductsAPI } from '../../hooks/useProductsAPI';
import { useFilter } from './hooks/useFilter';
import { Transaction } from '../../types/transaction';

const ProductsList = () => {
  const { data, error, loading } = useProductsAPI();
  const { filteredData, showFiltered, toggleRedemption } = useFilter({ data });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <>
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id as string}
        renderItem={({ item }) => (
          <ProductItem
            id={item.id}
            product={item.product}
            points={item.points}
            image={item.image}
            createdAt={item.createdAt}
            is_redemption={item.is_redemption}
          />
        )}
        style={styles.flatlistContainer}
      />

      <View style={!showFiltered ? styles.buttonsContainer : styles.buttonContainer}>
        {showFiltered ? <Pressable
          onPress={() => toggleRedemption({ transaction: Transaction.All })}
          style={styles.button}
          android_ripple={{ color: 'grey' }}
        >
          <Text style={styles.buttonText}>
            Todos
          </Text>
        </Pressable>
        : <>
        <Pressable
          onPress={() => toggleRedemption({ transaction: Transaction.Earned })}
          style={styles.buttons}
          android_ripple={{ color: 'grey' }}
        >
          <Text style={styles.buttonsText}>
            Ganados
          </Text>
        </Pressable>
        <Pressable
          onPress={() => toggleRedemption({ transaction: Transaction.Redeemed })}
          style={styles.buttons}
          android_ripple={{ color: 'grey' }}
        >
          <Text style={styles.buttonsText}>
            Canjeados
          </Text>
        </Pressable>
        </>}
      </View>
  </>
  );
};

const styles = StyleSheet.create({
  flatlistContainer: {
    backgroundColor: '#FFF'
  },
  buttonContainer: {
    width: 353,
    height: 50,
    marginTop: 43,
    marginBottom: 40,
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: 353,
    height: 50,
    marginTop: 43,
    marginBottom: 40,
    justifyContent: 'space-between',
  },
  button: {
    width: 353,
    height: 50,
    backgroundColor: '#334FFA',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttons: {
    width: 170,
    height: 50,
    backgroundColor: '#334FFA',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#fff',
    fontFamily: 'Avenir'
  },
  buttonsText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#fff',
    fontFamily: 'Avenir'
  }
});

export { ProductsList };
