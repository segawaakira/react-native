import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit() {
    console.log("sumited");
    // this.props.navigation.navigate('Home)

    // Login処理
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          ログイン
        </Text>
        <TextInput
          style={styles.input}
          value={ this.state.email}
          onChangeText={(text) => {this.setState({email: text});} }
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email Address"
        />
        <TextInput
          style={styles.input}
          value={ this.state.password}
          onChangeText={(text) => {this.setState({password: text});} }
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
        />
        <Button title="ログインする" onPress={this.handleSubmit.bind(this)} />
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