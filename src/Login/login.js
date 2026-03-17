import './login.css'
import React, { useEffect } from 'react'
import { auth, provider} from '../firebase-config'
import PropTypes from 'prop-types'
import { signInWithPopup } from 'firebase/auth'
import { useHistory } from 'react-router-dom'


function Login({setIsAuth, isAuth}) {

    const history = useHistory();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem('userID', result.user.uid)
            setIsAuth(true)
        }).catch(() => {
            // Handle error silently or add error handling if needed
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
    }, [isAuth, history])

    return(
        <div className='login' >
            <p className='about-text'>
            Oblique Strategies is a lightweight daily writing tool utilizing the prompts and principles of both the Oblique Strategies deck created by Brian Eno and the practice of Morning Pages from Julia Cameron's book the artists way. The goal is to create a place to focus on writing as a practice rather than a matter of output by focusing the user on daily writing goals and de-emphasizing the actual output of their writing.   
            </p>
            <div className='login-form card'>
                <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign In With Google</button>
            </div>
            
            
        </div>
    )
}

export default Login;

Login.propTypes = {
    setIsAuth: PropTypes.func.isRequired,
    isAuth: PropTypes.bool
 }