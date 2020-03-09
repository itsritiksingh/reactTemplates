import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {NavBar} from './components/NavBar/NavBar'
import {Button} from './components/Button/Button'
import {GridComponent} from './components/grid/GridComponent'
import {Cards} from './components/cards/Cards';
import {Input} from './components/Input/Input'
function App() {
  return (
    <Router>
      <Route path="/" exact render={()=>{
       return <ul>
          <li><Link to="/navbar" style={{color: 'black'}} >Navbar</Link></li>
          <li><Link to="/button" style={{color: 'black'}} >Button</Link></li>
          <li><Link to="/grid" style={{color: 'black'}} >Grid</Link></li>
          <li><Link to="/card" style={{color: 'black'}}>Card</Link></li>
          <li><Link to="/input" style={{color: 'black'}}>Input</Link></li>
        </ul>
      }}/>
      <Route path="/navbar" exact component={NavBar} />
      <Route path="/button" exact component={Button} />
      <Route path="/grid" exact component={GridComponent} />
      <Route path="/card" exact component={Cards} />
      <Route path="/input" exact component={Input} />
    </Router>
  );
}

export default App
