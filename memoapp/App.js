import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Appbar from './src/components/Appbar';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';

export default function App() {
  return (
    <View style={styles.container}>
    <Appbar />
      <MemoDetailScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: '100%',
    backgroundColor: '#fffdf6',
    paddingTop:78,
  },
});
