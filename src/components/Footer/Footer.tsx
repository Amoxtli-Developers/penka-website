'use client';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  IconButton, 
  Link, 
  Divider,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Music,
  Calendar,
  GlassWater,
  Image,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const theme = useTheme();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, url: '#', name: 'Facebook' },
    { icon: <Instagram size={20} />, url: '#', name: 'Instagram' },
    { icon: <Twitter size={20} />, url: '#', name: 'Twitter' },
    { icon: <Youtube size={20} />, url: '#', name: 'YouTube' }
  ];

  const quickLinks = [
    { text: 'Inicio', icon: <Music size={16} />, url: '#hero' },
    { text: 'Bebidas', icon: <GlassWater size={16} />, url: '#menu' }, // Replaced with a valid icon
    { text: 'Eventos', icon: <Calendar size={16} />, url: '#events' },
    { text: 'Galería', icon: <Image size={16} />, url: '#gallery' },
    { text: 'Contacto', icon: <Mail size={16} />, url: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: `1px solid ${theme.palette.divider}`,
        mt: 'auto',
        backgroundImage: `linear-gradient(to top, rgba(18, 18, 18, 1), rgba(30, 30, 30, 0.9))`,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4} sx={{ py: 6 }}>
            {/* Logo y descripción */}
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    color: theme.palette.neonPink.main,
                    mb: 2,
                    textShadow: '0 0 5px rgba(255, 67, 164, 0.7)'
                  }}
                >
                  <Music size={28} style={{ marginRight: '10px' }} />
                  La Penka Del Haragan
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  El mejor bar rural con estilo pintoresco donde la música, las bebidas y la diversión se combinan para crear experiencias inolvidables.
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {socialLinks.map((link, index) => (
                    <IconButton 
                      key={index}
                      aria-label={link.name}
                      component="a"
                      href={link.url}
                      sx={{ 
                        color: 'white',
                        backgroundColor: theme.palette.neonPink.main + '20',
                        '&:hover': {
                          backgroundColor: theme.palette.neonPink.main,
                          color: 'black',
                          transform: 'translateY(-3px)',
                          boxShadow: `0 5px 15px ${theme.palette.neonPink.main}50`,
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {link.icon}
                    </IconButton>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Enlaces rápidos */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div variants={itemVariants}>
                <Typography 
                  variant="h6" 
                  color="white"
                  sx={{ 
                    mb: 2,
                    fontWeight: 'bold',
                    position: 'relative',
                    display: 'inline-block',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -5,
                      left: 0,
                      width: '40px',
                      height: '3px',
                      backgroundColor: theme.palette.neonGreen.main,
                      borderRadius: '2px'
                    }
                  }}
                >
                  Enlaces Rápidos
                </Typography>
                <List dense sx={{ p: 0 }}>
                  {quickLinks.map((link, index) => (
                    <ListItem 
                      key={index} 
                      sx={{ 
                        p: 0, 
                        mb: 1.5,
                        '&:hover': {
                          '& .MuiTypography-root': {
                            color: theme.palette.neonGreen.main,
                          },
                          '& .MuiListItemIcon-root': {
                            color: theme.palette.neonGreen.main,
                          }
                        }
                      }}
                      button
                      onClick={() => scrollToSection(link.url)}
                    >
                      <ListItemIcon sx={{ minWidth: 35, color: theme.palette.text.secondary }}>
                        {link.icon}
                      </ListItemIcon>
                      <ListItemText 
                        primary={link.text} 
                        primaryTypographyProps={{ 
                          variant: 'body2',
                          color: 'text.secondary',
                          sx: { transition: 'color 0.2s ease' }
                        }} 
                      />
                      <ChevronRight size={14} style={{ color: theme.palette.text.secondary }} />
                    </ListItem>
                  ))}
                </List>
              </motion.div>
            </Grid>

            {/* Información de contacto */}
            <Grid item xs={12} sm={6} md={5}>
              <motion.div variants={itemVariants}>
                <Typography 
                  variant="h6" 
                  color="white"
                  sx={{ 
                    mb: 2,
                    fontWeight: 'bold',
                    position: 'relative',
                    display: 'inline-block',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -5,
                      left: 0,
                      width: '40px',
                      height: '3px',
                      backgroundColor: theme.palette.neonPink.main,
                      borderRadius: '2px'
                    }
                  }}
                >
                  Información de Contacto
                </Typography>
                <List dense sx={{ p: 0 }}>
                  <ListItem sx={{ p: 0, mb: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 35, color: theme.palette.neonPink.main }}>
                      <MapPin size={18} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Camino a La Penka Km. 3.5, Col. El Haragan, CP 28944, Pueblo Pintoresco" 
                      primaryTypographyProps={{ 
                        variant: 'body2',
                        color: 'text.secondary'
                      }} 
                    />
                  </ListItem>
                  
                  <ListItem sx={{ p: 0, mb: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 35, color: theme.palette.neonPink.main }}>
                      <Phone size={18} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="+52 (123) 456-7890" 
                      primaryTypographyProps={{ 
                        variant: 'body2',
                        color: 'text.secondary'
                      }} 
                    />
                  </ListItem>
                  
                  <ListItem sx={{ p: 0, mb: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 35, color: theme.palette.neonPink.main }}>
                      <Mail size={18} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="info@lapenka.com" 
                      primaryTypographyProps={{ 
                        variant: 'body2',
                        color: 'text.secondary'
                      }} 
                    />
                  </ListItem>
                  
                  <ListItem sx={{ p: 0, mb: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 35, color: theme.palette.neonPink.main }}>
                      <Clock size={18} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Lun-Jue: 2PM-12AM | Vie-Sáb: 2PM-2AM | Dom: 2PM-10PM" 
                      primaryTypographyProps={{ 
                        variant: 'body2',
                        color: 'text.secondary'
                      }} 
                    />
                  </ListItem>
                </List>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        
        <Box
          sx={{
            py: 3,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} La Penka Del Haragan. Todos los derechos reservados.
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: { xs: 1, sm: 0 } }}>
            Diseñado con {' '}
            <Box component="span" sx={{ 
              color: theme.palette.neonPink.main,
              animation: 'pulse 1.5s infinite',
              '@keyframes pulse': {
                '0%': { opacity: 0.7 },
                '50%': { opacity: 1 },
                '100%': { opacity: 0.7 },
              },
            }}>♥</Box>
            {' '} en Pueblo Pintoresco
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
