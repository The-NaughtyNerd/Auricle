import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Service from './pages/Service/Service';
import Blog from './pages/Blog/Blog';
import Pricing from './pages/Pricing/Pricing';
import Team from './pages/Team/Team';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContextProvider } from './Contexts/Context';
import { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      <ContextProvider>
        {loading ? (
          <div className="flex w-full h-screen items-center justify-center overflow-hidden">
            <PulseLoader
              color={'#1e72bc'}
              loading={loading}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <div>
            <ToastContainer />
            <ScrollToTop />
            <Header />

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Service />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>

            <Footer />
          </div>
        )}
      </ContextProvider>
    </>
  );
}

export default App;
