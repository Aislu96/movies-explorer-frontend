import React from "react";
import './NavTab.css';

function NavTab({handleClickButton}) {
    return (
        <nav className="navtab">
            <ul className="navtab__group">
                <li className="navtab__item" onClick={handleClickButton}><a className="navtab__link" href='#project' name="project">О проекте</a></li>
                <li className="navtab__item" onClick={handleClickButton}><a className="navtab__link" href='#techs' name="techs">Технологии</a></li>
                <li className="navtab__item" onClick={handleClickButton}><a className="navtab__link" href='#student' name="student">Студент</a></li>
            </ul>
        </nav>
    );
}

export default NavTab;
