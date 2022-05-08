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
// import Comics from './Views/Comics';
import Experience from './Views/Experience';
import Publications from './Views/Publications';



function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
      <Router>
        <Navibar />
        <div className="p-0">
          <Switch>

            <Route exact path='/' >
              <Jumbo1 />
              <Home />
            </Route>

            


            <Route path='/publications' >
              <Jumbo2 />
              <Publications />
            </Route>

            

            <Route path='/experience' >
              <Jumbo3 />
              <Experience />
            </Route>

            {/* <Route path='/interests' >
              <Jumbo4 />
              <Comics />
            </Route> */}

            
          </Switch>
        </div>
        
      </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
