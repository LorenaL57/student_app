
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import HomeScreen from "./HomeScreen";
import { createAppContainer } from "react-navigation";

const Navigator =createStackNavigator({
    Welcome:{
        screen: WelcomeScreen
        
    },
    Login:{
        screen: LoginScreen
        
    },
    Signup:{
        screen: SignupScreen
        
    },
    Home:{
        screen: HomeScreen
        
    },
})
  
  export default createAppContainer(Navigator);