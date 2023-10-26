import { Image, Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {


    const volverA = useNavigate()

    const manejoBoton = () => {
        // dentro del parentesis puedo escribir la ruta a la que quiero ir
        volverA("/")
    }

    return (
        <section>

            <div className=" container d-flex flex-column align-items-center justify-content-center h-100 pt-5 ">
                <div className="text-center">
                    <Image
                        src="../../public/Error-404.png"
                        alt="Error 404"
                        fluid
                        className="error404"
                        style={{ width: "800px", height: "auto" }}
                    />
                </div>
            </div>

            <div className="p-4 text-center mb-5">
                <Button onClick={manejoBoton} type="submit" className=" fs-3 px-5 " variant="outline-dark">
                    Volver
                </Button>
            </div>

        </section>
    );
};

export default NotFoundPage;