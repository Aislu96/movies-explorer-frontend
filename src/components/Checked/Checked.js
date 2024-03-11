import "./Checked.css";
import React from "react";

function Checked({checked, onChangeChecked}) {
    return (
        <div className="container">
            <input type="checkbox" id="toggle-button" className="toggle-button" checked={checked} onChange={onChangeChecked}/>
            <label htmlFor="toggle-button" className="text">Короткометражки</label>
        </div>
    );
}

export default Checked;
