import '../css/App.css';
import React,{useState,useContext,useEffect} from 'react';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import moviezzContext from '../context/moviezzContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero';
import Movies from './Movies';
import Tvshows from './Tvshows';
import Content from './Content';
import Footer from './Footer';
import Login from '../pages/Login';
import Register from '../pages/Register';





function App() {
  const [headerButtonText, setHeaderButtonText] = useState(["Sign In"]);
  const [headerButtonLink, setHeaderButtonLink] = useState(["/login"]);
  const [heros, setHeros] = useState([]);
 

  

  return (
    <Router>
    <Switch>
    <moviezzContext.Provider value={{ headerButtonText, setHeaderButtonText, headerButtonLink, setHeaderButtonLink,heros, setHeros}}>
    <Route exact path="/">
          <Header />
          <Hero/>
          <Movies/>
          <Tvshows/>
          <Content/>
          <Footer/>
        </Route>
        <Route exact path="/login">
          <Header />
          <Login/>
          <Footer/>
        </Route>
        <Route exact path="/register">
          <Header />
          <Register/>
          <Footer/>
        </Route>
        </moviezzContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
