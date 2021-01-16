import { createAppContainer } from "react-navigation";
import { createStackNavigator,  } from "react-navigation-stack";
import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import HomeScreen from "./HomeScreen";
import DocScreen from "./DocScreen";
import TutorialScreen from "./TutorialScreen";
import QuizScreen from "./QuizScreen"

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
    Documents:{
        screen: DocScreen,
        
    },
    Tutorials:{
        screen: TutorialScreen,
        
    },
    Quiz:{
        screen: QuizScreen,
        
    },
})
  
  export default createAppContainer(Navigator);