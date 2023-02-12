import './App.css';
import Navbar from './components/Navbar';
import TwoSides from './components/TwoSides';
import Separador from './components/Separador';
import Card from './components/Card';
import useObserver from './hooks/useObserver';
import { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

function App() {

  //Se almacena lo que devuelve useEffect en 3 variables:
  const [observador, setElementos, entradas] = useObserver({threshold: 0.5, root: null});

  //Una vez que se haya pintado el DOM entonces:
  useEffect(() => {
    const htmlElementos = document.querySelectorAll('.observado');
    setElementos(htmlElementos);
  }, [setElementos]);

  //UseEffect para la logica del observer:
  useEffect(() => {
    entradas.forEach(entrada =>{
      if(entrada.isIntersecting){
        const elemento = entrada.target;
        /* console.log(elemento);
        if(elemento.classList.contains('fadeInDown')){
          elemento.classList.add("animate__fadeInDown");
        } */

        let clases = new Map();
        clases.set('fadeInDown', 'animate__fadeInDown');
        clases.set('zoomInLeft', 'animate__zoomInLeft');
        clases.set('fadeIn', 'animate__fadeIn');
        clases.set('slideInRight', 'animate__slideInRight');
        clases.set('zoomIn', 'animate__zoomIn');
        clases.set('lightSpeedInLeft', 'animate__lightSpeedInLeft');
        clases.set('slideInLeft', 'animate__slideInLeft');

        for(let clavevalor of clases.entries()){
          if(elemento.classList.contains(clavevalor[0])){
            elemento.classList.add(clavevalor[1]);
            elemento.classList.add('visible');
          };
        };

        observador.unobserve(elemento);
      }
    });
  });

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 20,
      speed: 200,
      glare: false,
      "max-glare": 0.5,
      reverse: true,
      transition: true,
      
    });
  });

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <TwoSides 
        titulo="Julio César Negrete Gutiérrez"
        description="Soy un programador independiente en busca de nuevos proyectos a realizar, sientete en confianza de contactarme para cualquier tipo de trabajo que necesites."
        imagen="persona.png"
        subtitulo="Programador e Ingeniero en Computación"
        boton="Descargar CV"
        />
        <Separador />
        <div className="skills">
          <h1 className="titulo observado animate__animated slideInLeft">Mis habilidades:</h1>
          <div className='skills-container'>
            <div className='contenedor-cards'>
              <Card
              imagen="python.png"
              tecnologia="Python"
              colorLetra="black"/>
              <Card
              imagen="js.png"
              tecnologia="Javascript"
              colorLetra="black"/>
              <Card
              imagen="html-5.png"
              tecnologia="HTML"
              colorLetra="black"/>
              <Card
              imagen="css-3.png"
              tecnologia="CSS"
              colorLetra="black"/>
              <Card
              imagen="mysql.png"
              tecnologia="MySQL"
              colorLetra="black"/>
              <Card
              imagen="git.png"
              tecnologia="Git"
              colorLetra="black"/>
              <Card
              imagen="java.png"
              tecnologia="Java"
              colorLetra="black"/>
              <Card
              imagen="photoshop.png"
              tecnologia="Photoshop"
              colorLetra="black"/>
            </div>
            <div className='informacion'>
              <div className='observado information-cards animate__animated slideInRight'>
                <h1>¡Selecciona una tarjeta para ver más!</h1>
                {/* <img src={require('./img/python.png')} alt='Python'/>
                <h1>Python</h1>
                <h2>Nivel: Intermedio</h2>
                <p>• Mineria de datos</p>
                <p>• Webscraping</p>
                <p>• Mineria de datos</p>
                <p>• Webscraping</p>
                <p>• Mineria de datos</p>
                <p>• Webscraping</p> */}
              </div>
            </div>
          </div>
        </div>
        <Separador />
        <div className="projects">
          <h1 className="titulo observado animate__animated slideInLeft">Mis proyectos:</h1>
        </div>
        <Separador />
        
      </main>
    </div>
  );
}

export default App;
