import { Image, Container, Row, Col } from "react-bootstrap";
import "../css/estiloAbout.css"
import { FaRegClock } from "react-icons/fa6";


const About = () => {
  return (
    // Sobre Nosotros
    <section>
      <div className="custom-background">
        <Container className="mx-auto" style={{ maxWidth: "1400px" }}>

          <div className="custom-about-title">
            <h1 className="text-center" >Arcade Taste Restobar</h1>
          </div>

          <Row className="mt-5 justify-content-around">
            {/* Imagen del Restaurant */}
            <Col lg={6}>
              <Image src="../images/arcade-resto-bar.jpg" alt="Arcade RestoBar" fluid className="mb-4 mt-4" />
            </Col>
            {/* Descripción del Restaurant */}
            <Col lg={5}>
              <div className="about-us-text mt-4">
                <div className="text-center">
                  <h2>Sobre Nosotros</h2>
                </div>
                <div className="mt-5 custom-description-about">
                  <p>
                    Bienvenidos a Arcade Taste Restobar, ubicados en pleno centro de Temuco, #001, Calle React, donde la nostalgia, la comida y los juegos se encuentran. Desde nuestra apertura en octubre del 2023, hemos estado comprometidos a brindar a nuestros clientes una experiencia culinaria que los transporte a la era dorada de los videojuegos.
                  </p>
                  <p>
                    Fundado por entusiastas de los videojuegos, nuestro restaurante combina una deliciosa variedad de platos con un ambiente lleno de referencias a los juegos retro. Cada bocado es una oportunidad para recordar los clásicos y compartir esa emoción con amigos y familiares mientras juegas.
                  </p>
                  <p>
                    Estamos dedicados a ofrecer no solo comida deliciosa, sino también momentos de diversión y nostalgia. Desde nuestros platos temáticos hasta nuestros juegos y eventos especiales, Arcade Taste Restobar es mucho más que un restaurante, es una experiencia.
                  </p>
                </div>
              </div>
            </Col>

          </Row>
          <div className="custom-horario-about">
            {/* Horario Del Restaurant */}
            <div className="custom-about-title">
              <h2 className="text-center" >Horario <FaRegClock color="#732566" /></h2>
            </div>

            <div className="text-center mt-5">
              <p>
                Los días 25 de Diciembre y del 1 al 6 de Enero, permaneceremos cerrados.
              </p>
              <p>
                Lunes a Viernes : de 10.00 a 18.00 h
              </p>
              <p>
                Sabados, Domingos y Festivos : de 11.00 a 19.30 horas
              </p>
            </div>

          </div>

        </Container>

      </div>

    </section>
  )
}

export default About