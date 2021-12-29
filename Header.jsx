import React, {useEffect, useRef, useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'public/img/common/logo.png';
import './header.css';
import { mainUrlParam } from "config";
import { useMediaQuery } from "react-responsive";

function scrollHandle() {
    window.scrollTo(({
        top: 0
    }))
}

function Header() {
    const isPc = useMediaQuery({
        query: "(min-width: 769px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)"
    });

    const [isActive, setActive] = useState(false);
    const toggleClass = () => setActive(!isActive);
    const ref = useRef(null);
    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if(isActive && !ref.current.contains(e.target)) {
                setActive(false);
                console.log("clickOutside")
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    },[isActive])
    return (
        <header>
            <>
            {
                isPc &&
                <>
                <h1 className="logo"><NavLink exact onClick={scrollHandle} to={`/${mainUrlParam()}`}><img src={logo} alt="PeopulleyLogo" /></NavLink></h1>
                <nav>
                    <ul className="gnb">
                        <li className="link"><NavLink onClick={scrollHandle} exact to={`/${mainUrlParam()}`}>WHAT WE DO</NavLink></li>
                        <li className="link"><NavLink onClick={scrollHandle} to="/works/ongoing">WORKS</NavLink></li>
                        <li className="link"><NavLink onClick={scrollHandle} to="/qpicker">QPICKER</NavLink></li>
                        <li className="link"><NavLink onClick={scrollHandle} to="/afterMuseum">AFTERMUSEUM</NavLink></li>
                        <li className="link"><NavLink onClick={scrollHandle} to="/news/newmedia">NEWS</NavLink></li>
                        <li className="link"><NavLink onClick={scrollHandle} to="/contact">CONTACT</NavLink></li>
                        {/*<li><NavLink onClick={scrollHandle} to="/blog">BLOG</NavLink></li>*/}
                    </ul>
                </nav>
                </>
            }
            <button onClick={toggleClass} className={`ham ${isActive ? 'close' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            {
                isMobile &&
                <>
                <div className="mobile">
                    <ul className={`mGnb doHyeon ${isActive ? 'active' : ''}`} ref={ref}>
                        <li onClick={toggleClass} className="link"><NavLink onClick={scrollHandle} exact to={`/${mainUrlParam()}`}>WHAT WE DO</NavLink></li>
                        <li onClick={toggleClass} className="link"><NavLink onClick={scrollHandle} to="/works/ongoing">WORKS</NavLink></li>
                        <li onClick={toggleClass} className="link"><NavLink onClick={scrollHandle} to="/qpicker">QPICKER</NavLink></li>
                        <li onClick={toggleClass} className="link"><NavLink onClick={scrollHandle} to="/afterMuseum">AFTERMUSEUM</NavLink></li>
                        <li onClick={toggleClass} className="link"><NavLink onClick={scrollHandle} to="/news/newmedia">NEWS</NavLink></li>
                        <li onClick={toggleClass} className="link"><NavLink onClick={scrollHandle} to="/contact">CONTACT</NavLink></li>
                        {/*<li><NavLink onClick={scrollHandle} to="/blog">BLOG</NavLink></li>*/}
                    </ul>
                </div>
                <h1 className="logo"><NavLink exact onClick={scrollHandle} to={`/${mainUrlParam()}`}><img src={logo} alt="PeopulleyLogo" /></NavLink></h1>
                </>
            }
            </>
        </header>
    )
}
export default Header;