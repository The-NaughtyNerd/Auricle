import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Service from './pages/Service/Service';
import Screenshots from './pages/Screenshots/Screenshots';
import Pricing from './pages/Pricing/Pricing';
import Team from './pages/Team/Team';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="">
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/screenshots" element={<Screenshots />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
