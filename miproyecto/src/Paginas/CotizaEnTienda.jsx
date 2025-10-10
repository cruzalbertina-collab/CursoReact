import maps from '../react-icons/maps.png'
import WhatsApp from '../react-icons/whatsapp.png'

function Central() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
       <h3 style={{ color: '#444', marginBottom: '15px' }}>
        Estamos encantados de asesorarle en la decoración de su evento, cuidando cada detalle para hacerlo un verdadero éxito.
      </h3>
      <p>Contáctanos por WhatsApp:</p>
      <a
        href="https://wa.me/50671036388?text=Hola%2C%20quisiera%20más%20información%20sobre%20sus%20productos"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '10px',
          color: 'green',
          fontWeight: 'bold',
          textDecoration: 'none',
          fontSize: '18px',
        }}
      >
        <img
          src={WhatsApp}
          alt="WhatsApp"
          style={{ width: '28px', height: '28px' }}
        />
        Enviar mensaje por WhatsApp
      </a>

      <p style={{ marginTop: '20px' }}>
        O visitá nuestra tienda física ubicada en San Isidro de Heredia:
      </p>

      <a
        href="https://maps.app.goo.gl/Vst5Sq5hU2YedMpc8"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: '#007bff',
          textDecoration: 'underline',
          fontSize: '18px',
        }}
      >
        <img
          src={maps}
          alt="Google Maps"
          style={{ width: '26px', height: '26px' }}
        />
        Ver ubicación en Google Maps
      </a>
    </div>
  );
}

export default Central;
