import React from 'react';
import freeCodeCampLogo from '../imagenes/564429.png'; // Ajusta la ruta según tu estructura de carpetas
//import './Logo.css'; // Si deseas aplicar estilos específicos

const Logo = () => {
  return (
    <div className='freecodecamp-logo-contenedor'>
      <img 
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='Logo de freeCodeCamp' />
    </div>
  );
}

export default Logo;
