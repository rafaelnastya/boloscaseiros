import * as React from 'react';
import {Text, View, Flatlist, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

export default function Home(props)
{
  return(
    <View style={style.container}>
    <ScrollView>
      <Text style={style.titulo}> As melhores Receitas de Bolo. </Text>
      <Image style={style.image} source={require('../assets/boloprinc.jpg')}/>

    <TouchableOpacity style={style.color1} onPress={()=>{props.navigation.navigate('Choccake')}}>
      <Text style={style.texto}> Bolo de Chocolate </Text>
    </TouchableOpacity>

    <TouchableOpacity style={style.color2} onPress={()=>{props.navigation.navigate('Fubacake')}}>
      <Text style={style.texto}> Bolo de Fubá </Text>
    </TouchableOpacity>

    <TouchableOpacity style={style.color3} onPress={()=>{props.navigation.navigate('Corncake')}}>
      <Text style={style.texto}> Bolo de Milho </Text>
    </TouchableOpacity>
    </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
      image:{
        width: 500,
        height: 300
      },

      texto:{
        textAlign: 'center',
      },

      titulo:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25
      },
      
      container:{
        background: '#808080'
      },

      color1:{
        backgroundColor: '#964b00'
      },

      color2:{
        backgroundColor: '#ffff00'
      },

      color3:{
        backgroundColor: '#fbec5d',
      }

})