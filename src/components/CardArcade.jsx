import { Button, Card, Col, Row } from "react-bootstrap"
import { FaUtensils } from "react-icons/fa6";
import { useState, useEffect } from "react"
import { db } from "../config/Firebase";
import { collection, getDocs } from "firebase/firestore";
import "../css/estiloMenu.css"




const CardArcade = () => {

    const [menu, setMenu] = useState([]);



    useEffect(() => {
        const getMenu = async () => {
            try {
                const collectionRef = collection(db, "Menu");
                const response = await getDocs(collectionRef)

                const docs = response.docs.map((doc) => {
                    const data = doc.data()  //la informacion de cada documento que guarda firestore
                    return data
                })

                setMenu(docs)

            } catch (error) {
                console.log(error)
            }

        }
        getMenu();
    }, [])

    return (

        <div className="container" >
            <h1 className="text-center text-white p-4">Menu <FaUtensils color="800080" /> </h1>
            <Row xs={1} md={2} lg={4} className="g-5 custom-row-menu ">
                {menu.map((plato) => (
                    <Col key={plato.id}>
                        <Card className="custom-card-menu" style={{ maxWidth: '250px', minWidth: '17rem' }}>
                            <Card.Img variant="top" src={plato.imagen} alt={plato.nombre} style={{ height: '200px' }} />
                            <Card.Body className="text-light">
                                <Card.Title>{plato.nombre}</Card.Title>
                                <Card.Text className="text-secondary">{plato.detalles}</Card.Text>
                                <Button variant="primary">Precio: ${plato.valor}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div>
    )
}

export default CardArcade
