'use client';
import { useRef } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button,
  useTheme,
  Chip,
  Avatar
} from '@mui/material';
import { 
  Calendar as CalendarIcon, 
  Music as MusicIcon, 
  Mic as MicIcon, 
  Users as UsersIcon, 
  MapPin as MapPinIcon, 
  Clock as ClockIcon 
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';

// Datos de eventos
const eventItems = [
  {
    id: 1,
    title: 'Noche de Rock Rural',
    description: 'Los mejores covers de rock nacional con un toque campesino único. ¡No te lo pierdas!',
    date: '10 de Mayo',
    time: '21:00 hrs',
    location: 'Escenario principal',
    image: '/events/rock-rural.jpg',
    category: 'Música en vivo',
    icon: <MusicIcon />
  },
  {
    id: 2,
    title: 'Festival de la Cerveza Artesanal',
    description: 'Degustación de más de 15 tipos de cervezas artesanales de la región. Incluye botana.',
    date: '17 de Mayo',
    time: '18:00 hrs',
    location: 'Patio trasero',
    image: '/events/beer-fest.jpg',
    category: 'Festival',
    icon: <UsersIcon />
  },
  {
    id: 3,
    title: 'Noche de Micrófono Abierto',
    description: 'Ven a mostrar tu talento en nuestra noche de micrófono abierto. Inscripciones desde las 19:00.',
    date: '24 de Mayo',
    time: '20:00 hrs',
    location: 'Escenario principal',
    image: '/events/open-mic.jpg',
    category: 'Participativo',
    icon: <MicIcon />
  }
];

const Events = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { 
        delay: i * 0.1,
        duration: 0.6, 
        ease: "easeOut"
      }
    }),
    hover: {
      y: -15,
      boxShadow: '0 20px 30px rgba(255, 67, 164, 0.3)',
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <Box
      id="events"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.paper,
        backgroundImage: 'radial-gradient(circle at 10% 90%, rgba(255, 67, 164, 0.05) 0%, rgba(30, 30, 30, 1) 70%)',
      }}
      ref={ref}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              component="h2"
              align="center"
              sx={{
                mb: 1,
                fontWeight: 700,
                color: theme.palette.neonGreen?.main || '#39FF14',
                textShadow: '0 0 10px rgba(57, 255, 20, 0.5)',
              }}
            >
              Próximos Eventos
            </Typography>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Typography
              variant="h6"
              align="center"
              sx={{
                mb: 6,
                maxWidth: '700px',
                mx: 'auto',
                color: theme.palette.text.secondary,
              }}
            >
              La diversión nunca para en La Penka Del Haragan. Conoce nuestros próximos eventos y reserva tu lugar.
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {eventItems.map((event, index) => (
              <Grid item xs={12} md={4} key={event.id}>
                <motion.div
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover="hover"
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      overflow: 'hidden',
                      backgroundColor: theme.palette.background.paper,
                      border: `1px solid ${theme.palette.neonGreen?.main || '#39FF14'}30`,
                      boxShadow: `0 10px 20px rgba(57, 255, 20, 0.15)`,
                    }}
                  >
                    <Box sx={{ position: 'relative', overflow: 'hidden', pt: '56.25%' }}>
                      <CardMedia
                        component="img"
                        image={event.image}
                        alt={event.title}
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          transition: 'transform 0.5s ease',
                          '&:hover': {
                            transform: 'scale(1.05)',
                          },
                        }}
                      />
                      <Chip
                        avatar={<Avatar>{event.icon}</Avatar>}
                        label={event.category}
                        color="primary"
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          backgroundColor: theme.palette.neonPink?.main || '#FF43A4',
                          fontWeight: 'bold',
                          color: 'black',
                        }}
                      />
                    </Box>
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          color: 'white',
                          mb: 2,
                        }}
                      >
                        {event.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{
                          mb: 3,
                        }}
                      >
                        {event.description}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CalendarIcon size={18} color={theme.palette.neonGreen?.main || '#39FF14'} style={{ marginRight: '8px' }} />
                        <Typography variant="body2" color="text.secondary">
                          <span style={{ color: theme.palette.neonGreen?.main || '#39FF14', fontWeight: 'bold' }}>Fecha:</span> {event.date}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <ClockIcon size={18} color={theme.palette.neonGreen?.main || '#39FF14'} style={{ marginRight: '8px' }} />
                        <Typography variant="body2" color="text.secondary">
                          <span style={{ color: theme.palette.neonGreen?.main || '#39FF14', fontWeight: 'bold' }}>Hora:</span> {event.time}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <MapPinIcon size={18} color={theme.palette.neonGreen?.main || '#39FF14'} style={{ marginRight: '8px' }} />
                        <Typography variant="body2" color="text.secondary">
                          <span style={{ color: theme.palette.neonGreen?.main || '#39FF14', fontWeight: 'bold' }}>Lugar:</span> {event.location}
                        </Typography>
                      </Box>
                      
                      <Button 
                        variant="contained"
                        color="secondary"
                        fullWidth
                        sx={{
                          mt: 'auto',
                          py: 1.2,
                          backgroundColor: theme.palette.neonGreen?.main || '#39FF14',
                          color: 'black',
                          fontWeight: 'bold',
                          '&:hover': {
                            backgroundColor: theme.palette.neonGreen?.dark || '#27CC09',
                          }
                        }}
                      >
                        Reservar Lugar
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <motion.div variants={itemVariants}>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<CalendarIcon />}
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderWidth: 2,
                  borderColor: theme.palette.neonPink?.main || '#FF43A4',
                  color: theme.palette.neonPink?.main || '#FF43A4',
                  '&:hover': {
                    borderWidth: 2,
                    backgroundColor: 'rgba(255, 67, 164, 0.1)',
                  }
                }}
              >
                Ver Calendario Completo
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Events;
