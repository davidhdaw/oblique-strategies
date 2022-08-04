import './StrategyCard.css';
import React from 'react';

function StrategyCard({strategy}) {
    return (
       <div className='card'>
        <h2 className='strategy'>{strategy.strategy}</h2>
        <p className='timer'>32</p>
       </div>
    );
  };

 export default StrategyCard