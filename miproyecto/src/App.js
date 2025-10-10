import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Inicio from './Paginas/Inicio';
import Comprar from './Paginas/Comprar';
import Cotizar from './Paginas/Cotizar';
import Sucursales from './Paginas/CotizaOnLine';
import Central from './Paginas/CotizaEnTienda';
import Cart from './Paginas/Cart';
import Catalogo from './Paginas/Catalogo';
import { useCartTotal } from './hooks/useCart';
import carrito from './react-icons/carrito.png'
function App() {
   const total = useCartTotal();

  return (
    <div>
  
            <p><img width="40" height="30" src={carrito} />Total a pagar:{total}</p>

  
   <Router>
{/*Menu de Navegación*/}
    <nav>
        <Link to="/">Inicio</Link> |{"  "}
        <Link to="/Comprar">Comprar</Link> |{"  "}
        <Link to="/Cotizar">Cotizar</Link> |{"  "}
    </nav>
  <Routes>
{/*Rutas Principales*/}
    <Route path="/" element={<Inicio/>} />
    <Route path="Comprar" element={<Comprar/>}>
      <Route path='Catalogo' element={<Catalogo/>}/>
      <Route path='carro' element={<Cart/>}/>
    </Route>
    <Route path="/Cotizar" element={<Cotizar/>} />

{/*Rutas anidadas bajo /panel/estadísticas*/}
<Route path="/Cotizar" element={<Cotizar/>} >
<Route path="Sucursales" element ={<Sucursales/>} />
<Route path="Central" element ={<Central/>} />
</Route>
  </Routes>
</Router>
</div>
  )
}

export default App;
