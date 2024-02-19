import React from "react";
import './NavTab.css';

function NavTab() {
    return (
        <nav>
            <ul className="navtab__group">
                <li className="navtab__li">О проекте</li>
                <li className="navtab__li">Технологии</li>
                <li className="navtab__li">Студент</li>
            </ul>
        </nav>
    );
}

export default NavTab;
