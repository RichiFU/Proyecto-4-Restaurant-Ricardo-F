import { Carousel } from "react-bootstrap";
import "../css/estiloHome.css"

const Home = () => {
  return (
    <main className="bg-home">

      <div className="content-carousel-1">
        <h1>Arcade Taste Restobar</h1>
        <p>
          Arcade Taste es mucho más que un restobar. Es una experiencia culinaria que te transporta a la era dorada de los videojuegos mientras disfrutas de deliciosos platos.
        </p>
      </div>

      <div>
        <Carousel>
          <Carousel.Item className=" custom-c-home1">
            <Carousel.Caption>
              <h2>Visita nuestra Barra</h2>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="  custom-c-home2">
            <Carousel.Caption>
              <h2>Disfruta nuestros clásicos juegos</h2>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="custom-c-home3">
            <Carousel.Caption>
              <h2>Disfruta nuestra Comida</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        
      </div>

      <div className="content-carousel-2">
        <h1>Sabor y Juegos en un Solo Lugar</h1>
        <p>Únete a nosotros y descubre una fusión única de sabor y diversión en cada rincón de nuestro restaurante temático de estilo arcade.</p>
        <div className="image-container">
          <img src="../../public/game-o2.png" alt="Imagen Debajo del Párrafo" />
        </div>
      </div>


     
    </main>
  );
};
export default Home