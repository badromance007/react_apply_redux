import './App.css';
import {useSelector, useDispatch} from "react-redux"
import {increment, decrement} from "./redux"

function App(props) {
  const count = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
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

// export default connect(state => ({count: state}), {increment, decrement})(App)
export default App