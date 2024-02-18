import React from "react";
import './NavTab.css';

function NavTab() {
    return (
        <nav>
            <ul className="navtab__group">
                <li><a href="#" target="_self" className="navtab__link">О проекте</a></li>
                <li><a href="#" target="_self" className="navtab__link">Технологии</a></li>
                <li><a href="#" target="_self" className="navtab__link">Студент</a></li>
            </ul>
        </nav>
    );
}

export default NavTab;