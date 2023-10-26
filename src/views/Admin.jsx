import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from "../config/Firebase";
import InputReserva from '../components/InputReserva';
import TablaReserva from '../components/TablaReserva';
import { FileExcel, FiletypePdf, FileEarmarkWord } from 'react-bootstrap-icons';

const Reservas = () => {
    const clientesCollectionRef = collection(db, 'Reservas');
    const [clientes, setClientes] = useState([]);
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fecha, setFecha] = useState('');
    const [mesa, setMesa] = useState('');
    const [editingId, setEditingId] = useState(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (editingId) {
            await updateCliente(editingId);
        } else {
            await createCliente();
        }
        clearForm();
        getClientes();
    };

    const updateCliente = async (id) => {
        const cliente = await getDoc(doc(db, 'Reservas', id));
        const data = { nombre, email, telefono, fecha, mesa };
        await updateDoc(cliente.ref, data);
        clearForm();
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
        setEditingId(null);
    };

    const deleteCliente = async (id) => {
        const clienteDoc = doc(db, 'Reservas', id);
        await deleteDoc(clienteDoc);
        getClientes();
    };

    function validateForm() {
        if (!nombre || !email || !telefono || !fecha || !mesa) {
            alert('Todos los campos son requeridos');
            return false;
        }
        return true;
    }

    const editCliente = async (id) => {
        const cliente = await getDoc(doc(db, 'Reservas', id));
        if (cliente.exists()) {
            setNombre(cliente.data().nombre);
            setEmail(cliente.data().email);
            setTelefono(cliente.data().telefono);
            setFecha(cliente.data().fecha);
            setMesa(cliente.data().mesa);
            setEditingId(id);
            setClientes((prevClientes) =>
                prevClientes.map((prevCliente) => ({
                    ...prevCliente,
                    isEditing: prevCliente.id === id,
                }))
            );
        }
    };

    const getClientes = async () => {
        const data = await getDocs(clientesCollectionRef);
        setClientes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    useEffect(() => {
        getClientes();
    }, []);

    return (
        <section>
            <div>
            <h1 className="text-center mt-5">
                    Admin Panel
                </h1>
                <h2 className="text-center">
                    Reservas
                </h2>
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
                    />
                    <div className="d-flex justify-content-center p-4">
                        <Button type="submit" variant="outline-success " className="aling-item-center px-5 py-2 border-2 ">
                            {editingId ? 'Actualizar' : 'Agregar'}
                        </Button>
                    </div>
                </form>
            </div>
            <div className="container">
                <div className="row justify-content-md-auto">
                    <div className="col">
                        <Button className="btn" variant="outline-success">
                            <FileExcel size={30} />
                        </Button>{' '}
                        <Button className="btn" variant="outline-danger">
                            <FiletypePdf size={30} />
                        </Button>{' '}
                        <Button className="btn" variant="outline-primary">
                            <FileEarmarkWord size={30} />
                        </Button>
                    </div>
                </div>

                <div className='mb-5 pb-5'>
                    <br />
                    <TablaReserva clientes={clientes} deleteCliente={deleteCliente} editCliente={editCliente} />
                </div>
            </div>
        </section>
    );
};

export default Reservas;
