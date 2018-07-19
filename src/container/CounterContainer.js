import {connect} from 'react-redux'
import Counter from "../components/Counter";
import {decrement, increment, multiple} from "../actions";
const mapStatesByProps = (state,ownProps) =>{
    return {
        value : state[ownProps.index]
    }
}
const mapDispathByProps =(dispatch) => {
    return {
        onIncrement: (index) => dispatch(increment(index)),
        onIncrementLatency:(index) => dispatch(increment(index)),
        onDecrement: (index) => dispatch(decrement(index)),
        onMultiple: (index, multipler) => dispatch(multiple(index, multipler))

    }


}
export default connect(mapStatesByProps, mapDispathByProps)(Counter)