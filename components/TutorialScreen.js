import React from 'react';
import { StyleSheet, View, ImageBackground, FlatList, TouchableOpacity,Text, Linking, Image  } from 'react-native';
import {TUTORIALS} from "../data/dummyData"

const TutorialScreen=(props)=>{

const renderTutorials = (itemData)=>{

    const buttonClick = () => {
        Linking.canOpenURL(itemData.item.link).then(supported => {
          if (supported) {
            Linking.openURL(itemData.item.link);
          } else {
            console.log("Don't know how to open URI");
          }
        });
      };

      
    return <TouchableOpacity onPress={() =>buttonClick()}><View style={styles.buttonsGrid}><Text style={styles.buttonText}>{itemData.item.title}</Text></View></TouchableOpacity>
} 
    return(
        <ImageBackground
        style={styles.background}
        resizeMode="stretch"
        source={{uri: ("https://i.pinimg.com/736x/65/9a/2b/659a2bc335f31700cacba5e1f2556b1f.jpg")}}>
         <View style={styles.logoview}>
          <Image style={styles.logo} source={require("../assets/customLogo.gif")} />
          <Text style={styles.welcome}>Your Tutorials</Text>
          </View>
        <FlatList  keyExtractor={(item,index)=> item.id} numColumns={1} data={TUTORIALS} renderItem={renderTutorials}/>
         
        </ImageBackground>
        
    )
}
export default TutorialScreen;


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent:"center",
      },
      buttonText:{
        fontSize: 18,
      },
      buttonsGrid:{
        flex: 1,
        margin: 15,
        height: 150,
        justifyContent:"center",
        alignItems:"center",
        borderColor: "#000",
        borderWidth: 2,
        backgroundColor: "#ddfdff",
        opacity: 0.8
        
      },
      logo: {
        width: 55,
        height: 55,
        marginBottom: 5
      },
      logoview:{
        justifyContent:"center",
        flexDirection: "row",
        alignContent: "center",
        marginVertical:15,
        alignItems:"center",
        borderBottomColor: "#000",
        borderBottomWidth: 1,
      },
      welcome: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 23,
        color: "white",

      },
})