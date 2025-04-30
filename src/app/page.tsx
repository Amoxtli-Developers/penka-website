'use client';
import { Box } from '@mui/material';

// Importación de componentes
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Menu from '@/components/Menu/Menu';
import Events from '@/components/Events/Events';
import Gallery from '@/components/Gallery/Gallery';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Box component="main">
        <Hero />
        <Menu />
        <Events />
        <Gallery />
        <Contact />
      </Box>
      <Footer />
    </>
  );
}
