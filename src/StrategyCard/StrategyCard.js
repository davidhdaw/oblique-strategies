import './StrategyCard.css';
import React from 'react';

function StrategyCard({strategy, timer}) {
    return (
       <div className='card'>
        <h2 className='strategy'>{strategy.strategy}</h2>
        <p className='timer'>{timer}</p>
       </div>
    );
  };

 export default StrategyCard