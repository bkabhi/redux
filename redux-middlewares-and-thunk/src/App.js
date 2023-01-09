// const url =  'http://localhost:3000/todos';

import Counter from "./pages/Counter";
import Todos from "./pages/Todos";

function App() {
  
  return (
    <div className="App">
      <Counter/>
      <br />
      <hr />
      <Todos/>
    </div>
  );
}

export default App;
