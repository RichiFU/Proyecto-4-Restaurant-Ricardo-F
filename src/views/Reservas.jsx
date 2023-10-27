import { useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../config/Firebase";
import InputReserva from '../components/InputReserva';
import { FaWpforms } from "react-icons/fa6";
import "../css/estiloReservas.css"

const Reservas = () => {
    const clientesCollectionRef = collection(db, 'Reservas');
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fecha, setFecha] = useState('');
    const [mesa, setMesa] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            await createCliente();
            clearForm();
            alert("Reserva Realizada") 
        }
    };

    const createCliente = async () => {
        if (validateForm()) {
            await addDoc(clientesCollectionRef, { nombre, email, telefono, fecha, mesa });
        }
    };

    const clearForm = () => {
        setNombre('');
        setEmail('');
        setTelefono('');
        setFecha('');
        setMesa('');
    };

    function getDate(){
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}-${date}-${year}`
    }

    function validateForm() {
        if (email == "") {
            alert('El correo es requerido');
            return false;
        } else if (!email.includes("@")) {
            alert('El correo no es valido (falta @)');
            return false;
        } else if (nombre == "") {
            alert('El nombre es requerido');
            return false;
        } else if (telefono == "") {
            alert('El telefono es requerido');
            return false;
        } else if (fecha == "") {
            alert('La fecha es requerida');
            return false;
        } else if (mesa == "") {
            alert('La mesa es requerida');
            return false;
        }
        // Si pasa todas las validaciones, devuelve true
        return true;

    }

    return (

        <section>

            <div className="custom-b-reserva">
                <div className="p-5 mb-3 text-center">
                    <h1>
                        <FaWpforms size="3.5rem" color="#800080" /> Reservas
                    </h1>
                </div>
                <div className="container">
                    <form onSubmit={handleFormSubmit}>
                        <InputReserva
                            nombre={nombre}
                            setNombre={setNombre}
                            email={email}
                            setEmail={setEmail}
                            telefono={telefono}
                            setTelefono={setTelefono}
                            fecha={fecha}
                            setFecha={setFecha}
                            mesa={mesa}
                            setMesa={setMesa}
                            getDate={getDate}
                        />
                        <div className='p-4'>

                            <Button type="submit" className="mt-3 custom-reserva-button d-block mx-auto">
                                Enviar
                            </Button>
                        </div>
                    </form>
                    <div className="d-flex justify-content-center custom-reserva-image">
                        <div>
                            <Image
                                src="../../public/mario-jump.png"
                                alt="Mario Jump"
                                fluid
                                className="mario-image-reserva"
                                style={{ maxWidth: "80px", height: "auto" }}
                            />
                        </div>
                    </div>
                </div>

            </div>


        </section>

    );
};

export default Reservas;
