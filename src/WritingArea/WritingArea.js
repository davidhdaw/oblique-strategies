import './WritingArea.css';
import React, { useState, useEffect } from 'react';
import { returnStrategy } from '../apiCalls';
import StrategyCard from '../StrategyCard/StrategyCard'

function WritingArea() {
    const [currentStrat, setCurrentStrat] = useState({strategy: ''})
    const [writing, setWriting] = useState('')
    const [timer, setTimer] = useState(90)
    const [timeoutID, setTimeoutID] = useState(0)
    const [mostWords, setmostWords] = useState(0)
    
    useEffect(() => {
        returnStrategy()
        .then((data) => {
            setCurrentStrat(data)
        })
      }, [])

      useEffect(() => {
        clock()
      }, [timer])

      useEffect(() => {
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
            returnStrategy()
            .then((data) => {
                setCurrentStrat(data)
                setTimer(90)
            })
        }
    }

    return (
        <>
            <article className='writing-area'>
                <textarea
                value={writing}
                onChange={(event) => setWriting(event.target.value)}
                 />
                <StrategyCard strategy={currentStrat} timer={timer} />
            </article>
            <footer>
            <div className='word-count'>{writing.split(' ').length - 1}/750</div>
            <a className='submit-button'>Submit</a>
            </footer>
        </>
    );
  }
  
  export default WritingArea;