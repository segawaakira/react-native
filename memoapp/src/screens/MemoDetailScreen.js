import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

const dateString = (date) => {
  const str = date.toDate().toISOString();
  return str.split('T')[0];
}

class MemoDetailScreen extends React.Component {
  state = {
    memo: {},
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    this.setState({memo: params.memo});
  }

  render () {
    const { memo } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.memoHeader}>
            <View>
              <Text style={styles.memoHeaderTitle}>{memo.body.substring(0,10)}</Text>
              <Text style={styles.memoHeaderDate}>{dateString(memo.createdOn)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text style={styles.memoBody}>{memo.body}</Text>
        </View>

        <CircleButton
          icon="pencil"
          color="white"
          style={styles.editButton}
          onPress={() => { this.props.navigation.navigate('MemoEdit',{ memo }); }}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
  },
  memoHeader: {
    backgroundColor:'#17313C',
    height:100,
    justifyContent:'center',
    padding: 10,
  },
  memoHeaderTitle: {
    fontSize:20,
    fontWeight: 'bold',
    color:'#fff',
    marginBottom:4,
  },
  memoHeaderDate: {
    fontSize:12,
    color:'#fff',
  },
  memoBody: {
    lineHeight: 22,
    fontSize: 15
  },
  memoContent: {
    backgroundColor:'#fff',
    paddingTop:30,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:20,
    flex:1,
  },
  editButton: {
    top:75,
  },
});

export default MemoDetailScreen;