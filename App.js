import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native'
import DeckList from './Components/DeckList'

class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <DeckList />
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});

export default App;
