
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../Firebase/firebase.init';
import { useState } from "react";

const Login = () => {

 const [user,setUser] = useState(null);

  const provider = new GoogleAuthProvider;
  const gitHubProvider = new GithubAuthProvider();

  const handleGoogleSignIN = () =>{
    console.log('clickd')


    signInWithPopup(auth, provider)
    .then(result =>{
        console.log(result.user)
        setUser(result.user);
    })

    .catch(error =>{
     console.log(error)
    })
  }


  const handleSingOut = () =>{
    signOut(auth)
    .then(()=>{
      console.log('sign in out')
      setUser(null);
    })
    .catch((error) =>{
      console.log(error)
    })

  }

  const handleGitHubSignIn = () =>{
    signInWithPopup(auth,gitHubProvider)
    .then(result => {
     const loggedInUser = result.user;
     console.log(loggedInUser)

     if(!loggedInUser.email && loggedInUser?.providerData.length){
      console.log('email is not directly provided',loggedInUser.providerData)
     }
    })
    .catch(error =>{
      console.log(error)
    })

  }


  return (
    <div>
      <h1> please LongIN</h1>
      {/* <button onClick={handleGoogleSignIN}>sign in with google</button>
      <button onClick={handleSingOut}>Sign Out</button> */}

      {
        user?
        <button onClick={handleSingOut}>Sign Out</button>:
       <>
        <button onClick={handleGoogleSignIN}>sign in with google</button>
        <button onClick={handleGitHubSignIn}>Sign In with  Git Hub</button>
       </>
      }
      {/* <div>
        <h3>{user?.displayName}</h3>
        <p>{user?.email}</p>
      </div> */}

      {
        user &&   <div>
        <h3>User Name:{user.displayName}</h3>
        <p> User Email:{user.email}</p>
        <img src={user.photoURL} alt="" />
      </div>
      }
    </div>
  );
};

export default Login;