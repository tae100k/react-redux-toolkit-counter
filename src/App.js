import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./redux/counter";

function App() {
  //store.js에서 지정한 이름.state에서 만든 key값
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <p>The count is : {count}</p>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>
        increment by 33
      </button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </>
  );
}

export default App;
