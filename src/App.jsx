import React from "react"

// style
import './style/App.css'

// lib
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/remixicon/fonts/remixicon.css'

// *** install libraries
/*
    - bootstrap
    - remixicon
    - swaetalert2
    - react-clock
    - uuid
*/

// component
import Content from "./component/content";
import { Navbar } from './component/navbar';
import { Footer } from './component/footer'

const App = () => {

  return (

    <React.Fragment>
      <>
       <Navbar/>
       <Content/>
      <Footer/>
      </>
    </React.Fragment>
     
  );
};

export default App;