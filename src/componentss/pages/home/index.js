import React from "react";
import Header from "../../header/header";
import './style.css';
import Video from '../../../assets/video.mp4';
import Cards from "../../cards";
import Footer from "../../Footer/footer";










function Home (){

   
 
    return (
        <>
              <Header/>
              <body>
            <div id="banner"></div>
            <div id="trailer-container">
                <div className="content">
                    <video controls className='trailer'>
                        <source src={Video} />
                        Seu navegador não tem suporte para videos!
                    </video>

                    <div id="sinopse">
                        <p className="description">
                            SINOPSE
                            Não recomendado para menores de 14 anos
                            Batman (The Batman, no original) segue o segundo ano de Bruce Wayne (Robert Pattinson)
                            como o herói de Gotham, causando medo nos corações dos criminosos da sombria cidade.
                            ,Com apenas alguns aliados de confiança  e o tenente James Gordon
                            entre a rede corrupta de funcionários e figuras importantes do distrito, o
                            vigilante solitário se estabeleceu como a única personificação da vingança entre seus concidadãos.
                        </p>

                        <button className='button'>Comprar Ingresso</button>
                    </div>
                </div>
            </div>
            <Cards/>
            <footer>
            <Footer/>
            
           
          
             
            </footer>
            </body>
           

        </>
    )
}

export default Home;





                        


            
            
            
           
          