import './Logs.css';
import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types'

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
                <p>"{logEntry.writing.split('').slice(0, 50).join('')}..."</p>
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

 Logs.propTypes = {
    logEntries: PropTypes.array,
    isAuth: PropTypes.bool
 }