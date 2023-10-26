import Navigate from "../../routes/Navigate"
import { Outlet } from "react-router-dom"
import Footer from "../../routes/Footer"

const Layout = () => {
  return (
    <div>
        <Navigate />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout