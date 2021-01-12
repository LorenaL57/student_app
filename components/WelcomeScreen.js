import React from 'react';
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity,Text } from 'react-native';

const Welcome=(props)=>{
    return(
        <ImageBackground
        style={styles.background}
        resizeMode="stretch"
        source={{uri: ("https://i.pinimg.com/736x/65/9a/2b/659a2bc335f31700cacba5e1f2556b1f.jpg")}}>
          <View style={styles.logo}>
          <Image
          source={require("../assets/customLogo.gif")}
          />
          <Text style={styles.welcome}>
            University of tirana
          </Text>
          </View>
          <TouchableOpacity  style={styles.signup} onPress={() =>  props.navigation.navigate({routeName: "Signup"})}>
          
              <Text style={styles.buttonText}>
                Sign Up
              </Text>
          
          </TouchableOpacity>
          <TouchableOpacity style={styles.login} onPress={() =>  props.navigation.navigate({routeName: "Login"})}>
          
              <Text style={styles.buttonText}>
                Login
              </Text>
          
          </TouchableOpacity>
         
        </ImageBackground>
    )
}
export default Welcome;
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent:"center",
      },
      buttonText:{
        fontSize:20,
      },
      logo:{
        top: 70,
        position:"absolute",
        marginLeft:30,
        marginBottom:20,
        alignItems:"center",
        alignContent:"center",
        alignSelf:"center"
        // width:120,
        // height:120,
      },
      login:{
        height: 50,
        width: "85%",
        backgroundColor:"#DA251C",
        alignItems:"center",
        alignSelf:"center",
        justifyContent:"center",
        borderWidth:1,
        borderColor:"#000",
        shadowOffset: { width: 10, height: 10 },
        shadowColor: "black",
        shadowOpacity: 17,
        elevation: 10,
      },
      signup:{
        marginBottom: 20,
        marginVertical: 150,
        height: 50,
        width: "85%",
        backgroundColor:"#9dd9f3",
        alignItems:"center",
        alignSelf:"center",
        justifyContent:"center",
        borderWidth:1,
        borderColor:"#000",
        shadowOffset: { width: 10, height: 10 },
        shadowColor: "black",
        shadowOpacity: 17,
        elevation: 10,
        
      },
      welcome:{
        textTransform:"uppercase",
        fontSize: 30,
      },
})