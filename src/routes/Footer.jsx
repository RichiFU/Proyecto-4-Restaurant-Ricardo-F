import "../css/estiloFooter.css"
import { FaFacebook, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";



const Footer = () => {

    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
            <footer className="bg-dark text-white pt-5 pb-4 custom-footer">

                <div className="container text-center">

                    <div className="row text-center ">

                        <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="text-uppercasse mb-4 font-weight-bold text-primary">Links</h5>
                            <hr className="mb-4" />
                            <ul className="list-unstyled text-md-start">
                                <li className="mb-3 ">
                                    <a href="#" className="text-light" >Menu</a>
                                </li>
                                <li className="mb-3">
                                    <a href="#" className="text-light">Sobre Nosotros</a>
                                </li>
                                <li className="mb-3">
                                    <a href="#" className="text-light">Reservas</a>
                                </li >
                                <li className="mb-3">
                                    <a href="#," className="text-light">Contacto</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="text-uppercasse mb-4 font-weight-bold text-primary">Contáctanos</h5>
                            <hr className="mb-4" />
                            <ul className="list-unstyled text-md-start">
                                <li className="mb-3">
                                    <p><i className="fas fa-map-marker-alt me-2"></i> #001, Calle React, Temuco</p>
                                </li>
                                <li className="mb-3">
                                    <p><i className="fas fa-envelope me-2"></i> Micorreo@gmail.com</p>
                                </li>
                                <li className="mb-3">
                                    <p><i className="fas fa-phone me-2"></i> 100 200 3000</p>
                                </li>
                                <li className="mb-3">
                                    <p><i className="fab fa-whatsapp me-2" ></i> +56 11223344 </p>
                                </li >
                            </ul>
                        </div>

                        <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="text-uppercasse mb-4 font-weight-bold text-primary">Síguenos</h5>
                            <hr className="mb-4" />
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <a href="#" className="text-light text-decoration-none" ><FaFacebook size={"25"} color="#fff" /></a>
                                </li>
                                <li className="mb-3">
                                    <a href="#" className="text-light"><FaXTwitter size={"25"} color="#fff" /></a>
                                </li>
                                <li className="mb-3">
                                    <a href="#" className="text-light"><FaInstagram size={"25"} color="#fff" /></a>
                                </li >
                                <li className="mb-3">
                                    <a href="#" className="text-light"><FaYoutube size={"25px"} color="#fff" /></a>
                                </li>
                            </ul>
                        </div>

                        <hr className="mb-4 mt-4" />

                        <div className="text-center mb-1 mt-2">
                            <p>
                                &copy; 2023 Ricardo Fuentes: Todos los Derechos Reservados.
                            </p>
                        </div>

                    </div>

                </div>
                
            </footer>
        </>
    )
}

export default Footer