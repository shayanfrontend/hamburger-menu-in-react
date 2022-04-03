import React from 'react';
import style from "./banner.module.css"
import banner from "../images/react.jpg"
const Banner = () => {
    return (
        <div className={style.container}>
            <img src={banner}></img>
            <div className={style.textContainer}>
                <h1>Atriweb by React</h1>
                <p>اتری وب ساخته شده با فریم ورک <span className={style.textreact}>React.js</span> </p>
            </div>
        </div>
    );
};

export default Banner;