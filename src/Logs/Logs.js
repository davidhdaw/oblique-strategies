import './Logs.css';
import React from 'react';

function Logs({logEntries}) {
    return (
        logEntries.map((logEntry) => (
            <div className='log' key={logEntry.date}>
                <h2>{logEntry.date}</h2>
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