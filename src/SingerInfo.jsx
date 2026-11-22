/**
 * BarraInformacion. Se repite mucha logica de ControlBar
 *
 * Props:
 *  - segundos, duracion:      tiempo actual y total para la barra.
 *  - volumen, setVolumen:     volumen actual y función para cambiarlo.
 *  - corriendo, setCorriendo: si está sonando y función para cambiarlo.
 */
function BarraInformacion({ segundos, volumen, setVolumen, duracion, corriendo, setCorriendo }) {

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
        } else {
            setVolumen(0);
        }
    }

// Alterna entre reproducir y pausar.
    function Parar() {
        if (corriendo === 0) {
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

    return (

        <div>
            <button type="button" onClick={Parar}><SetIcono/></button>
            <progress value={segundos} max={duracion} />
            <button type="button" onClick={Mute}><ObtenerIcono /></button>
            <button type="button" >⤢</button>
        </div>

    )
}


/**
 * SingerInfo
 *
 * Props:
 *  - img:  imagen del cantante.
 *  - desc: texto descriptivo.
 */
export default function SingerInfo({ img, desc="Sin descripcion", segundos, volumen, setVolumen, corriendo, setCorriendo, duracion=150 }) {

    return (
        <div className="SingerInfo">
            <div className="Photo">
                <img src={img} alt='Portada del album' />
                <BarraInformacion segundos={segundos} volumen={volumen} setVolumen={setVolumen} corriendo={corriendo} setCorriendo={setCorriendo} duracion={duracion} />
            </div>
            <p>{desc}</p>
        </div>
    )
}
