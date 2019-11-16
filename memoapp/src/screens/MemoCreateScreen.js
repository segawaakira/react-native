import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import firebase from 'firebase';
import CircleButton from '../elements/CircleButton';

class MemoCreateScreen extends React.Component {
  state = {
    body: '',
  }
  handlePress () {
    const { params } = this.props.navigation.state;
    const db = firebase.firestore();
    db.collection(`users/${params.currentUser.user.uid}/memos`).add({
      body: this.state.body,
      createdOn: new Date(),
    })
    .then((docRef) => {
      alert('メモを登録しました');
//      console.log(docRef.id);
    })
    .catch((error) => {
//      console.log(error);
    });
  }
  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.memoEditInput}
          multiline
          value={this.state.body}
          onChangeText={(text) => {
            this.setState({body:text});
          }}
        />
        <CircleButton
          icon="check"
          style={styles.editButton}
          onPress={ this.handlePress.bind(this) }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    backgroundColor: '#ddd',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});

export default MemoCreateScreen;