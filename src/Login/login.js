import './login.css'
import React, { useEffect, useState } from 'react'
import { auth, provider} from '../firebase-config'
import PropTypes from 'prop-types'
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import { useHistory } from 'react-router-dom'

function Login({setIsAuth, isAuth}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const history = useHistory();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem('userID', result.user.uid)
            setIsAuth(true)
        }).catch((err) => {
            setError(true)
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
                <h3>Sign In To Continue</h3>
                <input name='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value)} required />
                <input name='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} required />
                <button className="login-with-google-btn" onClick={e => signinwithEmail(email, password)}>Sign In With E-Mail</button>
                <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign In With Google</button>
                {error && <h3>Failed to Log In. Please try again.</h3>}
            </div>
            
            
        </div>
    )
}

export default Login;

Login.propTypes = {
    setIsAuth: PropTypes.func.isRequired,
    isAuth: PropTypes.bool
 }