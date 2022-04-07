import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Div = styled.div`
width: 2rem;
height: 2rem;
position: fixed;
top: 40px;
right: 30px;
z-index: 20;
display: none;
cursor: pointer;
@media (max-width: 768px){
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}
div{
    width: 2rem;
    height: 0.25rem;
    background-color:#fff;
    border-radius: 10px

}
`;
class Burger extends Component {
    render() {
        return (
            <>
            <Div>
                <div></div>
                <div></div>
                <div></div>
            </Div>
            <Navbar/>
            </>
        );
    }
}

export default Burger;