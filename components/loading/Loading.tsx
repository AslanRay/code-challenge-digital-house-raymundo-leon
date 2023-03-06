import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#334FFA" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginTop: 10,
  },
});

export { Loading };
