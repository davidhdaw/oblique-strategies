import './login.css'
import React, { useEffect, useState } from 'react'
import { auth, provider} from '../firebase-config'
import PropTypes from 'prop-types'
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, FirebaseUser } from 'firebase/auth'
import { useHistory } from 'react-router-dom'


function Login({setIsAuth, isAuth}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [registering, setRegistering] = useState(false)
    const history = useHistory();
    const [registerError, setRegisterError] = useState(false)

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem('userID', result.user.uid)
            setIsAuth(true)
        }).catch((err) => {
            setError(true)
        })
    }

    const toggleRegister = () => {
        setRegistering(!registering)
        setEmail('')
        setPassword('')
    }

    const signUpNewUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then((userInfo) => {
          if (userInfo != null){
            localStorage.setItem('userID', userInfo.user.uid)
            setIsAuth(true)
            setRegisterError(false)
          }
          }).catch((err) => {
            console.log(err)
            setRegisterError(true)
          })
    }

    const signinwithEmail = () => {
        signInWithEmailAndPassword(auth, email, password).then((result) => {
            localStorage.setItem('userID', result.user.uid)
            setIsAuth(true)
        }).catch((err) => {
            setPassword('')
            setError(true)
        })
        
    }

    useEffect(() => {
        if(isAuth) {history.push('/writing')}
    }, [isAuth])

    return(
        <div className='login' >
            <div className='login-form card'>
                {registering ? <h3>Register A New User</h3> : <h3>Sign In To Continue</h3>}
                <input name='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value)} required />
                <input name='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} required />
                {registering ?
                    <button className="register-btn" onClick={e => signUpNewUser()}>Register New User</button> :
                    <button className="login-btn" onClick={e => signinwithEmail()}>Sign In With E-Mail</button>
                }
                <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign In With Google</button>
                {registerError && <h3 className='login-swap'>Registration failed. Please try again.</h3>}
                {error ? (<h3>Failed to Log In. Please try again or <span className='login-swap'>register</span>.</h3>): registering ? <h3 className='login-swap' onClick={() => toggleRegister()}>Already Registered?</h3> : <h3 className='login-swap' onClick={() => toggleRegister()}>Register new user?</h3>}
            </div>
            
            
        </div>
    )
}

export default Login;

Login.propTypes = {
    setIsAuth: PropTypes.func.isRequired,
    isAuth: PropTypes.bool
 }