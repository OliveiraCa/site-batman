import React from "react";
import Logo from '../../assets/logo-batman.jpg';
import '../Footer/footer.css';

function Footer (){
    return(
        <>
        <footer>
        <img id="logo" src={Logo} alt='logo Batman' title="logo Batman" />
               
        <span>Todos os direitos reservados ©</span>
        <span>Desenvolvido por: Carlos Alberto</span>
        <nav class="footer-navegation">
            <ul class="footer-list">
                
                <li>Home</li>
                <li>Contato</li>
                <li>Fotos</li>
                <li>Comentários</li>

            </ul>
        </nav>
        </footer>
        </>
    )
}
export default Footer;