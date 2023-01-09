// const url =  'http://localhost:3000/todos';
import { useSelector, useDispatch } from 'react-redux'
import { decCount, incCount } from './redux/action';
function App() {
  const count = useSelector(state=>state.Count.count);
  const dispatch= useDispatch();
  
  return (
    <div className="App">
      <h1>Count: {count} </h1>
      <button onClick={()=>dispatch(incCount(1))}>INC</button>
      <button onClick={()=>dispatch(decCount(1))}>DEC</button>
    </div>
  );
}

export default App;
