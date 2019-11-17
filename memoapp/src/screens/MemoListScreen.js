import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemoList from '../components/MemoList';
import firebase from 'firebase';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {

  state = {
    memoList: [],
  }

  componentWillMount() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/memos`)
      .get()
      .then((snapshot) => {
        const memoList = [];
        snapshot.forEach((doc) => {
          memoList.push(doc.data());
        });
        this.setState({memoList: memoList});
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handlePress () {
    this.props.navigation.navigate('MemoCreate');
  }

  render () {
    return (
      <View style={styles.container}>
        <MemoList memoList={this.state.memoList}  navigation={this.props.navigation} />
        <CircleButton icon="plus" onPress={ this.handlePress.bind(this) } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fffdf6'
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
  },
});

export default MemoListScreen;