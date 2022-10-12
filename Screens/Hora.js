import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, Image , View, TextInput, FlatList, StatusBar, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Hora =({navigation})=>{
    const [fechaHora,setFechaHora]=useState("");
    const [latitud,setLatitud]=useState("");
    const [longitud,setLongitud]=useState("");
    useEffect (async () => {

        var today = new Date();
        var now = today.toLocaleString();
        setFechaHora(now)


        
    },[]);
    const onChange = () => {
        
        $(document).ready(function () {
            //Click al boton para pedir permisos
            $("#pedirvan").click(function () {
                //Si el navegador soporta geolocalizacion
                if (!!navigator.geolocation) {
                    //Pedimos los datos de geolocalizacion al navegador
                    navigator.geolocation.getCurrentPosition(
                            //Si el navegador entrega los datos de geolocalizacion los imprimimos
                            function (position) {
                                window.alert("nav permitido");
                                setLongitud($("#nlat").text(position.coords.latitude)) 
                                setLatitud($("#nlon").text(position.coords.longitude))
                            },
                            //Si no los entrega manda un alerta de error
                            function () {
                                window.alert("nav no permitido");
                            }
                    );
                }
            });

        });
       
      };



    return (
        <View >
        <Text>El dia y la hora son: {fechaHora}</Text>
        <Text>Elegir Boton</Text>
        <View id="area-nav">
            <View><h2>Pide permisos de hubicacion al navegador</h2></View>
            <Button onChangeText={onChange} id="pedirvan">Pedir permisos geolocalizacion navegador</Button>
            <View id="nlat">{longitud}</View>
            <View id="nlon">{latitud}</View>
        </View>
        </View>
        
    );}
   
    
    
    
    export default Hora