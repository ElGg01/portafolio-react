import { useEffect, useState, useRef } from "react";

export default function useObserver(opciones){

  //Elementos que usan el observer:
  const [elementos, setElementos] = useState([]);

  //Entradas de los elementos en la pantalla:
  const [entradas, setEntradas] = useState([]);

  //Creamos el observador:
  const observador = useRef(new IntersectionObserver(entradasObservadas => {
    setEntradas(entradasObservadas);
  }, opciones));

  //UseEfect que se ejecutara cada que el array de elementos cambie:
  useEffect(() => {
    //Obtenemos el observador actual y eliminamos todo lo que este observando para agregar todos los
    //Nuevos elementos
    const observadorActual = observador.current;
    observadorActual.disconnect();
    //Si hay mas de 0 elementos en la lista entonces agrega a observar todos los elementos
    if(elementos.length > 0){
      elementos.forEach(elemento => observadorActual.observe(elemento));
    };
    //Se ejecuta en el segundo render de un componente o siempre que es desmontado (eliminado):
    return () => {
      if(observadorActual){
        //Desconectamos para que no queden restos:
        observadorActual.disconnect();
      }
    };
  }, [elementos]);

  return [observador.current, setElementos, entradas];
};