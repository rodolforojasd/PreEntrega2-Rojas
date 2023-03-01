// import logo from './logo.svg';
// import './App.css';
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
// import { Button } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Navbar/>

        <ItemListContainer greeting="Hola! Bienvenido a Unión Licorera. " />


    </div>
  );
}

export default App;
