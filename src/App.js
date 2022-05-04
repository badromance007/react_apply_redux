import './App.css';
import {connect} from "react-redux"
import {increment, decrement} from "./redux"

function App(props) {
  return (
    <div>
      <h1>Count: {props.count}</h1>
      <button onClick={props.increment}>-</button>
      <button onClick={props.decrement}>+</button>
    </div>
  );
}

// function mapStateToProps(globalState) {
//   return {
//     count: globalState
//   }
// }

// const mapDispatchToProps = {
//   add: increment,
//   minus: decrement
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default connect(state => ({count: state}), {increment, decrement})(App)
