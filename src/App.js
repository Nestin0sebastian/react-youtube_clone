
import React from "react";
import Navbar from "./components/navbar/navbar.js"; 
import navbar from "./components/navbar/navbar.css";
import Banner from "./components/banner/banner.js";
import RowPost from "./rowpost/rowPost.js";
import { action,originals } from "./Urls.js";
import "./App.css"

function App() {
  return (
    <div >
    
        <Navbar /> 
        <Banner/>
        <RowPost   url={action} title={"Netflix Originals"}/>
        <RowPost url={originals}  title={"Action"} isSmall/>         
      

        
    
    </div>
  );
}

export default App;
