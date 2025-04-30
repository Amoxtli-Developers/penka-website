'use client';
import { Box, Typography, Button, Container, useTheme } from '@mui/material';
import { ArrowDown as ArrowDownIcon, Music as MusicIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const theme = useTheme();

  const scrollToMenu = () => {
    const menuSection = document.querySelector('#menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(/hero-bg.jpg)', // Asegúrate de crear este archivo en la carpeta public
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(27, 38, 44, 0.7))`,
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 800,
                color: 'white',
                textAlign: 'center',
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                textShadow: '0 0 15px rgba(255, 67, 164, 0.7)',
                mb: 2
              }}
            >
              La Penka Del Haragan
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h5"
              sx={{
                color: 'white',
                textAlign: 'center',
                mb: 4,
                maxWidth: '800px',
                mx: 'auto',
                textShadow: '0 0 8px rgba(0, 0, 0, 0.5)',
              }}
            >
              El bar más pintoresco y divertido de la región, con la mejor música en vivo y bebidas artesanales
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants} style={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={scrollToMenu}
              startIcon={<MusicIcon />}
              sx={{
                mr: 2,
                mb: { xs: 2, sm: 0 },
                fontSize: '1.1rem',
                py: 1.5,
                px: 4,
                borderRadius: 2,
                textTransform: 'none',
                boxShadow: '0 0 15px rgba(255, 67, 164, 0.5)',
              }}
            >
              Ver Carta
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              href="#events"
              sx={{
                fontSize: '1.1rem',
                py: 1.5,
                px: 4,
                borderRadius: 2,
                textTransform: 'none',
                borderWidth: 2,
                color: theme.palette.neonGreen?.main || '#39FF14',
                borderColor: theme.palette.neonGreen?.main || '#39FF14',
                '&:hover': {
                  borderWidth: 2,
                  borderColor: theme.palette.neonGreen?.light || '#65FF49',
                  backgroundColor: 'rgba(57, 255, 20, 0.1)',
                },
                boxShadow: '0 0 15px rgba(57, 255, 20, 0.5)',
              }}
            >
              Próximos Eventos
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Flecha animada */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        <ArrowDownIcon
          size={36}
          color={theme.palette.neonPink?.main || '#FF43A4'}
          style={{ cursor: 'pointer' }}
          onClick={scrollToMenu}
        />
      </motion.div>
    </Box>
  );
};

export default Hero;
