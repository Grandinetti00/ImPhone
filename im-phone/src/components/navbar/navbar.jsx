import './navbar.css'
import logo from '../../assets/img/logo.png'
import CartWidget from '../cartwidget/CartWidget.jsx'

function Navbar() {

    return (
        <header className="header">
            <div className="header_div">
                <img className="logo" src={logo} alt='logo' />
                <nav className="navbar">
                    <a href='' className="navLink">TO BUY</a>
                    <a href='' className="navLink">TO SELL</a>
                    <a href='' className="navLink">CONTACT US</a>
                </nav>
                <CartWidget />
            </div>

        </header>
    )
}

export default Navbar