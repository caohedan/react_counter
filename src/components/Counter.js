import React, { Component } from 'react';
export default class Counter extends Component{
 constructor(props){
     super();
     this.inputText = React.createRef();
 }
    multiple = ()=>{
         console.log(this.props.index);
        const  onMultiple = this.props.onMultiple;
        const multipler = this.inputText.current.value;
        onMultiple(this.props.index,multipler);
    }

    render(){
        const { value, onIncrement, onIncrementLatency,onDecrement,index} = this.props;
        return(

            <p>
                Clicked: {value} times
                {' '}
                <button onClick={()=>onIncrement(index)}>
                    +
                </button>
                <button onClick={()=>setTimeout(()=>onIncrementLatency(index), 1000)}>
                    +/1s
                </button>
                <button onClick={()=>onDecrement(index)}>
                    -
                </button>
                <input text="text" defaultValue={0} ref={this.inputText} />
                <button onClick={()=>this.multiple(index)}>
                    *
                </button>

            </p >
        );
    }

}
