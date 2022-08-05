import './SingleEntry.css';
import React from 'react';

function SingleEntry({id, logEntries}) {
    const correctEntry = logEntries.find(entry => entry.id === id)
    if (!correctEntry) {
        return (
         <p>Can't find that one partner. Maybe try going back to the homepage</p>
        )
    } else {
        return (
            <article className='entry-record'>
                <div className='writing-info'>
                    <h2>{correctEntry.date}</h2>
                    <h3>Entry:</h3>
                    <p>{correctEntry.writing}</p>
                </div>
                <div className='card strategy-list'>
                    <h4>Strategies:</h4>
                    <ul>
                    {correctEntry.usedStrats.map(usedStrat => (
                        <li key={usedStrat.id}>{usedStrat.strategy}</li>
                    ))}      
                    </ul>
                </div>
            </article>
        );
    }
  };

 export default SingleEntry