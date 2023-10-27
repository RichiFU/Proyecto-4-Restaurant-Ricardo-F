import { useState, useEffect } from "react";
import { db } from "../config/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { Card, Col, Row } from "react-bootstrap";
import "../css/estiloMenu.css";
import { FaUtensils } from "react-icons/fa6";
import Spinner from 'react-bootstrap/Spinner';
// import { Link } from "react-router-dom"; // Cambia NavLink a Link

const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMenu = async () => {
            try {
                const collectionRef = collection(db, "Menu");
                const response = await getDocs(collectionRef);

                const docs = response.docs.map((doc) => {
                    const data = doc.data();
                    return data;
                });

                setMenu(docs);
                setLoading(false);

            } catch (error) {
                console.log(error);
            }
        };
        getMenu();
    }, []);

    return (
        <section className="section-menu">
            <div>
                <h1 className="text-center text-white p-4">Menu <FaUtensils color="800080" /></h1>
            </div>
            {/* Menu Cards*/}
            <div className="container d-flex justify-content-center align-items-center mb-4">
                {loading ? (
                    <Spinner className="mt-5" animation="border" variant="light" /> //Si loading es verdadero, se carga el spinner, si es falso se muestra el contenido
                ) : (
                    <Row className="g-5 p-3 custom-row-menu">
                        {menu.map((plato) => (
                            <Col key={plato.id}>
                                <Card className="custom-card-menu text-center" style={{ maxWidth: '250px', minWidth: '17rem', borderRadius: "0" }}>
                                    <div className="overflow-card">
                                        <Card.Img className="card-image-t" variant="top" src={plato.imagen} alt={plato.nombre} style={{ height: '200px', borderRadius: "0" }} />
                                    </div>
                                    <Card.Body className="text-light">
                                        <Card.Title>{plato.nombre}</Card.Title>
                                        <Card.Text className="text-secondary" style={{ paddingTop: "10px", minHeight:"10.5rem"}}>{plato.detalles}</Card.Text>
                                        <p>Precio: ${plato.valor}</p>
                                        {/* <Button as={Link} to={`/menu/${plato.id}`} variant="primary">Ver Producto</Button> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </div>

            <div className="content-menu">
                <div className="image-container-menu">
                    <img src="../../public/levelup2.png" alt="LevelUp Menu" />
                </div>
            </div>
         
        </section>
    );
}

export default Menu;
