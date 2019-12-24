import React, { Component} from 'react';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Route, Link } from "react-router-dom";

import TopMenu from './TopMenu'
import Employees from './Employees'
import AboutUs from './AboutUs'

class App extends Component {
 
  render(){
    return (
      <BrowserRouter>       
            <TopMenu />
            <div>
              <Route path="/about" component={AboutUs} />
              <Route path="/employees" component={Employees} />
            </div>
      </BrowserRouter>
    );
  }
}

export default App;
