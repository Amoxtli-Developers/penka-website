'use client';
import { useRef } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  useTheme,
  ImageList,
  ImageListItem,
  useMediaQuery,
  Button,
  Modal,
  IconButton
} from '@mui/material';
import { Image, X } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// Datos de imágenes
const galleryItems = [
  {
    id: 1,
    title: 'Noche de música en vivo',
    img: '/gallery/gallery1.jpg',
    featured: true,
    rows: 2,
    cols: 2
  },
  {
    id: 2,
    title: 'Barman en acción',
    img: '/gallery/gallery2.jpg',
  },
  {
    id: 3,
    title: 'Ambiente nocturno',
    img: '/gallery/gallery3.jpg',
  },
  {
    id: 4,
    title: 'Terraza al atardecer',
    img: '/gallery/gallery4.jpg',
    cols: 2
  },
  {
    id: 5,
    title: 'Platillos típicos',
    img: '/gallery/gallery5.jpg',
    cols: 2
  },
  {
    id: 6,
    title: 'Celebración de cumpleaños',
    img: '/gallery/gallery6.jpg',
  },
  {
    id: 7,
    title: 'Área de mesas',
    img: '/gallery/gallery7.jpg',
  },
  {
    id: 8,
    title: 'Evento especial',
    img: '/gallery/gallery8.jpg',
  },
  {
    id: 9,
    title: 'Festival de cerveza',
    img: '/gallery/gallery9.jpg',
    rows: 2,
    cols: 2,
    featured: true
  },
];

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Gallery = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  
  const handleOpen = (img: string) => {
    setSelectedImg(img);
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  // Determinar el número de columnas según el tamaño de la pantalla
  const getCols = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <Box
      id="gallery"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.default,
        backgroundImage: 'radial-gradient(circle at 90% 50%, rgba(57, 255, 20, 0.05) 0%, rgba(18, 18, 18, 1) 70%)',
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
                color: theme.palette.neonPink.main,
                textShadow: '0 0 10px rgba(255, 67, 164, 0.5)',
              }}
            >
              Nuestra Galería
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
              Momentos inolvidables en La Penka Del Haragan. ¡Ven a crear tus propios recuerdos!
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <ImageList
              sx={{
                width: '100%',
                height: 'auto',
                overflow: 'hidden',
                borderRadius: 2,
                '& .MuiImageListItem-root': {
                  overflow: 'hidden',
                  borderRadius: 2,
                },
              }}
              variant="quilted"
              cols={getCols()}
              rowHeight={isMobile ? 200 : 250}
              gap={16}
            >
              {galleryItems.map((item) => (
                <ImageListItem 
                  key={item.id} 
                  cols={isMobile ? 1 : (item.cols || 1)} 
                  rows={isMobile ? 1 : (item.rows || 1)}
                  sx={{ cursor: 'pointer' }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                    onClick={() => handleOpen(item.img)}
                  >
                    <img
                      {...srcset(item.img, isMobile ? 200 : 250, item.rows || 1, item.cols || 1)}
                      alt={item.title}
                      loading="lazy"
                      style={{
                        borderRadius: 8,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        bgcolor: 'rgba(0, 0, 0, 0.6)',
                        color: 'white',
                        padding: '10px',
                        backdropFilter: 'blur(5px)',
                        borderBottomLeftRadius: 8,
                        borderBottomRightRadius: 8,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Typography variant="subtitle1">{item.title}</Typography>
                      <Image size={18} />
                    </Box>
                  </motion.div>
                </ImageListItem>
              ))}
            </ImageList>
          </motion.div>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <motion.div variants={itemVariants}>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<Image />}
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderWidth: 2,
                  borderColor: theme.palette.neonGreen.main,
                  color: theme.palette.neonGreen.main,
                  '&:hover': {
                    borderWidth: 2,
                    backgroundColor: 'rgba(57, 255, 20, 0.1)',
                  }
                }}
              >
                Ver Más Fotos
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>

      {/* Modal para vista ampliada */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="image-modal"
        aria-describedby="modal-to-show-full-size-image"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'relative',
                maxWidth: '90vw',
                maxHeight: '90vh',
                backgroundColor: theme.palette.background.paper,
                borderRadius: 16,
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                border: `2px solid ${theme.palette.neonPink.main}`,
              }}
            >
              <IconButton
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: 'white',
                  zIndex: 1,
                  '&:hover': {
                    backgroundColor: theme.palette.neonPink.main,
                    color: 'black',
                  }
                }}
              >
                <X size={24} />
              </IconButton>
              <img
                src={selectedImg || ''}
                alt="Imagen ampliada"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  maxHeight: '90vh',
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </Box>
  );
};

export default Gallery;
