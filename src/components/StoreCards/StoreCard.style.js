import {StyleSheet,Dimensions} from 'react-native';

export default StyleSheet.create({
  container:{flex:1,backgroundColor:'white'
  , margin:10,
  padding:10,},
 
    image:{
    
      
        height:Dimensions.get('window').height/3,
        width:Dimensions.get('window').width/2.5,
        backgroundColor:'white',
        resizeMode:'contain',
      },

    title:{fontWeight:'bold',color:'black', 
    marginRight:10,marginLeft:10,},
    
    price:{margin:10,color:'grey'}, 

    inStock:{fontSize:20,
      textAlign:'center', 
      fontWeight:'bold',
      color:'red',},

})