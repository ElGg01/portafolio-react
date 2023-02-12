import '../css/skills.css';
import 'animate.css';
import Card from './Card';

function Skills({titulo}){
  return(
    <div className="skills">
      <h1 className="titulo observado animate__animated slideInLeft">{titulo}</h1>
      <div className='contenedor-cards'>
        <Card 
        imagen="persona.png"
        tecnologia="Python"
        colorFondo="green"/>
        <Card 
        imagen="persona.png"
        tecnologia="Javascript"
        colorFondo="blue"/>
      </div>
    </div>
  );
};

export default Skills;