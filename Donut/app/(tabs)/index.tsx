import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Navigation from '../navigation/navigation';

const Home = () => {
  return (
    <View style={styles.container}>
      <Navigation/>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  hello: {
    fontSize: 20,
    margin: 10,
  },
  viewPre:{
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-around',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginTop: 20,
    borderRadius: 5,
    marginLeft: 10,
  },
  btnChoice: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight:'bold',
    borderWidth: 1,
    borderColor: '#0a7ea4',
    borderRadius: 5,
    backgroundColor: '#ecf1f3',
    color: '#000000',
    padding: 10,
    marginTop: 10,
    width: 100,
    alignSelf: 'center',
  }
});

export default Home;
