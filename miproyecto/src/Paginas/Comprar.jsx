import { Link, Outlet } from "react-router-dom";
import { ProductProvider } from "../Context/ProductContext";
import { CartProvider } from "../Context/CartContext";


function Comprar(){
    return(
<div>
<h2>Esta es la página Acerca de</h2>
          <nav>
            <Link to="Catalogo">Catálogo</Link> 
            <Link to="carro">Carrito</Link>
          </nav>{
          <ProductProvider>
            <CartProvider>
                <Outlet>
                </Outlet>
            </CartProvider>
          </ProductProvider>}

</div>    
    );
}
export default Comprar;