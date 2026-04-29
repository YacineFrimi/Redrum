import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import TopBar from './components/TopBar.jsx';
import Footer from './components/Footer.jsx';
import Splash from './components/Splash.jsx';
import Effects from './components/Effects.jsx';
import SvgFilter from './components/SvgFilter.jsx';
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';
import Events from './pages/Events.jsx';
import Gallery from './pages/Gallery.jsx';
import About from './pages/About.jsx';

export default function App() {
  const [splashed, setSplashed] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const t = setTimeout(() => setSplashed(true), 1400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <>
      <Splash hidden={splashed} />
      <SvgFilter />
      <TopBar />
      <Effects />
      <main data-screen-label={`Redrum · ${pathname}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
