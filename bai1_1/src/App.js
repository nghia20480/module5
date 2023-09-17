
import './App.css';

import {getinforst} from "./List";
import React, {Component} from "react";

class App extends Component{
    render() {
        return(
            <>
                <div className="App">
                    <table border={2}>
                        <th>ten</th>
                        <th>tuoi</th>
                        <th>dia chi</th>
                    </table>
                    {getinforst()}
                </div>
            </>
        )
    }
}

export default App;

