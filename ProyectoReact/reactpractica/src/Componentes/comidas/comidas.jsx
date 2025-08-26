function favoritos({imagen,comidaFavorita}){
    return(
        <div>
            <h1>Comidas favoritos {comidaFavorita}</h1>
            <img src={imagen}  className='imagen'></img>
        </div>
    );
}
export default favoritos;