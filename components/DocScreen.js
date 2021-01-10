import React from 'react';
import { StyleSheet, View, ImageBackground, FlatList, TouchableOpacity,Text, Linking  } from 'react-native';
import {BUTTON} from "../data/dummyData"

const DocScreen=(props)=>{

const renderButtons = (itemData)=>{

    const buttonClick = () => {
        Linking.canOpenURL(itemData.item.link).then(supported => {
          if (supported) {
            Linking.openURL(itemData.item.link);
          } else {
            console.log("Don't know how to open URI");
          }
        });
      };

      
    return <TouchableOpacity onPress={() =>buttonClick()}><View style={styles.buttonsGrid}><Text>{itemData.item.title}</Text></View></TouchableOpacity>
}
    

    return(
        <ImageBackground
        style={styles.background}
        resizeMode="stretch"
        source={{uri: ("https://i.pinimg.com/736x/65/9a/2b/659a2bc335f31700cacba5e1f2556b1f.jpg")}}>
        
        <FlatList  keyExtractor={(item,index)=> item.id} numColumns={1} data={BUTTON} renderItem={renderButtons}/>
         
        </ImageBackground>
    )
}
export default DocScreen;
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent:"center",
      },
      buttonsGrid:{
        flex: 1,
        margin: 15,
        height: 150,
        justifyContent:"center",
        alignItems:"center",
        borderColor: "#000",
        borderWidth: 1,
      }
})