import logo from './Componentes/Informacionpersonal/fotoPerfil.jpg';
import './App.css';
import porsche from './porsche.jpg';
import cordonbleu from './Componentes/comidas/chifrijo.jpg';
import tacos from './tacos.jpg';
import carroMustan from './mustang.png'
import iconopersonaje from './Componentes/personaje/personaje.jpg'
import Perfil from './Componentes/Informacionpersonal/perfil';
import Favoritos from './Componentes/favoritos/favoritos';
import Comida from './Componentes/comidas/comidas'; 
import Personaje from './Componentes/personaje/personaje';
import MisContactos from './Componentes/MisContactos/Miscontactos';
function App() {
  const nombre="Albertina Cruz Casco";
  const profesion="Ing. Sistemas";
  const imgPerfil=logo;
  const universidad="Universidad Técnologica Costarricense";
  const puestotrabajo="Auditoria TI";
  const pasatiempo="Escuchar PodCast, Ver Peliculas, Tiempo en Familia";
  const carrosFavorito="Ford Mustang GT, Porsche 718 boxster s, lamborghini diablo ";
  const comidaFavorita="Lasaña, Chifrijo, Casado";
  const imgcarroMustan=carroMustan;
  const imgcordonbleu=cordonbleu;

  return (
    <div className='contenedor' >
          <div className="tarjetaInfoPersonal">
    <Perfil 
          nombre={nombre} 
          profesion={profesion} 
          imgPerfil={logo} 
          puestotrabajo={puestotrabajo} 
          universidad={universidad} />
    <Favoritos 
          imagen={imgcarroMustan} 
          carrosFavorito={carrosFavorito}/>
    <Comida 
          imagen={imgcordonbleu} 
          comidaFavorita={comidaFavorita}/>
    <Personaje 
        personaje="Baymax"
        imagen={iconopersonaje}
        descripcion="Robot asistente de cuidado de la salud"
        historia="Baymax es un robot diseñado por Tadashi Hamada para ayudar a las personas y cuidar de su salud. Tras la trágica muerte de Tadashi, Baymax se convierte en compañero y protector de Hiro, adaptando su programación para ayudar a enfrentar desafíos y combatir amenazas. Aunque su diseño es simple y adorable, Baymax demuestra una combinación única de fuerza, inteligencia y empatía, enseñando la importancia de cuidar a otros mientras se enfrentan los problemas con calma y creatividad."
        justificacion="Baymax representa empatía, ayuda y protección, mostrando que la tecnología puede usarse de manera positiva para mejorar la vida de otros."
      />
    </div>
      <div  >
        <MisContactos></MisContactos>
      </div>
    </div>

  );
}

export default App;
