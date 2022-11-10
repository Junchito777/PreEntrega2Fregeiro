import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemCount from './ItemCount/ItemCount';
import VentadeAutos from './VentadeAutos/VentadeAutos';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';





function App () {
  return (
    <>
    <BrowserRouter>
      <VentadeAutos/>
      <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/:nombre/:id' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/category/:category' element={<ItemListContainer/>}/>
      </Routes>
      <ItemCount/>
    </BrowserRouter>   
    </>
  );
}

export default App;
