import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import { Route, Switch } from 'react-router-dom';
import Experience from './Experience';



const App= ()=> {
return (
  <>
  <Navbar/>
  <Switch>
  <Route exact path='/' component={Home}/>
  <Route exact path='/about' component={About}/>
  <Route exact path='/contact' component={Contact}/>
  <Route exact path='/experience' component={Experience}/>
  </Switch>
  <Footer/>
  </>
)
}

export default App;
