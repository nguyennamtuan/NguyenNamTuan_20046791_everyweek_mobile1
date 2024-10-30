import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Button, Pressable, } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Footer = () =>{
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Pressable style={styles.button}
                onPress={()=>{
                    navigation.navigate("Home2")
                }}
            >
                <Text>LOGIN</Text>
            </Pressable>
            {/* <button style={styles.button} >LOGIN</button> */}
            {/* <button style={styles.button}>SIGN UP</button> */}
            <Pressable style={styles.button} 
                onPress={()=>{
                    navigation.navigate("Login")
                }}
            >
                <Text>sign up</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-around',     
      },
    button:{
        width:120,
        height:40,
        backgroundColor:'#e3c000',
        marginTop:200,
        borderRadius:'10px',
        border:'none',
    }
})

export default Footer;