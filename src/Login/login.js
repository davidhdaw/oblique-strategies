import './login.css'
import React from 'react'
import { auth, provider} from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'


function login({setIsAuth, getEntries}) {

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem('userID', result.user.uid)
            setIsAuth(true)
            
        }).then(getEntries())
    }
    return(
        <div className='login'>
            <h3>Sign In To Continue</h3>
            <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign In With Google</button>
            
        </div>
    )
}

export default login;