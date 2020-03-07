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
      <Route path="/navbar" component={NavBar} />
    </Router>
  );
}

export default App
