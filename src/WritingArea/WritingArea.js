import '@remirror/styles/all.css'
import './WritingArea.css'
import React, { useState, useEffect, useCallback, useRef } from 'react'
import { returnStrategy } from '../apiCalls'
import StrategyCard from '../StrategyCard/StrategyCard'
import { useHistory } from 'react-router-dom'
import { auth } from '../firebase-config'
import PropTypes from 'prop-types'
import { MarkdownEditor } from '@remirror/react-editors/markdown'
import { MarkdownToolbar } from '@remirror/react-ui'
const dayjs = require ('dayjs')

function WritingArea({addLog, isAuth}) {
    const [currentStrat, setCurrentStrat] = useState({strategy: ''})
    const [usedStrats, setUsedStrats] = useState([])
    const [writing, setWriting] = useState('')
    const [timer, setTimer] = useState(90)
    const [buttonTried, setButtonTried] = useState(false)
    const [mostWords, setmostWords] = useState(0)
    const [error, setError] = useState(false)
    const hasPulledInitialCard = useRef(false)
    
    const history = useHistory();
    const wordCount = getWordCount(writing)

    useEffect(() => {
        if (!isAuth) {history.push('/')}
      }, [history, isAuth])

      const pullCard = useCallback(() => {
        const card = returnStrategy()
            setError(false)
            setCurrentStrat(card)
            setUsedStrats((prevUsedStrats) => [...prevUsedStrats, card])
            setTimer(90)
    }, [])
      useEffect(() => {
        if (hasPulledInitialCard.current) {
            return
        }

        hasPulledInitialCard.current = true
        pullCard()
      }, [pullCard])

      useEffect(() => {
        if (timer === 0) {
            pullCard()
            return
        }

        const timeoutId = setTimeout(() => {
            setTimer((prevTimer) => prevTimer - 1)
        }, 1000)

        return () => clearTimeout(timeoutId)
      }, [timer, pullCard])

      useEffect(() => {
        setButtonTried(false)
        if (wordCount > mostWords) {
            setmostWords(wordCount)
            setTimer(90)
        }
    }, [writing, wordCount, mostWords])
    

    const submitWriting = () => {
        console.log(auth.currentUser.uid)
       if (wordCount > 750) {
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
                <div style={{
                  width: '40vw',
                  minWidth: 480,
                  height: '50vh',
                  backgroundColor: 'var(--background)',
                  color: 'var(--text-border)',
                  border: '3px solid var(--text-border)',
                  padding: 28,
                  fontSize: 18,
                  marginRight: '3vw',
                  boxSizing: 'border-box',
                  overflowY: 'auto',
                }}>
                   <MarkdownEditor 
                     initialContent={writing}
                     onChange={({ helpers }) => setWriting(helpers.getMarkdown())}
                     placeholder="Start typing..." 
                     toolbar={<MarkdownToolbar />}
                     style={{ height: '100%' }}
                   />
                </div>
                <div className='clickable-area' onClick={() => pullCard()}>
                <StrategyCard strategy={currentStrat} timer={timer} error={error} />
                </div>
            </article>
            {buttonTried && <h3 className='submit-error'>You haven't met your daily goal yet. Please wait till you've completed your entry to submit it!</h3>}
            {isAuth &&
            <footer>
            <div className='word-count'   style={{
            backgroundColor: buttonTried ? 'red' : ((wordCount > 750) ? '#6F9E9E' : ''),
            }}>
                {wordCount}/750
            </div>
            <button className='submit-button' onClick={() => submitWriting()}>Submit</button>
            </footer>
            }
            
        </>
    );
  }
  
  export default WritingArea;

  const getWordCount = (text) => {
    const cleanedText = text
      .replace(/```[\s\S]*?```/g, ' ')
      .replace(/`[^`]*`/g, ' ')
      .replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
      .replace(/\[[^\]]*]\([^)]*\)/g, ' ')
      .replace(/[#>*_~-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()

    if (!cleanedText) {
      return 0
    }

    return cleanedText.split(' ').length
  }

  WritingArea.propTypes = {
    addLog: PropTypes.func,
    isAuth: PropTypes.bool
 }