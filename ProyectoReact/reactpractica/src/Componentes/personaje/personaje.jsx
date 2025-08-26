import './personaje.css'; 
function favoritos({personaje, imagen,descripcion,historia,justificacion}){
    return(
        <div>
            <h1>Personaje {personaje}</h1>
            <img src={imagen}  className='imagen'></img>
            <h2>Descripcion</h2>
            <p>{descripcion}</p>
            <h2>Historia</h2>
            <p>{historia}</p>
            <p>justificacion:{justificacion}</p>
        </div>
    );
}
export default favoritos;