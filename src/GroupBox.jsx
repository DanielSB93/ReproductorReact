import { useState, useRef, useEffect } from 'react';

/**
 * CheckBox
 * Una casilla con su texto. Al pulsarla va pasando por los tres estados:
 * "not selected" -> "indeterminate" -> "selected" -> "not selected"...
 * El texto que se ve es siempre el estado actual.
 *
 * Props:
 *  - nombre: estado con el que empieza la casilla.
 */
function CheckBox({nombre = "not selected"}){

    // Referencia al <input> real de la página.
    // Hace falta porque "indeterminate" no se puede poner como atributo en el JSX:
    // solo se puede cambiar por JavaScript sobre el elemento ya dibujado.
    const casilla = useRef(null);
    // Estado actual de la casilla. Empieza con el valor recibido en la prop.
    const[estado, setEstado] = useState(nombre);

    // Después de cada dibujado en el que cambie "estado", activamos o quitamos
    // la rayita de indeterminado sobre el input real.
    useEffect(() => {
        casilla.current.indeterminate = (estado === "indeterminate");
    }, [estado]);

    // Pasa la casilla al siguiente estado del ciclo.
    function Cambiar(){
        if (estado === "selected") {
            setEstado("not selected")
        } else if (estado === "not selected") {
            setEstado("indeterminate")
        } else {
            setEstado("selected")
        }
        
    }

    return(
        <label>
            <input ref= {casilla} type="checkbox" checked={estado === "selected"} onChange={Cambiar}/>
            {estado}
        </label>
    )
}


/**
 * GroupBox
 * Muestra de casillas en dos columnas: desmarcada, marcada e indeterminada.
 */
export default function GroupBox(){
    return(
        <div className='GroupBox'>
            <CheckBox nombre="not selected"/>
            <CheckBox nombre="not selected"/>
            <CheckBox nombre="selected"/>
            <CheckBox nombre="selected"/>
            <CheckBox nombre="indeterminate"/>
            <CheckBox nombre="indeterminate"/>
        </div>
    )
}
