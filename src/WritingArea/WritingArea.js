import './WritingArea.css';
import React, { useState, useEffect } from 'react';
import { returnStrategy } from '../apiCalls';
import StrategyCard from '../StrategyCard/StrategyCard'

function WritingArea() {
    const [currentStrat, setCurrentStrat] = useState({strategy: ''})
    const [writing, setWriting] = useState('')
    const [timer, setTimer] = useState(90)
    
    useEffect(() => {
        returnStrategy()
        .then((data) => {
            setCurrentStrat(data)
        })
        
      }, [])

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
            <div className='word-count'>{writing.split(' ').length}/750</div>
            <a className='submit-button'>Submit</a>
            </footer>
        </>
    );
  }
  
  export default WritingArea;