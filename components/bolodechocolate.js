import * as React from 'react';
import {Text, View, Flatlist, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function Bolochocolate()
{
  return(
    <View>
      <Text style={style.titulo}> Bolo de Chocolate.{"\n\n\n"} </Text>
      <Image style={style.image} source={require('../assets/choccake.jpg')}/>
    </View>
  );
}

const style = StyleSheet.create({
      image:{
        width: 500,
        height: 300
      },

      titulo:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25
      }

})