import { View, Text,Image, SafeAreaView } from 'react-native';
import React from 'react';
import styles from './StoreCard.style';

const StoreCard = ({store}) => {
  return (   
      <View style={styles.container}>
        <Image style={styles.image} source={{uri:store.imgURL}} ></Image>
        <Text style={styles.title}>{store.title}</Text>
        <Text style={styles.price}>{store.price}</Text>
        <Text style={styles.inStock}>
          {store.inStock ===true?'':'Stokta Yok'
        }  </Text>
        </View>
      
  
  )
}

export default StoreCard;