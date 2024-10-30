import React from "react";
import { StyleSheet, View, Text, Image, TextInput, Button, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Body = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <Button style={styles.btnLogin} title="Login" color={"#E53935"}></Button> */}
      <Pressable 
        onPress={()=>{
          navigation.navigate("XmEye")
        }}
      >
        <Text style={styles.btnLogin} title="Login" color={"#E53935"}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin:20,
  },
});

export default Body;
