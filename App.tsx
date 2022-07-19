import React, {useState} from 'react';
import CarRender from './src/Components/CarRender/CarRender'
import Custom from './src/Components/CustomButton/Index'
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  RefreshControl,
  FlatList,
  ImageBackground,
} from 'react-native';
import Carlist from './src/Components/carList';

const App = () => {
  return (
    <View style={styles.Container}>
      <Carlist />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
export default App;
