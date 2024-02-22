import React, {useRef} from "react";
import Promo from "./Promo/Promo";
import NavTab from "./NavTab/NavTab";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";

function Main() {
    const refs = {
        project: useRef(null),
        techs: useRef(null),
        student: useRef(null),
    };

    function handleClickButton(e) {
        const name = e.target.attributes.name.value;
        const element = refs[name].current;
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <main>
            <Promo/>
            <NavTab handleClickButton={handleClickButton}/>
            <AboutProject ref={refs.project}/>
            <Techs ref={refs.techs}/>
            <AboutMe ref={refs.student}/>
            <Portfolio />
        </main>
    );
}

export default Main;
