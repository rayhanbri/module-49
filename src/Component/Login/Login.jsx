import React from 'react';

const Login = () => {

  const handleGoogleSignIN = () =>{
    console.log('clickd')
  }

  return (
    <div>
      <h1> please LongIN</h1>
      <button onClick={handleGoogleSignIN}>sign in with google</button>
    </div>
  );
};

export default Login;