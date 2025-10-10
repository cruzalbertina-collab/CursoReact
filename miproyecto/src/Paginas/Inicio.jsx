import React from "react";
import Slider from "react-slick";

// imágenes de ejemplo
import img1 from "../react-icons/img1.jpg";
import img2 from "../react-icons/img2.jpg";
import img3 from "../react-icons/img3.jpg";

function Inicio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Bienvenido a nuestro sitio de decoraciones con globos 🎈</h2>
      <p>
        Hacemos que tus eventos sean inolvidables con nuestras decoraciones personalizadas.
      </p>

      <div style={{ maxWidth: "600px", margin: "0 auto", marginTop: "20px" }}>
        <Slider {...settings}>
          <div>
            <img src={img1} alt="Decoración 1" style={{ width: "100%", borderRadius: "12px" }} />
          </div>
          <div>
            <img src={img2} alt="Decoración 2" style={{ width: "100%", borderRadius: "12px" }} />
          </div>
          <div>
            <img src={img3} alt="Decoración 3" style={{ width: "100%", borderRadius: "12px" }} />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Inicio;
