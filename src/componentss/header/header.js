import React from "react";
import { Link }  from "react-router-dom";
import '../../componentss/header/style.css';
import Logo from "../../assets/logo-batman.jpg";


function Header(){



    return (
        <header className="cabeçalho">
            <img id="logo" src={Logo} alt='logo Batman' title="logo Batman"/> 
            <nav>
                <ul>
                    <Link style={{textDecoration:'none'}} to='/'>
                        <li>Home</li>
                    </Link>
                    <Link style={{textDecoration:'none'}} to='/contato'>
                        <li>Contato</li>
                    </Link>
                    <Link style={{textDecoration:'none'}} to='/fotos'>
                        <li>Fotos</li>
                    </Link>
                    <Link style={{textDecoration:'none'}} to='/comentarios'>
                        <li>comentários</li>
                    </Link>



                </ul>
            </nav>
        </header>
    )
}

export default Header;





