<<<<<<< HEAD
import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {NavBar} from './components/NavBar/NavBar'
function App() {
  return (
    <Router>
      <Route path="/" exact render={()=>{
       return <ul>
          <li><Link to="/navbar" style={{color: 'black'}} >Navbar</Link></li>
          <li><Link to="/navbar" style={{color: 'black'}} >Navbar</Link></li>
          <li><Link to="/navbar" style={{color: 'black'}} >Navbar</Link></li>
          <li><Link to="/navbar" style={{color: 'black'}} >Navbar</Link></li>
          <li><Link to="/navbar" style={{color: 'black'}} >Navbar</Link></li>
          <li><Link to="/navbar" style={{color: 'black'}} >Navbar</Link></li>
          <li><Link to="/navbar" style={{color: 'black'}} >Navbar</Link></li>
        </ul>
      }}/>
      <Route path="/navbar" exact component={NavBar} />
    </Router>
  );
}

export default App
=======
import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {NavBar} from './components/NavBar/NavBar'
function App() {
  return (
    <Router>
      <Route path="/" exact render={()=>{
       return <ul>
          <li><Link to="/navbar" style={{color: 'black'}} >Navbar</Link></li>
        </ul>
      }}/>
      <Route path="/navbar" exact component={NavBar} />
    </Router>
  );
}

export default App
>>>>>>> a0e9f0adf743c762eec608959f29504d0eb333c6
