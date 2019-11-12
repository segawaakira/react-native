import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

class LoginScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          ログイン
        </Text>
        <TextInput style={styles.input} value="Email Address" />
        <TextInput style={styles.input} value="password" />
        <Button title="送信" onPress={() => {}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    marginBottom: 24,
    alignSelf:"center",
  },
  input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom:16,
    borderWidth:1,
    borderColor:'#ddd',
    padding:8,
  },
});

export default LoginScreen;