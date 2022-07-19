import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import style from '../CarRender/style'

const index = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.image1} source={require('../../assets/images/logo.png')} />
        <Image style={styles.image2} source={require('../../assets/images/menu.png')}/>

    </View>
  ) 
}

export default index

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:40,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    image1:{
        marginTop:10,
        width:150,
        marginLeft:20,
        height:20
    },

    image2:{
        //marginTop:10,
        width:30,
        marginLeft:20,
        height:40,
        marginRight:20
        // position:'absolute',
        // right:20
    }
})