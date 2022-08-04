import './App.css';
import WritingArea from '../WritingArea/WritingArea'
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
      <WritingArea />
    </div>
  );
}

export default App;
