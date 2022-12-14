import './App.css';
import WritingArea from '../WritingArea/WritingArea'
import About from '../About/About'
import Logs from '../Logs/Logs'
import Login from '../Login/login'
import SingleEntry from '../SingleEntry/SingleEntry'
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth, db } from '../firebase-config';
import { addDoc, collection, getDocs, where, query } from 'firebase/firestore'

function App() {
  const [logEntries, setLogEntries] = useState([])
  const [isAuth, setIsAuth] = useState(false)

  const entriesCollectionRef = collection(db, "entries")
  const userEntryQuery = query(collection(db, "entries"), where("authorID", "==", localStorage.userID || 0))
  const history = useHistory()

  const addLog = async (newLog) => {
    await addDoc(entriesCollectionRef, newLog)
    setLogEntries([...logEntries, newLog])
  }

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.removeItem('userID')
      setIsAuth(false);
      history.push('/')
    })
  }


  useEffect(() => {
    if (localStorage.userID) {
      setIsAuth(true)
    }
    const getEntries = async () => {
      if (isAuth) {
      const data = await getDocs(userEntryQuery)
      setLogEntries(data.docs.map((doc) => ({...doc.data()})))
      }
    }
    getEntries()
  }, [isAuth])


  return (
    <div className="App">
      <nav>
      {isAuth ? <Link to="/writing" className="link-style home-link">Home</Link> : <Link to="/" className="link-style home-link">Home</Link>}
      <Link to="/about" className="link-style about-link">
        About
      </Link>
      <Link to="/logs" className="log-nav-link link-style">
        Daily Pages
      </Link>
      {isAuth && <button className='sign-out' onClick={signUserOut}>Sign Out</button>}
      </nav>
      <h1 className='page-title'>Oblique Strategies</h1>
      <Switch>
        <Route
          exact path="/"
          render={() => (
            <Login setIsAuth={setIsAuth} isAuth={isAuth} />
          )}
        />
        <Route
          exact path="/writing"
          render={() => (
            <WritingArea addLog={addLog} isAuth={isAuth}/>
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
                <Logs logEntries={logEntries} isAuth={isAuth}/>
              </div>
            )}
          />
        }
        {!logEntries[0] && isAuth && 
          <Route
            path="/logs"
            render={() => (
              <p>No log entries yet</p>
            )}
          />
        }

        {!isAuth && 
          <Route
            path="/logs"
            render={() => (
              <p>Please <Link to="/" className='link-to-login'>log in</Link> to see your entries</p>
            )}
          />
        }

        <Route 
          exact path="/:id" 
          render={({ match }) => 
            (<SingleEntry id={parseInt(match.params.id)} logEntries={logEntries} />
          )} 
        />
      </Switch>
  </div>
  )
}

export default App;
