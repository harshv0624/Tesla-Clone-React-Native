import { Dimensions, FlatList, View } from "react-native"
import React from "react"
import CarRender from "../CarRender/CarRender"
import Cars from '../carList/List'
import styleCss from './styles'
const Carlist=()=>{
    return(
        <View style={styleCss.container}>
            <FlatList
            data={Cars}
            renderItem={({item}) => <CarRender car={item} />}
            snapToAlignment={'center'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            />

        </View>

        
    )
}

export default Carlist