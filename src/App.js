import { View,TextInput,Dimensions,Image,FlatList,
   Text,StyleSheet, SafeAreaView, StatusBar
   } from 'react-native';
import React from 'react';
import StoreCard from './components/StoreCards/StoreCard';
import store_data from './store_data.json';


const App = () => {

  const renderItem=({item}) =><StoreCard store={item}/>;

  return (
    <SafeAreaView styles={styles.container}>
      <Text style={styles.header_text}>PatikaStore</Text>
     
      <FlatList 
       numColumns={2}
      ListHeaderComponent={()=>(
      <TextInput placeholder='Ara' placeholderTextColor='black'
       style={styles.input}></TextInput>
      )}
     
      keyExtractor={item =>item.id.toString()}
      data={store_data}
      renderItem={renderItem}
      
      ></FlatList>

    </SafeAreaView>
  )
}

const styles =StyleSheet.create({
  container:{flex:1, backgroundColor:'white', },
  header_text:{
    backgroundColor:'white',   
    fontWeight:'bold',
    fontSize:50, 
    color:'purple'},

    input:{   
      color:'black',
      backgroundColor:'white',
      height:40,
      margin:12,
      borderWidth:1,
      padding:10,
    }
})

export default App;