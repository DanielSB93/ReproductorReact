/**
 * Buscador
 * Barra de búsqueda con una lupa y un campo de texto con
 * el nombre del cantane.
 *
 * Usamos defaultValue (y no value) para que el texto se pueda editar
 * sin que React pida un onChange.
 * 
 * Con key hacemos que cambie cuando cambie el cantante (si cambia la clave, el elemento se actualiza por defecto)
 */
export default function Buscador({nombre = "Alejandro Sanz"}){
    return(
        <div className='Buscador'>
            <span>🔎</span>
            <input key={nombre} type="search" defaultValue={nombre} />
        </div>
    )
}