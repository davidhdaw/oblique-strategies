import './Logs.css';
import React from 'react';

function Logs({logEntries}) {
    console.log(logEntries)
    return (
        logEntries.map((logEntry) => (
            <div className='log' key={logEntry.date}>
                <h2>{logEntry.date.$M+1}/{logEntry.date.$D}/{logEntry.date.$y}</h2>
                <p>Strategies:</p>
                <ul>
                    {logEntry.usedStrats.map(usedstrat => (
                        <li key={Date.now()}>{usedstrat.strategy}</li>
                    ))}    
                </ul>
            </div>
        ))
    );
  };

 export default Logs