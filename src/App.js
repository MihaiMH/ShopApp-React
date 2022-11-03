import { Route,Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Catalogue from "./components/Catalogue";
import Aboutus from "./components/Aboutus";
import Basket from "./components/Basket";
import Item from "./components/Item";
import Error404 from "./components/Error404";

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/catalogue' element={ <Catalogue />} />
      <Route path='/aboutus' element={<Aboutus /> } />
      <Route path='/basket' element={ <Basket />} />
      <Route path='/item/:name' element={ <Item /> } />
      <Route path='*' element={<Error404/>} />
    </Routes>
  );
}

export default App;
