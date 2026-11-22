/**
 * Header
 * Encabezado de la app: muestra el nombre del artista y el título del álbum
 *
 * Props:
 *  - Cantante: nombre del artista (texto).
 *  - Album:    título del álbum (texto). Se muestra entre guiones: -Más-
 */
export default function Header({Cantante= "Desconocido", Album= "Desconocido"}){
    return(
        <div className='Header'>
            <h1>{Cantante}</h1>
            <h2>-{Album}-</h2>
        </div>
    )
}
