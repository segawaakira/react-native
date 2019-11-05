import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import BodyText from './src/elements/BodyText';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbarTitle}>MEMOT</Text>
        </View>
      </View>
      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2019/11/05</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2019/11/05</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2019/11/05</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2019/11/05</Text>
        </View>
        <View style={styles.memoAddButton}>
          <Text style={styles.memoAddButtonTitle}>+</Text>
        </View>
      </View>
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
  memoList: {
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  memoTitle: {
    fontSize:18,
    marginBottom:4,
  },
  memoDate: {
    fontSize:12,
    color: '#a2a2a2',
  },
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right:0,
    height: 78,
    paddingTop: 30,
    backgroundColor: '#265366',// #ddd
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset:{width:0,height:0},
    shadowOpacity:0.5,
    shadowRadius:3,
    zIndex:10,
    // padding: '12px',
//    boxShadow: '0 2px 2px rgba(0,0,0,0.2)',
  },
  appbarTitle: {
    color: '#fff',
    fontSize: 18,
  },
  memoAddButton: {
    position:'absolute',
    bottom:32,
    right:32,
    width:48,
    height:48,
    backgroundColor:'#e31676',
    borderRadius:24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.5,
    shadowRadius:3,
  },
  memoAddButtonTitle: {
    fontSize:24,
    lineHeight:24,
    color:'#fff',
  }
});
