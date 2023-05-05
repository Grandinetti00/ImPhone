import './App.css'
import Navbar from './components/navbar/navbar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {Footer} from './components/footer/footer'

function App() {

  return (
    <header>
      <div className="App">
        <Navbar />
        <ItemListContainer/>
        <Footer />
      </div>
    </header>
  )
}
export default App
