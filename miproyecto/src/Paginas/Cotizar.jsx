import{Link,Outlet } from "react-router-dom";

function Cotizar(){
return(
    <div>
        <h2>Cotice su decoración personalizada</h2>
        <nav>
            <Link to="Sucursales">Cotizar en Linea</Link>|{"  "}
            <Link to="Central">Cotización con Asesoria</Link>|{"  "}
        </nav>
        {/*Aquí se mostrará las subrutas*/}
        <Outlet/>

    </div>
)
}

export default Cotizar;