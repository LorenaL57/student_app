import React from 'react';
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity,Text } from 'react-native';
import firebase from "../database/firebase";
const HomeScreen=(props)=>{

    usersignOut = () => {
        firebase
          .auth()
          .signOut()
          .then(() => {
            props.navigation.navigate("Welcome");
          })
          .catch((error) => this.setState({ errorMessage: error.message }));
      };
const name = firebase.auth().currentUser.displayName;

    return(
        <ImageBackground
        style={styles.background}
        resizeMode="stretch"
        source={{uri: ("https://i.pinimg.com/736x/65/9a/2b/659a2bc335f31700cacba5e1f2556b1f.jpg")}}>
    
          <View style={styles.logoview}>
          <Image style={styles.logo} source={require("../assets/customLogo.gif")} />
          <Text style={styles.welcome}>Welcome {name}!</Text>
          </View>
          <View style={styles.buttons}>
          <View style={styles.first}>
          <TouchableOpacity style={styles.btnNota} onPress={() => {}}>
            <Text style={styles.txtbtn}>
              Grades
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnDocs} onPress={() => {}}>
            <Text style={styles.txtbtn} >
              Documents
            </Text>
          </TouchableOpacity>
          </View>
          <View style={styles.second}>
          <TouchableOpacity
          style={styles.btnTutoriale}
          onPress={() => {}}>
            <Text style={styles.txtbtn}>
              Tutorials
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnQuize} onPress={() => {}}>
            <Text style={styles.txtbtn} >
              Quiz
            </Text>
          </TouchableOpacity>
          </View>
          </View>
          <View style={styles.logout}>
          <TouchableOpacity onPress={()=>usersignOut()}>
            <Text style={styles.logouttxt} >
              Log out
            </Text>
          </TouchableOpacity>
          </View>
         
        </ImageBackground>
    )
}
export default HomeScreen;
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent:"center",
      },
      buttons:{
        flexDirection: "column",
        justifyContent:"space-evenly",
        alignContent:"center",
        flex:1,
        padding:30,
      },
      btnNota: {
        shadowOffset: { width: 10, height: 10 },
        shadowColor: "black",
        shadowOpacity: 17,
        elevation: 17,
        backgroundColor: "#000",
        height: 125,
        width: 125, 
        borderRadius: 400,
        backgroundColor: "#ACDFFE",
        borderWidth: 1,
        borderColor: "#000",
      },
      btnDocs: {
        shadowOffset: { width: 10, height: 10 },
        shadowColor: "black",
        shadowOpacity: 17,
        elevation: 17,
        backgroundColor: "#000", 
        height: 125,
        width: 125,
        borderRadius: 400, 
        backgroundColor: "#C4CDD6",
        borderWidth: 1,
        borderColor: "#000",
      },
      btnTutoriale: {
        shadowOffset: { width: 10, height: 10 },
        shadowColor: "black",
        shadowOpacity: 17,
        elevation: 17,
        backgroundColor: "#000", 
        height: 125,
        width: 125, 
        borderRadius: 400, 
        backgroundColor: "#91B5CF",
        borderWidth: 1,
        borderColor: "#000",
      },
      btnQuize: {
        shadowOffset: { width: 10, height: 10 },
        shadowColor: "black",
        shadowOpacity: 17,
        elevation: 17,
        backgroundColor: "#000",
        height: 125,
        width: 125,
        borderRadius: 400, 
        backgroundColor: "#FAD6E2",
        borderWidth: 1,
        borderColor: "#000",
      },
      container: {
        flexDirection: "column",
        flex:1,
      },
      first:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        
      },
      image: {
        flex: 1,
        width: "100%",
      },
      logoview:{
        justifyContent:"center",
        flexDirection: "row",
        alignContent: "center",
        marginVertical:20,
        alignItems:"center",
      
      },
      logo: {
        width: 55,
        height: 55,
      },
      logouttxt: {
        fontWeight: "bold",
        fontSize: 16,
        color: "white",
      },
      logout:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "center",
        alignSelf:"center",
        backgroundColor: "#000",
        borderRadius: 25,
        width:"35%",
        height:50,
        marginBottom:20,
      },
      second:{   
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
      },
      statusbar:{
        backgroundColor: "#313131",
        height: 30,
      },
      txtbtn: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#000",
        alignSelf:"center",
        marginVertical:45,
      },
    
      welcome: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 23,
        color: "white",
      },
})