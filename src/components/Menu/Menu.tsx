'use client';
import { useRef, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Card, 
  CardContent, 
  CardMedia, 
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  Beer as BeerIcon, 
  Coffee as CoffeeIcon, 
  Wine as WineIcon, 
  Martini as CocktailIcon 
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
// Import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

// Datos del menú de bebidas
const drinkItems = [
  {
    id: 1,
    name: 'Penka Lager',
    description: 'Nuestra cerveza artesanal estrella con notas de malta y un final refrescante',
    price: '$65',
    image: '/drinks/beer1.jpg',
    icon: <BeerIcon />
  },
  {
    id: 2,
    name: 'El Harapo Stout',
    description: 'Cerveza negra con sabores a café, chocolate y un toque de caramelo',
    price: '$75',
    image: '/drinks/beer2.jpg',
    icon: <BeerIcon />
  },
  {
    id: 3,
    name: 'Mezcal Campesino',
    description: 'Mezcal artesanal con notas ahumadas y un final herbal',
    price: '$95',
    image: '/drinks/mezcal.jpg',
    icon: <WineIcon />
  },
  {
    id: 4,
    name: 'Coctel Peña Colorada',
    description: 'Ron, jugo de piña, jarabe de jamaica y limón fresco',
    price: '$120',
    image: '/drinks/cocktail1.jpg',
    icon: <CocktailIcon />
  },
  {
    id: 5,
    name: 'Michelada del Haragan',
    description: 'Cerveza preparada con salsa picante casera, limón y chile en polvo',
    price: '$85',
    image: '/drinks/michelada.jpg',
    icon: <BeerIcon />
  },
  {
    id: 6,
    name: 'Café de Olla',
    description: 'Café tradicional con canela y piloncillo, perfecto para cualquier hora',
    price: '$45',
    image: '/drinks/coffee.jpg',
    icon: <CoffeeIcon />
  },
];

const Menu = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
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

  // Determinar el número de diapositivas por vista según el tamaño de la pantalla
  const slidesPerView = isMobile ? 1 : isTablet ? 2 : 3;

  return (
    <Box
      id="menu"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.default,
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(57, 255, 20, 0.05) 0%, rgba(18, 18, 18, 1) 70%)',
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
                color: theme.palette.neonPink?.main || '#FF43A4',
                textShadow: '0 0 10px rgba(255, 67, 164, 0.5)',
              }}
            >
              Nuestras Bebidas
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
              Disfruta de nuestras creaciones artesanales, preparadas con los mejores ingredientes y mucho cariño
            </Typography>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            style={{ overflow: 'hidden' }}
          >
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={slidesPerView}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{ clickable: true }}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              className="mySwiper"
              style={{ 
                padding: '30px 0 60px 0',
                width: '100%',
              }}
            >
              {drinkItems.map((drink) => (
                <SwiperSlide key={drink.id}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      mx: 'auto',
                      height: 400,
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `linear-gradient(to bottom, rgba(18, 18, 18, 0) 50%, rgba(18, 18, 18, 0.8) 80%, rgba(18, 18, 18, 0.9) 100%)`,
                        zIndex: 1,
                      },
                      '&:hover': {
                        '& .MuiCardMedia-root': {
                          transform: 'scale(1.05)',
                          transition: 'transform 0.3s ease-in-out',
                        },
                      },
                      boxShadow: `0 10px 20px rgba(${drink.id % 2 === 0 ? '57, 255, 20' : '255, 67, 164'}, 0.2)`,
                      border: `1px solid ${drink.id % 2 === 0 ? (theme.palette.neonGreen?.main || '#39FF14') : (theme.palette.neonPink?.main || '#FF43A4')}30`,
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="260"
                      image={drink.image}
                      alt={drink.name}
                      sx={{
                        transition: 'transform 0.3s ease-in-out',
                      }}
                    />
                    <CardContent
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        zIndex: 2,
                        padding: '20px',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          mb: 1,
                        }}
                      >
                        <Typography 
                          variant="h5" 
                          component="div"
                          sx={{
                            fontWeight: 600,
                            color: 'white',
                          }}
                        >
                          {drink.name}
                        </Typography>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            backgroundColor: drink.id % 2 === 0 ? (theme.palette.neonGreen?.main || '#39FF14') : (theme.palette.neonPink?.main || '#FF43A4'),
                            color: '#000',
                          }}
                        >
                          {drink.icon}
                        </Box>
                      </Box>
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{
                          mb: 1,
                          color: theme.palette.text.secondary,
                        }}
                      >
                        {drink.description}
                      </Typography>
                      <Typography 
                        variant="h6" 
                        sx={{
                          fontWeight: 700,
                          color: drink.id % 2 === 0 ? (theme.palette.neonGreen?.main || '#39FF14') : (theme.palette.neonPink?.main || '#FF43A4'),
                        }}
                      >
                        {drink.price}
                      </Typography>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Menu;
