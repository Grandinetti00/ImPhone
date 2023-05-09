import './navbar.css'
import logo from '../../assets/img/logo.png'
import CartWidget from '../cartwidget/CartWidget.jsx'

function Navbar() {

    return (
        <header className="header">
            <div className="header_div">
                <section>
                    <p className='header_logo'>I<img className="logo" src={logo} alt='logo' />PHONE</p>
                    <p className='logo_slogan'>choose the model of your future</p>
                </section>
                <nav className="navbar">
                    <a href='/' className="navLink">TO BUY</a>
                    <a href='/contactUs' className="navLink">CONTACT US</a>
                    <CartWidget />
                </nav>
            </div>
        </header>
    )
}

export default Navbar