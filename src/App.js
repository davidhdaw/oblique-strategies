import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
      <Link to="/" className="link-style">
            Home
      </Link>
      <Link to="/about" className="link-style">
            About
      </Link>
      <Link to="/log" className="link-style">
            Daily Pages
      </Link>
      </nav>
      <h1 className='page-title'>Oblique Strategies</h1>
      <article className='main-content'>
        <textarea />
        <div className="card">
          <h2>Use an old idea.</h2>
          <p>32</p>
        </div>
      </article>
      <footer>
        <div className='word-count'>250/750</div>
        <a className='submit-button'>Submit</a>
      </footer>
    </div>
  );
}

export default App;
