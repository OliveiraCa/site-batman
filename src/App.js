import './App.css';
import React from 'react';
import Home from './componentss/pages/home/index';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Contato from './componentss/pages/contato/contato';
import Fotos from './componentss/pages/fotos/fotos';
import Comentarios from './componentss/pages/comentarios/comentarios';







function App(){

   return (
      <div>
       
        <BrowserRouter>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/contato' element={<Contato/>}/>
         <Route path='/fotos' element={<Fotos/>}/>
         <Route path='/comentarios' element={<Comentarios/>}/>
         </Routes>
        </BrowserRouter>
         
        
         
         
      </div>
       
   );
}

export default App;
   
   



   





  

     
     
    
     
     
   
    
     
     
  
  
  //testando comentários fora dos componetes, dentro de componetes usar {/*comentário*/}
  //comentários dentro das tags de componente na mesma linha usar <Hello /* comentário dentro do componete*/ name= 'World'/>
  //<Hello name="World"
     /*
        comentários de multiplas linhas funcionam também!
     */ 
    // color={'blue'}/>
  
     
     
  
    
        
  
  


  

