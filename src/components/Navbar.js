import '../css/navbar.css';
import 'animate.css';

function Navbar(){
  return(
    <nav className="observado animate__animated fadeInDown" id="navbar">
      <div id="logo"><p>Julio</p></div>
      <div id="nav-links">
        <ul>
          <li><a href="google.com">Skills</a></li>
          <li><a href="google.com">Proyectos</a></li>
          <li><a href="google.com">Contacto</a></li>
        </ul>
      </div>
      <div id="redes">
        <ul>
          <li><a href="google.com"><i className="fi fi-brands-github" id="github"></i></a></li>
          <li><a href="google.com"><i className="fi fi-brands-youtube" id="yt"></i></a></li>
          <li><a href="google.com"><i className="fi fi-brands-linkedin" id="linkedin"></i></a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;