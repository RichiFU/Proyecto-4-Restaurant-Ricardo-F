
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Pen, Trash } from "react-bootstrap-icons";

// Props
const TablaReserva = ({ clientes, deleteCliente, editCliente }) => {
    return (
        <Table striped bordered hover className='text-center' id='table'>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Teléfono</th>
                    <th>Fecha</th>
                    <th>Mesa</th>
                    <th>Editar/Borrar</th>
                </tr>
            </thead>
            <tbody>
                {clientes.map(cliente => (
                    <tr key={cliente.id}>
                        <td>{cliente.nombre}</td>
                        <td>{cliente.email}</td>
                        <td>{cliente.telefono}</td>
                        <td>{cliente.fecha}</td>
                        <td>{cliente.mesa}</td>
                        <td>
                            {/* Botón para editar, llamando a editCliente con el ID del cliente */}
                            <Button onClick={() => editCliente(cliente.id)} variant="outline-warning">
                                Editar <Pen />
                            </Button>{' '}
                            {/* Botón para borrar, solo se muestra si no estamos en modo de edición */}
                            {!cliente.isEditing && (
                                <Button onClick={() => deleteCliente(cliente.id)} variant="outline-danger">
                                    Borrar <Trash />
                                </Button>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default TablaReserva;
