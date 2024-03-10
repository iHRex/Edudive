import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function login() {
  return (
    <View>
      <Text>login with sign import 'first'</Text>
      <Image source={require('./../assets/Login/Login-top.png')} />
    <View style={styles.frameBox}>
        <Text style={styles.loginText}>Welcome to Edudive</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    frameBox : {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

    loginText : {
        fontSize:32 , 
        textAlign:'center' , 
        fontWeight:'bold',
        paddingTop:20
    }
    
})