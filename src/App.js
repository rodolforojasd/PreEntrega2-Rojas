
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Contacto from "./components/ContactUs/ContactUs";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <BrowserRouter>
   
        <Navbar />

        <Routes>
          <Route path="/" element={ <ItemListContainer /> }/>
          <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
          <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
          <Route path="/nosotros" element={ <AboutUs /> } />
          <Route path="/contacto" element={ <Contacto/> } />
          <Route path="*" element={ <Navigate to="/" /> }/>
          {/* <Route path="*" element={ <Error404 /> }/> */}
        </Routes>

        {/* <Footer />  */}
        
        
    </BrowserRouter>
  );
  }

export default App;
