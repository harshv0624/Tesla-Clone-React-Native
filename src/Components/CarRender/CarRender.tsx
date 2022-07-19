import React from 'react';
import styles from './style';
import {View, Text, ImageBackground} from 'react-native';
import CustButton from '../CustomButton/Index';
import Header from '../Header/index'
const CarRender = (props: any) => {
  const {name,tagline,taglineCTA,image}=props.car
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />
      
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>{tagline}{' '}
        <Text style={styles.subTitleCta}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <CustButton type="primary" text="Custom Order" />
        <CustButton type="secondary" text="Existing Inventory" />
      </View>
    </View>
  );
};

export default CarRender;
