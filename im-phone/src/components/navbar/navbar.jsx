import './navbar.css'
import logo from '../../assets/img/logo.png'
import CartWidget from '../cartwidget/CartWidget.jsx'

function Navbar() {

    return (
        <header className="header">
            <div className="header_div">
                <p className='header_p'>I<img className="logo" src={logo} alt='logo' />PHONE</p>
                <nav className="navbar">
                    <a href='' className="navLink">TO BUY</a>
                    <a href='' className="navLink">TO SELL</a>
                    <a href='' className="navLink">CONTACT US</a>
                    <CartWidget />
                </nav>

            </div>

        </header>
    )
}

export default Navbar