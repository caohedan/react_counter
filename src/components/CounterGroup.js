import React, { Component } from 'react';
import Counter from '../container/CounterContainer'
export default class CounterGroup extends Component{
    constructor(props) {
        super(props);


    }
    render() {
        const {amount} = this.props;
        let counters = []
        for(let i = 0; i< amount; i++) {
            counters.push(<Counter index={i} key={i} />)
        }
        return (
            <div className="App">
                {counters}
            </div>);
    }
}