import './Logs.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Logs({logEntries}) {
    const newestFirst = logEntries.reverse()
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