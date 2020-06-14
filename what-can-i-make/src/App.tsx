import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import RecipeCollection from './RecipeCollection';
import logo from './what-can-i-make.png';
import './App.css';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar color='light' light expand='md'>
          <Link to='/'>
            <NavbarBrand>
              <img id='logo' src={logo} alt='logo' />
            </NavbarBrand>
          </Link>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <Link to='/recipe-finder'>
                <NavLink>Find Your Recipe</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Navbar>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/recipe-finder'>
            <RecipeCollection />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
