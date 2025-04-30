'use client';
import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Box, 
  Container, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  X as CloseIcon, 
  Music as MusicIcon, 
  Beer as DrinkIcon, 
  Calendar as CalendarIcon, 
  Image as ImageIcon, 
  Phone as PhoneIcon 
} from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { name: 'Inicio', icon: <MusicIcon size={18} />, href: '#hero' },
    { name: 'Bebidas', icon: <DrinkIcon size={18} />, href: '#menu' },
    { name: 'Eventos', icon: <CalendarIcon size={18} />, href: '#events' },
    { name: 'Galería', icon: <ImageIcon size={18} />, href: '#gallery' },
    { name: 'Contacto', icon: <PhoneIcon size={18} />, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobile) {
      setIsDrawerOpen(false);
    }
  };

  const MotionContainer = motion(Container);

  return (
    <AppBar 
      position="fixed" 
      sx={{
        backgroundColor: isScrolled ? 'rgba(18, 18, 18, 0.9)' : 'transparent',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <MotionContainer 
        maxWidth="xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            component="div"
            sx={{ 
              flexGrow: 1, 
              fontWeight: 'bold',
              color: theme.palette.neonPink?.main || '#FF43A4',
              display: 'flex',
              alignItems: 'center',
              textShadow: '0 0 5px rgba(255, 67, 164, 0.7)'
            }}
          >
            <MusicIcon size={24} style={{ marginRight: '8px' }} />
            La Penka Del Haragan
          </Typography>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Button 
                  key={item.name}
                  color="inherit"
                  startIcon={item.icon}
                  onClick={() => scrollToSection(item.href)}
                  sx={{ 
                    color: 'white',
                    '&:hover': {
                      color: theme.palette.neonPink?.main || '#FF43A4',
                    }
                  }}
                >
                  {item.name}
                </Button>
              ))}
              <Button 
                variant="contained" 
                color="primary"
                onClick={() => scrollToSection('#contact')}
                sx={{ 
                  ml: 2,
                  px: 3,
                }}
              >
                Reservar
              </Button>
            </Box>
          )}
          
          {/* Mobile Navigation */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ 
                color: theme.palette.neonPink?.main || '#FF43A4',
              }}
            >
              {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
        </Toolbar>
      </MotionContainer>
      
      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isDrawerOpen && isMobile}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: '75%',
            maxWidth: '300px',
            backgroundColor: theme.palette.background.default,
            borderLeft: `2px solid ${theme.palette.neonPink?.main || '#FF43A4'}`,
            boxShadow: '-5px 0 15px rgba(255, 67, 164, 0.2)',
          }
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem 
              key={item.name} 
              onClick={() => scrollToSection(item.href)}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'rgba(255, 67, 164, 0.1)',
                }
              }}
            >
              <Box sx={{ mr: 2, color: theme.palette.neonPink?.main || '#FF43A4' }}>
                {item.icon}
              </Box>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
        <Box sx={{ p: 2 }}>
          <Button 
            variant="contained" 
            color="primary"
            fullWidth
            onClick={() => scrollToSection('#contact')}
          >
            Reservar
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
