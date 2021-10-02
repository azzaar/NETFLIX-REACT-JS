import React from "react";
import Navbar from "./Componant nav/Navbar";
import {action,comedy,horror,orginals,romance,documentari} from './urls.js';
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
     <Rowpost url={horror} title="Horror Movies" isSmall/>
     <Rowpost url={romance} title="Romantic" isSmall/>
     <Rowpost url={comedy} title="Comedy Movies" isSmall/>
     <Rowpost url={documentari} title="Documentaries" isSmall/>




    </div>
    
  );
  
 } 


  


export default App;
