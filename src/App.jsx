import './App.css';
import Navbar from './components/navbar/navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/iItemDetailContainer/iItemDetailContainer';
import Cart from './components/Cart/Cart';
import { Footer } from './components/footer/footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Contact from './components/contact/Contact'
import { CartProvider } from './context/CartContext';
import { Checkout } from './components/checkout/Checkout'


function App() {


  return (
    <CartProvider>
      <BrowserRouter>
        <header>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/item/:categoryId' element={<ItemListContainer />} />
              <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<Navigate to={'/'} />} />
            </Routes>
            <Footer />
          </div>
        </header>
      </BrowserRouter>
    </CartProvider>
  )
}
export default App
