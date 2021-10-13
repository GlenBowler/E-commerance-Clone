import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Checkout from './components/Checkout';
import Login from './components/Login';
import TermsConditions from './components/TermsConditions';
import LandingPage from './components/LandingPage';


function App() {
  return (

    <Router>
    <div className="App">
    {/*Ouput of my login Page*/}
    <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        
         {/*Ouput of my Checkout Page*/}
        <Route path="/Checkout">
          <Header/>
          <Checkout/>
        </Route>

          {/*Ouput of my Terms & Conditions Page*/}
        <Route path="/terms">
          <TermsConditions/>
        </Route>

          {/*Ouput of my Shopping Page*/}
        <Route path="/Shopping_cart">
          <Header/>
          <Home/>
        </Route>
        
         {/*Ouput of my Shopping Page*/}
        <Route path="/Login">
          <Login/>       
        </Route>


          {/*Ouput of my Landing Page*/}
        <Route path="/">
            <Header/>
            <LandingPage/>
        </Route>

    </Switch>

    </div>
    </Router>
  );
}

export default App;
