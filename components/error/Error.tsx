import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const Error = ({ message }: { message: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
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

export { Error };
