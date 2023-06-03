import './navbar.css'
import logo from '../../assets/img/logo.png'
import CartWidget from '../cartwidget/CartWidget.jsx'
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <header className="header">
            <div className="header_div">
                <section>
                    <p className='header_logo'>I<img className="logo" src={logo} alt='logo' />PHONE</p>
                    <p className='logo_slogan'>choose the model of your future</p>
                </section>
                <nav className="navbar">
                    <Link to='/' className="navLink">iHome</Link>
                    <Link to='/item/X' className="navLink">iPhone X</Link>
                    <Link to='/item/11' className="navLink">iPhone 11</Link>
                    <Link to='/item/12' className="navLink">iPhone 12</Link>

                    <CartWidget />
                </nav>
            </div>
        </header>
    )
}

export default Navbar