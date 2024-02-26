import "./Preloader.css";
import React from "react";

function Preloader() {
 return (
     <div className="container">
         <input type="checkbox" id="toggle-button" className="toggle-button"/>
         <label htmlFor="toggle-button" className="text">Короткометражки</label>
     </div>
 );
}

export default Preloader;