import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../Firebase/firebase.init';

const Login = () => {

  const provider = new GoogleAuthProvider;

  const handleGoogleSignIN = () =>{
    console.log('clickd')


    signInWithPopup(auth, provider)
    .then(result =>{
        console.log(result)
    })

    .catch(error =>{
     console.log(error)
    })
  }

  return (
    <div>
      <h1> please LongIN</h1>
      <button onClick={handleGoogleSignIN}>sign in with google</button>
    </div>
  );
};

export default Login;