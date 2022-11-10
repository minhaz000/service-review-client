import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  updateProfile} from 'firebase/auth'
import {app} from '../firebase/firebase.config'
const RootContext = createContext()
function Context(props) {
 const [user,setUser]= useState() 
 const [loading,setLoading]= useState(true) 
 const auth = getAuth(app) 
 const provider = new GoogleAuthProvider()
  const googleLogIn = ()=>{ 
    setLoading(true)
    return  signInWithPopup(auth,provider)
  }
  const EmailLogIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
    
  }
  const EmailSingnUp = (userInfo)=>{
    setLoading(true) 
    return createUserWithEmailAndPassword(auth,userInfo.email,userInfo.password).then(()=>{
        updateProfile(auth.currentUser, {
          displayName : userInfo.name,
          photoURL: userInfo.photo

        })
    })
  }
  const LogOut = ()=>{ 
       return signOut(auth)
  }
useEffect(()=>{
  const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser); setLoading(false)   
  })
  return ()=>  unSubscribe()
},[])

  const  RootContextValue = { googleLogIn,LogOut,EmailLogIn,EmailSingnUp, user ,loading}
  return (
  <RootContext.Provider value={RootContextValue}> 
    {props.children}
  </RootContext.Provider>
  );
}
export {RootContext} 
export default Context;