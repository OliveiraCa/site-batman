import React from "react";
import Footer from "../../Footer/footer";
import Header from "../../header/header";
import '../contato/contato.css';

function Contato(){
    return(
    <>
    <Header/>
      <div className="flexbox-container1">
        <h1 className="texto">Fale Conosco</h1>
        <form action="enviar.php" method="post">
           <label className="texto" for='nome'>Nome</label>
           <input type='text' id='nome' name='nome' required/><br></br>

           <label className="texto" for='email'>Email</label>
           <input type='email' id='email' name='email' required/><br></br>
           <br></br>
           <label className="texto" for='mensagem'>Mensagem</label>
           <textarea type='mensagem' id='mensagem' name='mensagem' required></textarea><br></br>

           <input type='submit'value='Enviar'/>

        </form>
      </div>
      <Footer/>
       
    </>
    )     
    
}

export default Contato;
    
          
        

                
            