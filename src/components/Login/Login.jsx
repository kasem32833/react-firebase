
import { useState } from 'react';
import app from '../firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";



const provider = new GoogleAuthProvider();
const auth = getAuth(app);




const Login = () => {

    const [user, setUser] = useState(null)

    const googleLoginButton = () => {
        signInWithPopup(auth, provider)
        .then(result => {
           const user = result.user
           console.log(user)
           setUser(user)
        }).catch(error => {
            console.log(error.message)
        })


    }

    const handleSignout =()=>{
        signOut(auth)
        .then(result =>{
            console.log(result)
            setUser(null)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
            <div>
                   
                
                <div className='flex justify-center items-center h-[500px]'>
                    {
                        user && <div>
                            <h3>User:{user.displayName}</h3>
                            <p>Email: {user.email}</p>
                            <img src={user.photoURL} alt="" />
                        
                        </div>
                    }
                </div>
                <div className='flex justify-center items-center gap-8'>
                    <button className='btn-primary px-4 py-2 rounded-lg font-bold text-xl' onClick={googleLoginButton}>Login with google</button>
                    <button className='btn-primary px-4 py-2 rounded-lg font-bold text-xl' onClick={handleSignout}>signout </button>
                </div>
                
                    
            </div>
       
    );
};

export default Login;