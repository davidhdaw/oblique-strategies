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
    const [fieldError, setFieldError] = useState(false)

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem('userID', result.user.uid)
            setIsAuth(true)
        }).catch((err) => {
            setError(true)
        })
    }
/*
    const toggleRegister = () => {
        setRegistering(!registering)
        setEmail('')
        setPassword('')
    }

    const signUpNewUser = () => {
        const emailCheck = (email.includes('@') && email.includes('.') && !email.includes(' '))
        const passwordCheck = (!password.includes(' ') && password.length >= 8)
        if (password === '' || email === '' || !emailCheck || !passwordCheck)   {
            setFieldError(true)
        } else {
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
    }

    const signinwithEmail = () => {
        const emailCheck = (email.includes('@') && email.includes('.') && !email.includes(' '))
        const passwordCheck = (!password.includes(' ') && password.length >= 8)
        if (password === '' || email === '' || !emailCheck || !passwordCheck)   {
            setFieldError(true)
        } else {
        signInWithEmailAndPassword(auth, email, password).then((result) => {
            localStorage.setItem('userID', result.user.uid)
            setIsAuth(true)
        }).catch((err) => {
            setPassword('')
            setError(true)
        })
    }
    }1
*/
    useEffect(() => {
        if(isAuth) {history.push('/writing')}
    }, [isAuth])

    return(
        <div className='login' >
            <p className='about-text'>
            Oblique Strategies is a lightweight daily writing tool utilizing the prompts and principles of both the Oblique Strategies deck created by Brian Eno and the practice of Morning Pages from Julia Cameron's book the artists way. The goal is to create a place to focus on writing as a practice rather than a matter of output by focusing the user on daily writing goals and de-emphasizing the actual output of their writing.   
            </p>
            <div className='login-form card'>
                <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign In With Google</button>
                {registerError && <h3 className='login-swap'>Registration failed. Please try again.</h3>}
            </div>
            
            
        </div>
    )
}

export default Login;

Login.propTypes = {
    setIsAuth: PropTypes.func.isRequired,
    isAuth: PropTypes.bool
 }