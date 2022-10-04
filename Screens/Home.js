import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, Image , View, TextInput, FlatList, StatusBar, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Home =({navigation})=>{





return (
    <View style={styles.container}>
    <Text style={styles.iniciarSesion}>Elegir Boton</Text>

    <Button style={styles.button}>  </Button>
    <Button style={styles.button}>  </Button>
    <Button style={styles.button}>  </Button>
    <Button style={styles.button}>  </Button>
    </View>
);}
const styles = StyleSheet.create({

    iniciarSesion:{
        fontSize: 75,
        marginTop:'30px'
        
    },
    container:{
        flex: 1,
        width: '100vw',
        height:'100vh',
        alignItems: 'center',
    
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },

});

export default Home