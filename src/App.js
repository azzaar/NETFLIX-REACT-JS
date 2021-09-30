import React from "react";
import Navbar from "./Componant nav/Navbar";
import {action,orginals} from './urls.js';
import './App.css';
import Banner from "./Componant ban/Banner";
import Rowpost from "./componat row/Rowpost";


function App() {
  return (
    <div>
     <Navbar/>
     <Banner/>
     <Rowpost url={orginals} title="Netflix Orginals"/>
     <Rowpost url={action} title="Actions" isSmall/>
    </div>
    
  );
  
 } 


  


export default App;
