import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

class MemoList extends React.Component {

  renderMemo (memo) {

    return (
      <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail'); }}>
      <View style={styles.memoListItem}>
        <Text style={styles.memoTitle}>{memo.body}</Text>
        <Text style={styles.memoDate}>2019/11/05</Text>
      </View>
    </TouchableHighlight>
    );
  }

  render () {
    const list = [];
    this.props.memoList.forEach((memo) => {
      list.push(this.renderMemo(memo));
    });

    return (
      <View style={styles.memoList}>
        {list}
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});

export default MemoList;