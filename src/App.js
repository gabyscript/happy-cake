import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import Home from './Views/Home/Home';
import Contacto from './Views/Contacto/Contacto';
import Productos from './Views/Productos/Productos';
import NotFound from './Views/NotFound/NotFound';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    
  );
}

export default App;
