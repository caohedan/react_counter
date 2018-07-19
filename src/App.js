import React, { Component } from 'react';
import Counters from "./components/CounterGroup.js"
class App extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
           <Counters  amount ={2}  />
        );
    }
}
export default App;