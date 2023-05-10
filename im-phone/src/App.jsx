import './App.css';
import Navbar from './components/navbar/navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Footer } from './components/footer/footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <header>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/item/:categoryId' element={<ItemListContainer/>} />
            <Route path='/cart' element={''} />
            <Route path='*' element={<Navigate to={'/'} />}/>
          </Routes>
          <Footer />
        </div>
      </header>
    </BrowserRouter>
  )
}
export default App
