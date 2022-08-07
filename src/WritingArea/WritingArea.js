import './WritingArea.css'
import React, { useState, useEffect } from 'react'
import { returnStrategy } from '../apiCalls'
import StrategyCard from '../StrategyCard/StrategyCard'
import { useHistory } from 'react-router-dom'
import { auth } from '../firebase-config'
import PropTypes from 'prop-types'
const dayjs = require ('dayjs')

function WritingArea({addLog, isAuth}) {
    const [currentStrat, setCurrentStrat] = useState({strategy: ''})
    const [usedStrats, setUsedStrats] = useState([])
    const [writing, setWriting] = useState('')
    const [timer, setTimer] = useState(90)
    const [timeoutID, setTimeoutID] = useState(0)
    const [buttonTried, setButtonTried] = useState(false)
    const [mostWords, setmostWords] = useState(0)
    const [error, setError] = useState(false)
    
    const history = useHistory();

    useEffect(() => {
        if (!isAuth) {history.push('/')}
      }, [isAuth])
    
    useEffect(() => {
        pullCard()
      }, [])


    const pullCard = () => {
        returnStrategy()
        .then((data) => {
            console.log(data)
            setError(false)
            setCurrentStrat(data)
            setUsedStrats([...usedStrats, data])
            setTimer(90)
        }).catch((err) => {
            setError(true)
        })
    }

      useEffect(() => {
        clock()
      }, [timer])

      useEffect(() => {
        setButtonTried(false)
        if ((writing.split(' ').length - 1) > mostWords) {
            setmostWords(writing.split(' ').length - 1)
            setTimer(90)
        }
      }, [writing])
    
    const clock = () =>{
        clearTimeout(timeoutID)
        if (timer > 0) {
            setTimeoutID(setTimeout(() => {
                setTimer(timer-1)
            }, 1000))
        }
        if (timer === 0) {
            pullCard()
        }
    }

    const submitWriting = () => {
        console.log(auth.currentUser.uid)
       if (writing.split(' ').length > 750) {
            setButtonTried(false)
            const newLog = {
                id: Date.now(),
                usedStrats: usedStrats,
                writing: writing,
                date: dayjs().format('MM/DD/YYYY'),
                time: dayjs().format('HH:mm:ss'),
                authorName: auth.currentUser.displayName,
                authorID: auth.currentUser.uid
            }
            const logAsString = JSON.stringify(newLog)
            localStorage.setItem(newLog.id, logAsString)
            addLog(newLog)
            history.push('/logs')
        }
        else {setButtonTried(true)}
    }

    return (
        <>
            <article className='writing-area'>
                <textarea
                value={writing}
                onChange={(event) => setWriting(event.target.value)}
                 />
                <div className='clickable-area' onClick={() => pullCard()}>
                <StrategyCard strategy={currentStrat} timer={timer} error={error} />
                </div>
            </article>
            {buttonTried && <h3 className='submit-error'>You haven't met your daily goal yet. Please wait till you've completed your entry to submit it!</h3>}
            {isAuth && 
            <footer>
            <div className='word-count'   style={{
            backgroundColor: buttonTried ? 'red' : ((writing.split(' ').length > 750) ? '#6F9E9E' : ''),
            }}>
                {writing.split(' ').length - 1}/750
            </div>
            <a className='submit-button' onClick={() => submitWriting()}>Submit</a>
            </footer>
            }
            
        </>
    );
  }
  
  export default WritingArea;

  WritingArea.propTypes = {
    addLog: PropTypes.func,
    isAuth: PropTypes.bool
 }