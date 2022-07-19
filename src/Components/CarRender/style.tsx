import { StyleSheet ,Dimensions} from "react-native";

const style=StyleSheet.create({
    carContainer: {
        width:'100%',
        height:Dimensions.get('window').height
      },

      buttonContainer:{
        position:'absolute',
        bottom:50,
        width:'100%'
      },
    
      titles: {
        marginTop:'30%',
        width:'100%',
        alignItems:'center'
      },
    
      title:{
        color:'black',
        fontSize:40,
        fontWeight:'600'
      },

      subTitleCta:{
        textDecorationLine:'underline'
      },
    
      subTitle:{
        color:'#5c5e62',
        fontSize:16
      },
    
      image: {
        width:'100%',
        height:'100%',
        position:'absolute',
        resizeMode:'cover'
      }
})

export default style;