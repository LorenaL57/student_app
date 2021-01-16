import React from 'react';
import { useState } from 'react';
import { StyleSheet, Alert, View, ImageBackground, Image, TouchableOpacity,Text, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import firebase from "../database/firebase";
const SignUpScreen=(props)=>{
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const[hidePassword, setPasswordVisibility]=useState(true);
    const passwordHandler=()=>{
        setPasswordVisibility(!hidePassword)
    }

 userRegister=()=>
    {
        if(email!="" && password!= "" && fullName!=""){
            firebase
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .then((res) => {
            res.user.updateProfile({
                displayName: fullName,
              });
              Alert.alert(
                "Welcome!",
                "Take a look around to find what you need!",
                [
                  
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
              );
            setFullName("");
            setEmail("");
            setPassword("");
            props.navigation.navigate({routeName: "Home"})
          });
        }
        else alert("Error!");
    }

    return(
        <ImageBackground
        style={styles.background}
        resizeMode="stretch"
        source={{uri: ("https://i.pinimg.com/736x/65/9a/2b/659a2bc335f31700cacba5e1f2556b1f.jpg")}}>
        <Image source={require("../assets/customLogo.gif")} style={styles.logo}/>

       <KeyboardAvoidingView behavior="position">
           <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
        <View style={styles.textBoxContainer}>

             <TextInput
              style={styles.inputText}
              placeholder="Name"
              value={fullName}
              onChangeText={(val) =>setFullName(val)}
              keyboardType= "default"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.inputText}
              placeholder="example@email.com"
              value={email}
              onChangeText={(val) => setEmail(val)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.inputText}
              placeholder="Password"
              value={password}
              onChangeText={(val) => setPassword(val)}
              maxLength={15}
              secureTextEntry={hidePassword}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.eye}
              onPress={passwordHandler}
            >
              <Image
                source={
                  hidePassword
                    ? require("../assets/hide.png")
                    : require("../assets/show.png")
                }
                style={styles.buttonImage}
              />
            </TouchableOpacity>
          </View>
          </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
          <TouchableOpacity style={styles.signup} onPress={()=>userRegister()}>
            <Text style={styles.signupText} >
              Sign Up
            </Text>
          </TouchableOpacity>
         
         
        </ImageBackground>
    )
}
export default SignUpScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent:"flex-start",
       
        
      },
      buttonText:{
        fontSize:20,
      },
      buttonImage: {
        resizeMode: "contain",
        height: "100%",
        width: "100%",
      },
      eye: {
        position: "absolute",
        right: 5,
        bottom: 54,
        height: 40,
        width: 35,
        padding: 2,
        flexDirection: "row",
      },
      forgot:{
        color: "black",
        fontSize: 12,
        paddingTop: 17,
        paddingBottom: 20,
        left: 63,
        textDecorationLine: "underline",
      },
      inputText: {
        height: 50,
        width: 330,
        color: "#2f2f2f",
        marginTop: 35,
        backgroundColor: "#fff",
        paddingLeft: 25,
        borderWidth: 1,
        borderColor: "#000",
      },
      logo:{
        top: 70,
        position:"absolute",
        marginLeft:30,
        marginBottom:20,
        alignItems:"center",
        alignContent:"center",
        alignSelf:"center"
      },
      signup:{
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
      signupText: {
        fontWeight: "bold",
        fontSize: 20,
        textTransform: "uppercase",
        color: "black",
      },

      textBoxContainer: {
        marginTop:250,
        alignItems:"center",
        alignSelf:"center",
        justifyContent:"center",
        paddingBottom: 50,
      },
      welcome:{
        textTransform:"uppercase",
        fontSize: 30,
      },
})