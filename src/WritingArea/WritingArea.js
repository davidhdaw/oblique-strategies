import './WritingArea.css';
import React from 'react';
import StrategyCard from '../StrategyCard/StrategyCard'

function WritingArea() {
    return (
        <>
            <article className='writing-area'>
                <textarea />
                <StrategyCard />
            </article>
            <footer>
            <div className='word-count'>250/750</div>
            <a className='submit-button'>Submit</a>
            </footer>
        </>
    );
  }
  
  export default WritingArea;