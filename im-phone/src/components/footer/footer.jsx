import "../footer/footer.css"
import ig from '../../assets/img/ig.png'
import wpp from '../../assets/img/wpp.png'


export const Footer = () => {
    return (

        <footer>
            <p>Do you want to sell in I(m)PHONE?</p>
            <div className="footer__logos">
                <a href="https://www.instagram.com" target="_blank"><img src={ig} className="footer__ig"></img></a>
                <a href="https://web.whatsapp.com/" target="_blank"><img src={wpp} className="footer__wpp"></img></a>
            </div>
        </footer>

    )
}
