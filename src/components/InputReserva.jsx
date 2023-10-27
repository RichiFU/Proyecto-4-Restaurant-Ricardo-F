
import { Container, Form } from "react-bootstrap";


const InputReserva = ({ nombre, setNombre, email, setEmail, telefono, setTelefono, fecha, setFecha, mesa, setMesa, getDate }) => {
    return (
        <Container className="mx-auto" style={{ maxWidth: "700px" }}>
            <Form>
                <Form.Group controlId="nombre" className="mb-4 mt-5">
                    <Form.Label className="custom-label-form">Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingresa tu nombre"
                        className="custom-input-form"
                        required
                        value={nombre}
                        onChange={(event) => setNombre(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="email" className="mb-4">
                    <Form.Label className="custom-label-form">Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Ingresa tu email"
                        className="custom-input-form"

                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="telefono" className="mb-4">
                    <Form.Label className="custom-label-form">Teléfono</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="569 xxxxxxxx"
                        className="custom-input-form"

                        value={telefono}
                        onChange={(event) => setTelefono(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="fecha" className="mb-4">
                    <Form.Label className="custom-label-form">Fecha</Form.Label>
                    <Form.Control
                        type="date"
                        className="custom-input-form"
                        min="26-10-2023"
                        value={fecha}
                        onChange={(event) => setFecha(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="mesa" className="mb-4">
                    <Form.Label className="custom-label-form">Mesa</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Ingresa tu mesa"
                        className="custom-input-form"

                        value={mesa}
                        onChange={(event) => setMesa(event.target.value)}
                    />
                </Form.Group>
            </Form>
        </Container>
    );
};

export default InputReserva;
