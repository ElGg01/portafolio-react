import '../css/twosides.css'
import 'animate.css'

function TwoSides({titulo, description, imagen, subtitulo, boton}){
  if(boton === undefined) {
    return(
      <div className="contenedor-two">
        <div className='observado imagen animate__animated zoomInLeft'>
          <img src={require(`../img/${imagen}`)} alt="img"/>
        </div>
        <div className='texto'>
          <h1 className='observado animate__animated slideInRight'>{titulo}</h1>
          <h2 className='observado animate__animated fadeInDown animate__delay-1s'>{subtitulo}</h2>
          <p className='observado animate__animated fadeIn animate__delay-2s'>{description}</p>
        </div>
      </div>
    );
  } else {
    return(
      <div className="contenedor-two">
        <div className='observado imagen animate__animated zoomInLeft'>
          <img src={require(`../img/${imagen}`)} alt="img"/>
        </div>
        <div className='texto'>
          <h1 className='observado animate__animated slideInRight'>{titulo}</h1>
          <h2 className='observado animate__animated fadeInDown animate__delay-1s'>{subtitulo}</h2>
          <p className='observado animate__animated fadeIn animate__delay-2s'>{description}</p>
          <button className='observado animate__animated zoomIn animate__delay-3s'>{boton}</button>
        </div>
      </div>
    );
  }
};

export default TwoSides;