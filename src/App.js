import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fontawesome/css/all.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart/Cart';
import Default from './Components/Default';
import Modal from './Components/Modal';

class App extends Component {
  render() {
    return (
      <React.Fragment>        
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/ProductDetails" component={ProductDetails}></Route>
          <Route path="/Cart" component={Cart}></Route>
          <Route path="/Default" component={Default}></Route>
        </Switch> 
        <Modal></Modal>             
      </React.Fragment>
    );
  }
}

export default App;
