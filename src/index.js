import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popper from 'popper.js';
import $ from 'jquery';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// Components
import Main from './components/Main';
import CardList from './components/CardList';
import NotFound from './components/NotFound';
import Credits from './components/Credits';

const routing = (
  <div>
    <Navbar className="bg-dark navbar-dark" expand="lg">
      <Navbar.Brand href="/">Legends of Runeterra Cards</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Cards" className="navbar-light" id="basic-nav-dropdown">
            <NavDropdown.Item href="/cards/demacia">Demacia</NavDropdown.Item>
            <NavDropdown.Item href="/cards/noxus">Noxus</NavDropdown.Item>
            <NavDropdown.Item href="/cards/piltoverzaun">Piltover & Zaun</NavDropdown.Item>
            <NavDropdown.Item href="/cards/shadowisles">Shadow Isles</NavDropdown.Item>
            <NavDropdown.Item href="/cards/ionia">Ionia</NavDropdown.Item>
            <NavDropdown.Item href="/cards/freljord">Freljord</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/cards' component={Main}/>
        <Route path='/credits' component={Credits}/>
        <Route path='/cards/:group' component={CardList} />
        <Route component={NotFound} />
      </Switch>
    </Router>
    <footer id="sticky-footer" className="py-2 bg-dark text-white-50 d-flex">
      <div className="container text-center">
        <small>LOR Cards isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games
    or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are
    trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</small>
      </div>
      <span className='my-auto mr-2'>
        <a className='text-muted' href='/credits'>Credits</a>
      </span>
  </footer>
  </div>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
