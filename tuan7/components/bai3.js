import { useRoute } from '@react-navigation/native'
import { useNavigation } from 'expo-router';
import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View, Image, TextInput } from 'react-native'

const bai3 = () => {
    const route = useRoute();
    const { name } = route.params;
    const [job,setJob] = useState(''); 
    const navigation = useNavigation('');
    const handleFinish = () => {
        // Post job to Mock API
        fetch('https://6556cd42bd4bcef8b611a10d.mockapi.io/bai1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: job, // assuming the job has a 'name' field
            }),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .then(data => {
            console.log('Success:', data);
            // Navigate to bai2 with the job and name
            navigation.navigate('bai2', { name, job });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };
    return (
        <View style={styles.view}>
            <View style={styles.view1}>
                <Image source={require('../assets/images/user.png')} style={styles.img}></Image>
                <View>
                    <Text style={styles.text}>Hi{name}</Text>
                    <Text style={styles.text1}>Have agrate day a head</Text>
                </View>
                <Image source={require('../assets/images/back.png')} style={styles.img1}></Image>
            </View>
            <Text style={styles.text2}>ADD YOUR JOB </Text>
            <View style={styles.view2}>
                <Pressable style={styles.pre}>
                    <TextInput style={styles.ip} placeholder='nhap job vao day'
                        value={job}
                        onChangeText={setJob}
                    ></TextInput>
                </Pressable>
            </View>
            <Pressable style={styles.pre1} onPress={handleFinish}>
                <Text style={styles.text3}>Finish</Text>
            </Pressable>
        </View>
    )
}
export default bai3

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    view1: {
        flexDirection: 'row',
        margin: 20
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 20
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    text1: {
        fontSize: 15,
        top: 5
    },
    img1: {
        width: 35,
        height: 35,
        left: 50
    },
    text2: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: '500',
        top: 50
    },
    pre: {
        flex: 0,
        top: 100,
        justifyContent: 'center'
    },
    ip: {
        width: 200,
        height: 40,
        textAlign:'center',
        backgroundColor:'white',
        borderWidth:2,
        borderRadius:10
    },
    view2:{
        alignItems:'center'
    },
    pre1:{
        top:200,
        alignItems:'center'
    },
    text3:{
        fontSize:30,
        fontWeight:'bold',
        backgroundColor:'red',
        width:90,
        height:50,
        borderRadius:10

    }

})