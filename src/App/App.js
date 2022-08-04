import './App.css';
import WritingArea from '../WritingArea/WritingArea'
import About from '../About/About'
import Logs from '../Logs/Logs'
import { Link, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function App() {
  const [logEntries, setLogEntries] = useState([])

  const addLog = (newLog) => {
    setLogEntries([...logEntries, newLog])
  }

  useEffect(() => {
    let savedLogs = Object.values(localStorage).map(object => JSON.parse(object));
    savedLogs.sort((a,b) => a.id - b.id);
    setLogEntries(savedLogs)
  }, [])

  return (
    <div className="App">
      <nav>
      <Link to="/" className="link-style">
        Home
      </Link>
      <Link to="/about" className="link-style">
        About
      </Link>
      <Link to="/logs" className="link-style">
        Daily Pages
      </Link>
      </nav>
      <h1 className='page-title'>Oblique Strategies</h1>
      <Route
        exact path="/"
        render={() => (
          <WritingArea addLog={addLog}/>
        )}
      />
      <Route
        path="/about"
        render={() => (
          <About />
        )}
      />
      {logEntries[0] && 
        <Route
          path="/logs"
          render={() => (
            <div className='log-area'>
              <Logs logEntries={logEntries} />
            </div>
          )}
        />
      }
      {!logEntries[0] && 
        <Route
          path="/logs"
          render={() => (
            <p>No log entries yet</p>
          )}
        />
      }
    </div>
  );
}

export default App;
