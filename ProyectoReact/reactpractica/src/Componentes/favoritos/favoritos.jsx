function favoritos({imagen,carrosFavorito}){
    return(
        <div>
            <h1>Carros favoritos {carrosFavorito}</h1>
            <img src={imagen}  className='imagen'></img>
        </div>
    );
}
export default favoritos;