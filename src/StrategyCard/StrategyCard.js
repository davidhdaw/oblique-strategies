import './StrategyCard.css';
import React from 'react';
import PropTypes from 'prop-types'

function StrategyCard({strategy, timer, error}) {

   if(error) {
      return (
         <div className='card'>
          <h2 className='strategy'>Uh-Oh! We couldn't pull a strategy.</h2>
          <br />
          <h2 className='strategy'>Maybe that's your strategy?</h2>
          <p>(or maybe you should click to try again)</p>
         </div>
      );
   } else {
      return (
         <div className='card'>
          <h2 className='strategy'>{strategy.strategy}</h2>
          <p className='timer'>{timer}</p>
         </div>
      );
   }
  };

 export default StrategyCard

 StrategyCard.propTypes = {
   strategy: PropTypes.object,
   timer: PropTypes.number,
   error: PropTypes.bool
}