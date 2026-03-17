import './Logs.css';
import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown';

function Logs({logEntries, isAuth}) {
    const newestFirst = logEntries.reverse()
    const history = useHistory();

    useEffect(() => {
        if (!isAuth) {history.push('/')}
    }, [isAuth])

    return (
        newestFirst.map((logEntry) => (
            <div className='log' key={logEntry.id}>
                <Link to={`/${logEntry.id}`} className="log-link">
                <h2>{logEntry.date} {logEntry.time}</h2>
                </Link>
                <h3>First Line:</h3>
                <div className='log-preview'>
                    <ReactMarkdown>
                        {getPreview(logEntry.writing)}
                    </ReactMarkdown>
                </div>
                <h3>Strategies:</h3>
                <ul>
                    {logEntry.usedStrats.map(usedStrat => (
                        <li key={usedStrat.id}>{usedStrat.strategy}</li>
                    ))}    
                </ul>
            </div>
        
        ))
    );
  };

 export default Logs

 const getPreview = (markdownText) => {
    if (!markdownText) {
        return ''
    }

    const firstLine = markdownText.split('\n').find((line) => line.trim().length > 0) || ''
    return `${firstLine.slice(0, 80)}${firstLine.length > 80 ? '…' : ''}`
 }

 Logs.propTypes = {
    logEntries: PropTypes.array,
    isAuth: PropTypes.bool
 }