import './navbar.css'
import logo from '../../assets/img/logo.png'
import CartWidget from '../cartwidget/CartWidget.jsx'

function Navbar() {

    return (
        <header className="header">
            <div className="header_div">
                <p className='header_logo'>I<img className="logo" src={logo} alt='logo' />PHONE</p>
                <nav className="navbar">
                    <p className="navLink">TO BUY</p>
                    <p className="navLink">CONTACT US</p>
                    <CartWidget />
                </nav>
            </div>
        </header>
    )
}

export default Navbar