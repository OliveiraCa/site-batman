import React from "react";
import imagens from "../../assets/img/image";
import '../Banner/banner.css';



function Banner() {
    return(
        <>
        <div id='Banner'></div>
        <div className="flexbox-container">

          <div className="album1">
            <img src={imagens.imagem1} alt='imagem' title="imagem batman" />
            <p>Cenas do Filme The Batman!(2022)</p>
          </div>

          <div className="album1">
            <img src={imagens.imagem2} alt='imagem' title="imagem batman" />
            <p>Cenas do Filme The Batman!(2022)</p>
          </div>

          <div className="album2">
            <img src={imagens.imagem3} alt='imagem' title="imagem batman" />
            <p>Cenas do Filme The Batman!(2022)</p>
            
          </div>

          <div className="album2">
            <img src={imagens.imagem4} alt='imagem' title="imagem batman" />
            <p>Cenas do Filme The Batman!(2022)</p>
          </div>


          <div className="album3">
            <img src={imagens.imagem5} alt='imagem' title="imagem batman" />
            <p>Cenas do Filme The Batman!(2022)</p>
          </div>

          <div className="album3">
            <img src={imagens.imagem6} alt='imagem' title="imagem batman" />
            <p>Cenas do Filme The Batman!(2022)</p>
          </div>


          <div className="album4">
            <img src={imagens.imagem7} alt='imagem' title="imagem batman" />
            <p>Cenas do Filme The Batman!(2022)</p>
          </div>

          <div className="album4">
            <img src={imagens.imagem8} alt='imagem' title="imagem batman" />
            <p>Cenas do Filme The Batman!(2022)</p>
          </div>

          <div className="album5">
            <img src={imagens.imagem9} alt='imagem' title="imagem batman" />
            <p>Cenas do Filme The Batman!(2022)</p>
          </div>

          <div className="album5">
            <img src={imagens.imagem10} alt='imagem' title="imagem batman" />
            <p>Cenas do Filme The Batman!(2022)</p>
          </div>

          <div className="album5">
            <img src={imagens.imagem11} alt='imagem' title="imagem batman" />
            <p>Cenas do Filme The Batman!(2022)</p>
          </div>
          </div>
        

       
        </>
    )
}
export default Banner;