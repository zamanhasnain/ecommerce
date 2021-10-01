import React from "react";
import { Container,Navbar,FormControl,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './components/Home';
import Slider from './components/Slider';
import Fashion from "./components/Fashion";
import Footer from "./components/Footer"
import './App.css';


function App() {
  return (
    <Router>
<div className="">
<Navbar bg="primary" variant="dark" className="" fixed="top">
  <Container>
  <Navbar.Brand as={Link} to="/">ECOMMERCE</Navbar.Brand>
  
        <FormControl
          type="search"
          placeholder="Search"
          className="mx-5"
          aria-label="Search"
        />
       
        <Button variant="light login-btn px-5">Login</Button>
        <span className="cart mx-5"><i className="fas fa-shopping-cart cart-icon"></i>Cart</span>
</Container>
</Navbar> 
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/slider/:id">
        <Slider/>
        </Route>
        <Route path="/fashion/:id">
        <Fashion/>
        </Route>
      </Switch>   
    </div>
    <Footer/>
  </Router>
  );
}

export default App;
