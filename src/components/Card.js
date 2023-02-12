import '../css/card.css'

function Card({imagen, tecnologia, color1 = "#e2e2e2", color2 = color1, colorLetra = "black"}){
  return(
    <div className="card observado animate__animated zoomIn" style={{
      //backgroundColor: colorFondo,
      //backgroundImage: `linear-gradient(${color1}, ${color2})`,
    }} onClick={cambiarContenido}>
      <img src={require(`../img/${imagen}`)} alt="img" className='img-card'/>
      <h2 style={{
        color: colorLetra,
      }}>{tecnologia}</h2>
    </div>
  );
}

let informacionTexto = new Map();
informacionTexto.set("Python", "<p>• Mineria de datos </p> <p>• Web Scrapping</p>");
informacionTexto.set("Javascript", "<p>• Asincronia</p> <p>• Peticiones</p>");
informacionTexto.set("HTML", "<p>• Maquetado web </p>");

function cambiarContenido(tecnologia) {
  let informacion = document.querySelector('.information-cards');
  if(tecnologia.target.nodeName === 'IMG' || tecnologia.target.nodeName === 'H2'){
    let temp = tecnologia.target.offsetParent.innerHTML;
    let nombreTec = tecnologia.target.offsetParent.innerText;
    // console.log(tecnologia.target.offsetParent.innerText);
    informacion.innerHTML = temp;
    informacion.innerHTML += informacionTexto.get(nombreTec);
  } else {
    let temp = tecnologia.target.innerHTML;
    let nombreTec = tecnologia.target.innerText;
    informacion.innerHTML = temp;
    informacion.innerHTML += informacionTexto.get(nombreTec);
  }
}

export default Card;