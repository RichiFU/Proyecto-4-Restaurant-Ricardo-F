import { useState } from "react";
import { db } from "../config/Firebase";
import { collection, addDoc } from "firebase/firestore";
import { Form, Button, Container, Image } from "react-bootstrap";
import { FaWpforms } from "react-icons/fa6";
import "../css/estiloContacto.css";


const Contacto = () => {
    const valorInicial = {
        nombre: "",
        email: "",
        telefono: "",
        asunto: "",
        mensaje: "",
    };

    const [cliente, setCliente] = useState(valorInicial);

    const capturarInputs = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setCliente({
            ...cliente,
            [name]: value,
        });
    };

    const enviar = async (e) => {
        e.preventDefault();
        agregarMensaje();
    };

    const agregarMensaje = async () => {
        try {
            const collectionRef = collection(db, "Mensajes");
            await addDoc(collectionRef, { ...cliente });
            setCliente({ ...valorInicial });
            alert("Mensaje enviado exitosamente");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section>
            <div className="custom-b-contact">
                <div className="p-5 mb-3 text-center">
                    <h1>
                        <FaWpforms size="3.5rem" color="#800080" /> Formulario de Contacto
                    </h1>
                </div>

                <Container className="mx-auto" style={{ maxWidth: "700px" }}>
                    <Form onSubmit={enviar}>
                        <Form.Group controlId="nombre" className="mb-4 mt-5">
                            <Form.Label className="custom-label-form">Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                name="nombre"
                                placeholder="Ingresa tu nombre"
                                className="custom-input-form"
                                required
                                value={cliente.nombre}
                                onChange={capturarInputs}
                            />
                        </Form.Group>

                        <Form.Group controlId="email" className="mb-4">
                            <Form.Label className="custom-label-form">Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Ingresa tu email"
                                className="custom-input-form"
                                required
                                value={cliente.email}
                                onChange={capturarInputs}
                            />
                        </Form.Group>

                        <Form.Group controlId="telefono" className="mb-4">
                            <Form.Label className="custom-label-form">Teléfono</Form.Label>
                            <Form.Control
                                type="number"
                                name="telefono"
                                placeholder="569 xxxxxxxx"
                                className="custom-input-form"
                                required
                                value={cliente.telefono}
                                onChange={capturarInputs}
                            />
                        </Form.Group>

                        <Form.Group controlId="asunto" className="mb-4">
                            <Form.Label className="custom-label-form">Asunto</Form.Label>
                            <Form.Control
                                type="text"
                                name="asunto"
                                placeholder="Ingresa el asunto"
                                className="custom-input-form"
                                required
                                value={cliente.asunto}
                                onChange={capturarInputs}
                            />
                        </Form.Group>

                        <Form.Group controlId="mensaje" className="mb-5">
                            <Form.Label className="custom-label-form">Mensaje</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                name="mensaje"
                                placeholder="Ingresa tu mensaje"
                                className="custom-input-form"
                                required
                                value={cliente.mensaje}
                                onChange={capturarInputs}
                            />
                        </Form.Group>

                        <Button type="submit" className="mt-4 mb-2 custom-input-button d-block mx-auto">
                            Enviar
                        </Button>
                    </Form>
                    <div className="d-flex justify-content-center custom-contact-image p-4">
                        <div>
                            <Image
                                src="../../public/mario-tube.png"
                                alt="Tubo Mario"
                                fluid
                                className="mario-image"
                                style={{ maxWidth: "200px", height: "auto" }}
                            />
                        </div>
                    </div>
                </Container>

            </div>


        </section>
    );
};

export default Contacto;