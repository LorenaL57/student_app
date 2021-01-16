import React from 'react';
import Navigator from "./components/Navigator";
import firebase from "./database/firebase";
import {useEffect, useState} from "react";

function onAuthStateChange(callback) {
  return firebase.auth().onAuthStateChanged(user => {
    if (user) {
      callback({loggedIn: true});
    } else {
      callback({loggedIn: false});
    }
  });
}

export default function App() {
  const [user, setUser] = useState({ loggedIn: false });
  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);
  
  if (!user.loggedIn) {
    console.log("User is logged out");
   
  }
  return (
    
   <Navigator/>
   
  );
}

