import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Appbar extends React.Component {
  render () {
    return (
      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbarTitle}>MEMOT</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});

export default Appbar;