
import './App.css';
import ListaDeTareas from './components/ListaDeTareas';
import {Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <div>
        <h1>Wishlist</h1>
        <ListaDeTareas/>

      </div>
      
    </div>
  );
}

export default App;
