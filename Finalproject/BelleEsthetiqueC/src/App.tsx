import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { Footer } from "./pages/Footer"
import { Benefits } from "./pages/Benefits"
import { Newsletter } from "./pages/Newsletter"
import "./App.css"

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
        <Benefits></Benefits>
        <Newsletter></Newsletter>
        <Footer></Footer>
    </ShoppingCartProvider>
  )
}

export default App
