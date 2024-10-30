import { Pressable, StyleSheet, Text, View ,Image, TextInput} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from 'expo-router'

const bai1 = () => {
    const navigation = useNavigation();
    const [name,setName] = useState("");
  return (
  <View style={styles.view1}>
      <View style={styles.view2}>
          <Image style={styles.img} source={(require('.././assets/images/book.png'))}>

          </Image>
          
      </View>
      <Text style={styles.text}>
        MANAGE YOUR 
        TASK
      </Text>
      <View style={styles.view3}>
          <TextInput placeholder='Enter your name' style={styles.ip} 
            value={name}
            onChangeText={setName}
          >
            
          </TextInput>
          <Image style={styles.img1} source={require('.././assets/images/mail.png')}></Image>
      </View>
      <View style={styles.view4}>
            <Pressable style={styles.pre} onPress={()=>{
              navigation.navigate('bai2',{name})
            }}>
                  <Text style={styles.text1}>GET STARTED</Text>
                  <Image style={styles.img2} source={require('.././assets/images/back.png')}></Image>
            </Pressable>
      </View>
  </View>
  )
}

export default bai1

const styles = StyleSheet.create({
  view1:{
    flex:1,
   alignContent:'center',
   alignItems:'center'
  },
  view2:{
    justifyContent:"center",
    alignItems:'center',
   margin:20
  },
  img:{
    width:271,
    height:271,
    resizeMode:'contain'
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    color:'purple',
    width:150,
    textAlign:'center',
   
  },
  view3:{
   textAlign:'center',
   top:20
  },
  img1:{
    width:25,
    height:25,
    bottom:35,
    margin:5

  },
  ip:{
    width: 250,
        height: 30,
        borderWidth: 1,
        padding: 20,
        paddingLeft: 50,
        textAlign:'center'
  },
  view4:{
    backgroundColor:'#00BDD6',
    borderRadius:10,
    width:130,
    alignItems:'center',
    top:20,
    
    
  },
  text1:{
   fontSize:15,
   fontWeight:'400',
   top:12,
   color:'white'
  },
  img2:{
    width:25,
    height:25,
    left:90,
    bottom:10,
  
  }


})