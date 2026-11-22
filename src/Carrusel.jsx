import { useState } from 'react';

// Lista de emojis que se muestran en el carrusel
const emojis = ['😶‍🌫️', '🤭', '😏', '🤠', '😈', '🤯', '🥸'];
const centro = Math.floor(emojis.length/2);



/**
 * Carrusel
 * Fila de emojis en la que uno está destacado (más grande y con borde).
 * Al pulsar un emoji, pasa a ser el destacado.
 */
export default function Carrusel(){

    const [seleccionado, setSeleccionado] = useState(centro);

    return(
        <div className='Carrusel'>
            {/* map recorre el array y crea un botón por emoji.
                - key: identificador único que React necesita en las listas.
                - className: Si el boton tiene la misma posicion que "seleccionado" devolvemos 'destacado', si no ''
                - onClick: al pulsar, cambia el vaor de seleccionado*/}
            {emojis.map((emoji, i) => (
                <button key={i} type="button" className={i === seleccionado ? 'destacado' : ''} onClick={() => setSeleccionado(i)} >
                    {emoji}
                </button>
            ))}
        </div>
    )
}