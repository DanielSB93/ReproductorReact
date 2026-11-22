
import { useState, useEffect } from 'react';

import './App.css'
import Header from './Header.jsx'
import SingerInfo from './SingerInfo.jsx'
import ControlBar from './ControlBar.jsx'
import GroupBox from './GroupBox.jsx'
import Buscador from './Buscador.jsx'
import Carrusel from './Carrusel.jsx'
import Navegador from './Navegador.jsx'
import { alejandro } from './datos/datos.js'
import { david } from './datos/datos.js';


function App() {

  // Definimos los "Estados compartidos", constantes comunes en todo el codigo

  const [segundos, setSegundos] = useState(0);
  const [volumen, setVolumen] = useState(50);
  const [corriendo, setCorriendo] = useState(1);
  const [datos, setDatos] = useState(alejandro);


  // Temporizador: mientras "corriendo" sea 1 (boton de play True), suma un segundo cada segundo.
  // Se vuelve a ejecutar cada vez que cambia "corriendo" o los "datos" del cantant ; la función que
  // Declaramos la funcion intervalo que suma segundos mientras el valor sea menos que el tiempo de la cancion.
  useEffect(() => {
    if (corriendo === 1) {
      const intervalo = setInterval(() => {
        setSegundos(valorActual => valorActual >= datos.duracion ? valorActual: valorActual + 1);
      }, 1000);

      return () => clearInterval(intervalo);
    }

  }, [corriendo, datos]);

  // Cada elemento que devolvemos es un componente individual
  return (
    <div>
      <Header Cantante={datos.nombre} Album={datos.album} />
      <SingerInfo img={datos.foto} desc={datos.desc} segundos={segundos} volumen={volumen} setVolumen={setVolumen} corriendo={corriendo} setCorriendo={setCorriendo} duracion={datos.duracion}/>
      <ControlBar segundos={segundos} setSegundos={setSegundos} volumen={volumen} setVolumen={setVolumen} corriendo={corriendo} setCorriendo={setCorriendo} duracion={datos.duracion} datos={datos} setDatos={setDatos}/>
      <GroupBox />
      <Buscador nombre={datos.nombre} />
      <Carrusel />
      <Navegador />
    </div>
  )
}

export default App;
