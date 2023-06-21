import React from 'react';
import '../button-rolagem/buttonRolagem.css';

class ScrollButton extends React.Component {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Para uma rolagem suave
    });
  };

  render() {
    return (
        <div className='buttonRolagem'>
      <button onClick={this.scrollToTop}>
       Voltar ao Topo
      </button>
      </div>
    );
  }
}

export default ScrollButton;


