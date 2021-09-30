import React from "react";
import Navbar from "./Componant nav/Navbar";
import './App.css';
import Banner from "./Componant ban/Banner";
import Rowpost from "./componat row/Rowpost";



function App() {
  return (
    <div>
     <Navbar/>
     <Banner/>
     <Rowpost title="Netflix Orginals"/>
     <Rowpost title="Actions" isSmall/>
    </div>
    
  );
  
 } 


  


export default App;
