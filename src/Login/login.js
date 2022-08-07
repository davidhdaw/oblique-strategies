import './login.css'
import React, { useState } from 'react'
import { auth, provider} from '../firebase-config'
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'


function Login({setIsAuth}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem('userID', result.user.uid)
            setIsAuth(true)
        })
    }

    const signinwithEmail = () => {
        signInWithEmailAndPassword(auth, email, password).then((result) => {
            localStorage.setItem('userID', result.user.uid)
            setIsAuth(true)
        })
        
    }

    return(
        <div className='login'>
            <h3>Sign In To Continue</h3>
  
                <input name='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value)} required />
                <input name='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} required />
                <button className="login-with-google-btn" onClick={e => signinwithEmail(email, password)}>Sign In With E-Mail</button>
 
            

            <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign In With Google</button>
            
        </div>
    )
}


export default Login;