function perfil ({nombre,universidad,profesion,puestotrabajo,imgPerfil}){
return(
    <div>
        <h1>Bienvenidos a Mi perfil</h1>
        <h2>Informacion general</h2>
          <h2>Soy, {nombre}</h2>
        <img src={imgPerfil} alt='Imagen de peril del usuario' className='imagen'></img>
        <h3>Profesion:{profesion}</h3>
        <h3>Universidad:{universidad}</h3>
         <h3>Puestotrabajo:{puestotrabajo}</h3>
    </div>
)
}
export default perfil;