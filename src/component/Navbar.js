import React from 'react';

import style from "./Navbar.module.css"
import logo from "../images/logo.png"
const Navbar = () => {
    return (
        <div>
            <header>
                <nav  className={style.header}>
                    <div className={style.nav}>
                        <ul>
                            <a><li></li>اتری وب</a>
                            <a><li></li>طراحی سایت</a>
                            <a><li></li>سئو</a>
                            <a><li></li>نمونه کارها</a>
                            <a><li></li>ارتباط با ما</a>
                        </ul>
                    </div>
                    <div className={style.logo}>
                        <img className={style.logo} src={logo} alt="atriweb"></img>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;