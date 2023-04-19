import './App.css'
import Navbar from './components/navbar/navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <header>
      <div className="App">
        <Navbar />
        <ItemListContainer message={"coming soon"}/>
      </div>
    </header>
  )
}

export default App
