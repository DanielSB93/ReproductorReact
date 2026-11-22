import { useState } from "react";
// Iconos de la barra de navegación: inicio, ventanas y menú.
const iconos = ['🏠', '⬜', '☰'];

/**
 * Navegador
 * Barra de navegación inferior con tres iconos.
 *
 * Estado:
 *  - seleccionado: posición del icono activo.
 */
export default function Navegador(){

    const [seleccionado, setSeleccionado] = useState(1);
    return(
        <div className='Navegador'>
            {iconos.map((icono, i) => (
                <button key={i} type="button" className={i === seleccionado? "destacado": ""} onClick={() => setSeleccionado(i)}>
                    {icono}
                </button>
            ))}
        </div>
    )
}