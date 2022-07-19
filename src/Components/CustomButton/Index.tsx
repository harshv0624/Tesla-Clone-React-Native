import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './style';
const Buttons = (props: any) => {

  const {type,text}=props
  const backgroundColor=type==='primary'?'#171A20CC':'#FFFFFFA6';
  const textcolor=type==='primary'?'#FFFFFF':'#171A20';

  return (
    <View style={styles.container}>
      <Pressable style={[styles.button,{backgroundColor:backgroundColor}]}>
        <Text style={[styles.text,{color:textcolor}]}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default Buttons;
