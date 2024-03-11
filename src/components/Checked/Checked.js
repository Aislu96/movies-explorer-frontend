import "./Checked.css";
import React from "react";

function Checked({checked, onChangeChecked, isValid, movie}) {
    function handelSubmit(e) {
        onChangeChecked(movie)
    }
    return (
        <div className="container">
            <input type="checkbox" id="toggle-button" className="toggle-button" checked={checked} disabled={!isValid} onChange={handelSubmit}/>
            <label htmlFor="toggle-button" className="text">Короткометражки</label>
        </div>
    );
}

export default Checked;
