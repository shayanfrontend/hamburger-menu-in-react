import React from 'react';
import styled from "styled-components"

const Ul = styled.ul`
list-style: none;
display: flex;
justify-content: right;
margin: 20px 50px;
z-index: 15;
li {
    padding 18px 30px;
}
@media (max-width: 768px){
    margin: 0;
    flex-direction: column;
    background-color: #1565df;
    position: fixed;
    top:0;
    right:0;
    height: 100%;
    width:300px;
    padding-top: 3.5rem;
    li{
        color: #fff;
    }
`
const Navbar = () => {
    return (
        <Ul>
            <li>Home</li>
            <li>Docs</li>
            <li>Buy me a coffee</li>
            <li>Github</li>
        </Ul>
    );
};

export default Navbar;