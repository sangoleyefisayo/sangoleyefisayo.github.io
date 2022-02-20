import React from 'react';
import './App.css';
import Navibar  from './Components/Navibar'
import Jumbo1 from './Components/Jumbotron'
import Jumbo2 from './Components/Jumbotron2'
import Jumbo3 from './Components/Jumbotron3'
import Jumbo4 from './Components/Jumbotron4'
import Footer from './Components/Footer'
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './Views/Home.js'
// import Contact from './Views/Contact'
// import Scope from './Views/Scope'
// import Topics from './Views/Topics';
import Comics from './Views/Comics';
// import Dates from './Views/Dates';
import Experience from './Views/Experience';
import Publications from './Views/Publications';



function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
      <Router>
        <Navibar />
        <div className="p-3">
          <Switch>

            <Route exact path='/' >
            <Jumbo1 />
              <Home />
            </Route>

            


            <Route path='/submissions' >
            <Jumbo2 />
              <Publications />
            </Route>

            

            <Route path='/committees' >
            <Jumbo3 />
              <Experience />
            </Route>

            <Route path='/program' >
            <Jumbo4 />
              <Comics />
            </Route>

            
          </Switch>
        </div>
        
      </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
