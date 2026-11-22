import { alejandro } from './datos/datos.js'
import { david } from './datos/datos.js';

/**
 * BarraProgreso
 * Barra que muestra cuánto ha avanzado la canción.
 *
 * Props:
 *  - segundos: tiempo transcurrido.
 *  - duracion: duración total (valor máximo de la barra).
 */
function BarraProgreso({ segundos, duracion}) {
    return (
        <div>
            <progress value={segundos} max={duracion} />
        </div>
    )
}

/**
 * Botones
 * Botones del reproductor: reiniciar, reproducir/pausar y siguiente cancion.
 * No guardan un estado propio
 *
 * Props:
 *  - segundos, setSegundos: tiempo actual y función para cambiarlo.
 *  - corriendo, setCorriendo: 1 si suena, 0 si está en pausa, y su función.
 *  - datos, setDatos: cantante seleccionado y funcion para cambiarlo.
 */
function Botones({segundos, setSegundos, corriendo, setCorriendo, datos, setDatos}) {

    // Vuelve al principio de la canción.
    function Reiniciar(){
        setSegundos(0)
    }

// Alterna entre reproducir y pausar.
    function Parar(){
        if (corriendo === 0){
            setCorriendo(1)
        } else {
            setCorriendo(0)
        }
    }

    function SetIcono(){
        if (corriendo === 0){
            return '⏸️'
        } else {
            return '▶️'
        }
    }

    // Cambia de cantante.
    function Avanzar(){
        if (datos === david){
            setDatos(alejandro)
            setSegundos(0)
        }else {
             setDatos(david)
             setSegundos(0)
        }
    }

    return (

        <div>
            <button type="button" onClick={Reiniciar}>⏪</button>
            <button type="button" onClick={Parar}><SetIcono/></button>
            <button type="button" onClick={Avanzar}>⏩</button>
        </div>

    )
}

/**
 * Volumen
 * Botón de silencio y deslizador de volumen.
 * El icono del botón cambia según el volumen.
 *
 * Props:
 *  - volumen:    valor actual (0 a 100).
 *  - setVolumen: función de App para cambiarlo.
 */
function Volumen({volumen, setVolumen}) {


// Devuelve el icono que corresponde al volumen actual.
    function ObtenerIcono() {
        if (volumen > 75) {
            return '🔊'
        } else if (volumen > 35) {
            return '🔉';
        } else if (volumen > 0) {
            return '🔈';
        } else {
             return '🔇';
        }
    }

// Si está en silencio, vuelve a 50; si no, silencia.
        function Mute() {
            if (volumen === 0) {
                setVolumen(50);
            } else  {
                setVolumen(0);
            }
        }

        return (
            <div>
                <button type="button" onClick={Mute}><ObtenerIcono/></button>
                <input type="range" min={0} max={100} value={volumen} onChange={(e) => setVolumen(Number(e.target.value))}/>
            </div>

        ) 
}



/**
 * ControlBar
 * Reproductor principal: barra de progreso, botones y volumen en una línea.
 */
export default function ControlBar({ segundos, setSegundos, volumen, setVolumen, corriendo, setCorriendo, duracion=150, datos, setDatos }) {

    return (
        <div className="ControlBar">
            < BarraProgreso segundos={segundos} duracion={duracion} />
            < Botones segundos={segundos} setSegundos={setSegundos} corriendo={corriendo} setCorriendo={setCorriendo} datos={datos} setDatos={setDatos} />
            < Volumen volumen={volumen} setVolumen={setVolumen} />
        </div>
    )
}