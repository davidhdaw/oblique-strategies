import './SingleEntry.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SingleEntry({id, logEntries}) {
    const correctEntry = logEntries.find(entry => entry.id === id)
    if (!correctEntry) {
        return (
         <p className='error-message'>Can't find that one partner. Maybe try going<Link to="/" className='link-to-login'>back to the homepage</Link></p>
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

 SingleEntry.propTypes = {
    id: PropTypes.number,
    logEntries: PropTypes.array
 }

