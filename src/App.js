import React, { Component } from 'react';
import Navbar from './component/Navbar';
import Banner from './component/Banner';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Banner/>
            </div>
        );
    }
}

export default App;