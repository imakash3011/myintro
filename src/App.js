import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home'
import Footer from './Footer'
import { Route, Switch } from 'react-router-dom';



const App= ()=> {
return (
  <>
  <Navbar/>
  <Switch>
  <Route exact path='/' component={Home}/>
  </Switch>
  <Footer/>
  </>
)
}

export default App;
