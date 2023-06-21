import React from "react";
import Footer from "../../Footer/footer";
import Header from "../../header/header";
import '../comentarios/comentarios.css';
import imagens from "../../../assets/img/image";

function Comentarios(){
    return(
    <>
     
            <Header/>
            <div className="body">
            <div className="blocoimg">
                <img src={imagens.imagem12} alt='Imagem' title="Imagem filme do Batman"/>
                <img src={imagens.imagem13} alt='Imagem' title="Imagem filme do Batman"/>
                <img src={imagens.imagem14} alt='Imagem' title="Imagem filme do Batman"/>
                <img src={imagens.imagem15} alt='Imagem' title="Imagem filme do Batman"/>
             </div>
             <h1 className="texto-comentarios"> IT´S TIME FOR YOUR FEEDBACK!</h1>
             <h1>Comentários</h1>
             <form>
                <label for='name'>Nome:</label>
                <input type='text' id='name' name='name' required/>

                <label for='comment'>Comentário:</label>
                <textarea id='comment' name='comment' rows='5'required></textarea>

                <input type='submit' value='Enviar'/>                    
             </form>
             <div className="'comment">
                <h3>João</h3>
                <p>O filme do Batman é uma obra-prima sombria e emocionante,<br></br>
                 repleta de reviravoltas inteligentes que mantêm os espectadores presos do início ao fim.</p>
             </div>
             <div className="'comment">
             <h3>Maria</h3>
               <p>O desempenho excepcional do elenco, combinado com uma direção magistral e uma trama cativante,<br></br>
                fazem do filme do Batman uma experiência cinematográfica imperdível para os fãs de super-heróis.</p>
            </div>
            </div>
            <Footer/>
                    
                
            
                                       
 
        </>
    )
}    
export default Comentarios;