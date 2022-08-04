import './Logs.css';
import React from 'react';

function Logs({logEntries}) {
    const newestFirst = logEntries.reverse()
    return (
        newestFirst.map((logEntry) => (
            <div className='log' key={logEntry.id}>
                <h2>{logEntry.date} {logEntry.time}</h2>
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