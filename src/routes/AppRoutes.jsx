import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../views/Home";
import Menu from "../views/Menu";
import About from "../views/About";
import Admin from "../views/Admin";
import Contacto from "../views/Contacto";
import Reservas from "../views/Reservas";
import NotFoundPage from "../views/NotFoundPage";




const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* Ruta Admin, Se puede comentar para ocultarla transitoriamente */}
          <Route path="/admin" element={<Admin />} /> 
          <Route path="*" element={<NotFoundPage/>} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutes