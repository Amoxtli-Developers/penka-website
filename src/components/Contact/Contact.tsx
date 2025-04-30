'use client';
import { useRef, useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  TextField,
  Button,
  Paper,
  useTheme,
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Alert,
  Snackbar,
  CircularProgress
} from '@mui/material';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Clock, 
  Users, 
  MessageCircle 
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '2',
  message: '',
};

const Contact = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [snackbar, setSnackbar] = useState({open: false, message: '', severity: 'success'});
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar el error para este campo
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    // Validación de nombre
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    // Validación de email
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    // Validación de teléfono
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Teléfono inválido (10 dígitos)';
    }
    
    // Validación de fecha
    if (!formData.date.trim()) {
      newErrors.date = 'La fecha es requerida';
    }
    
    // Validación de hora
    if (!formData.time.trim()) {
      newErrors.time = 'La hora es requerida';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setLoading(true);
      
      // Simulación de envío (reemplazar con lógica real)
      setTimeout(() => {
        setLoading(false);
        setSnackbar({
          open: true,
          message: '¡Reserva enviada con éxito! Te contactaremos pronto.',
          severity: 'success'
        });
        setFormData(initialFormData);
      }, 1500);
    }
  };
  
  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };
  
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
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.paper,
        backgroundImage: 'radial-gradient(circle at 0% 0%, rgba(255, 67, 164, 0.05) 0%, rgba(30, 30, 30, 1) 70%)',
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
                color: theme.palette.neonGreen.main,
                textShadow: '0 0 10px rgba(57, 255, 20, 0.5)',
              }}
            >
              Contáctanos
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
              Reserva tu mesa o pregúntanos cualquier duda. ¡Estamos ansiosos por recibirte!
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {/* Información de contacto */}
            <Grid item xs={12} md={5}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={6}
                  sx={{
                    p: 4,
                    height: '100%',
                    backgroundImage: `linear-gradient(120deg, ${theme.palette.neonPink.darker}40, ${theme.palette.background.paper})`,
                    borderRadius: 2,
                    border: `1px solid ${theme.palette.neonPink.main}30`,
                    boxShadow: `0 10px 30px rgba(255, 67, 164, 0.15)`,
                  }}
                >
                  <Typography 
                    variant="h4" 
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.neonPink.main,
                      mb: 3,
                    }}
                  >
                    Información
                  </Typography>
                  
                  <Box sx={{ mb: 4 }}>
                    <Box sx={{ display: 'flex', mb: 3 }}>
                      <MapPin size={24} color={theme.palette.neonPink.main} style={{ marginRight: '16px', flexShrink: 0 }} />
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: 'white', mb: 0.5 }}>
                          Ubicación
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Camino a La Penka Km. 3.5<br />
                          Col. El Haragan, CP 28944<br />
                          Pueblo Pintoresco
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', mb: 3 }}>
                      <Clock size={24} color={theme.palette.neonPink.main} style={{ marginRight: '16px', flexShrink: 0 }} />
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: 'white', mb: 0.5 }}>
                          Horario
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lunes a Jueves: 2:00 PM - 12:00 AM<br />
                          Viernes y Sábado: 2:00 PM - 2:00 AM<br />
                          Domingo: 2:00 PM - 10:00 PM
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', mb: 3 }}>
                      <Phone size={24} color={theme.palette.neonPink.main} style={{ marginRight: '16px', flexShrink: 0 }} />
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: 'white', mb: 0.5 }}>
                          Teléfono
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          +52 (123) 456-7890<br />
                          +52 (123) 456-7891
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex' }}>
                      <Mail size={24} color={theme.palette.neonPink.main} style={{ marginRight: '16px', flexShrink: 0 }} />
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: 'white', mb: 0.5 }}>
                          Email
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          reservas@lapenka.com<br />
                          info@lapenka.com
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  
                  {/* Mapa embebido (placeholder) */}
                  <Box
                    sx={{
                      width: '100%',
                      height: 150,
                      backgroundColor: 'rgba(0, 0, 0, 0.2)',
                      borderRadius: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px dashed rgba(255, 255, 255, 0.3)',
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      [Mapa Interactivo]
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
            
            {/* Formulario de contacto */}
            <Grid item xs={12} md={7}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={6}
                  sx={{
                    p: 4,
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: 2,
                    border: `1px solid ${theme.palette.neonGreen.main}30`,
                    boxShadow: `0 10px 30px rgba(57, 255, 20, 0.15)`,
                  }}
                >
                  <Typography 
                    variant="h4" 
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.neonGreen.main,
                      mb: 3,
                    }}
                  >
                    Reserva tu mesa
                  </Typography>
                  
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Nombre completo"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          error={!!errors.name}
                          helperText={errors.name}
                          required
                          InputProps={{
                            startAdornment: <Users size={18} style={{ marginRight: '8px', color: theme.palette.text.secondary }} />,
                          }}
                        />
                      </Grid>
                      
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          error={!!errors.email}
                          helperText={errors.email}
                          required
                          InputProps={{
                            startAdornment: <Mail size={18} style={{ marginRight: '8px', color: theme.palette.text.secondary }} />,
                          }}
                        />
                      </Grid>
                      
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Teléfono"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          error={!!errors.phone}
                          helperText={errors.phone}
                          required
                          InputProps={{
                            startAdornment: <Phone size={18} style={{ marginRight: '8px', color: theme.palette.text.secondary }} />,
                          }}
                        />
                      </Grid>
                      
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Fecha"
                          name="date"
                          type="date"
                          value={formData.date}
                          onChange={handleChange}
                          error={!!errors.date}
                          helperText={errors.date}
                          required
                          InputLabelProps={{ shrink: true }}
                          InputProps={{
                            startAdornment: <Calendar size={18} style={{ marginRight: '8px', color: theme.palette.text.secondary }} />,
                          }}
                        />
                      </Grid>
                      
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Hora"
                          name="time"
                          type="time"
                          value={formData.time}
                          onChange={handleChange}
                          error={!!errors.time}
                          helperText={errors.time}
                          required
                          InputLabelProps={{ shrink: true }}
                          InputProps={{
                            startAdornment: <Clock size={18} style={{ marginRight: '8px', color: theme.palette.text.secondary }} />,
                          }}
                        />
                      </Grid>
                      
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <InputLabel id="guests-label">Número de invitados</InputLabel>
                          <Select
                            labelId="guests-label"
                            name="guests"
                            value={formData.guests}
                            onChange={handleSelectChange}
                            label="Número de invitados"
                            startAdornment={<Users size={18} style={{ marginRight: '8px', color: theme.palette.text.secondary }} />}
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20].map((num) => (
                              <MenuItem key={num} value={num.toString()}>
                                {num} {num === 1 ? 'persona' : 'personas'}
                              </MenuItem>
                            ))}
                          </Select>
                          <FormHelperText>Selecciona el número de personas</FormHelperText>
                        </FormControl>
                      </Grid>
                      
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Mensaje o solicitudes especiales"
                          name="message"
                          multiline
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          InputProps={{
                            startAdornment: <MessageCircle size={18} style={{ marginRight: '8px', marginTop: '3px', color: theme.palette.text.secondary }} />,
                          }}
                        />
                      </Grid>
                      
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="secondary"
                          size="large"
                          fullWidth
                          sx={{
                            mt: 2,
                            py: 1.5,
                            backgroundColor: theme.palette.neonGreen.main,
                            color: 'black',
                            fontWeight: 'bold',
                            '&:hover': {
                              backgroundColor: theme.palette.neonGreen.dark,
                            }
                          }}
                          startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <Send />}
                          disabled={loading}
                        >
                          {loading ? 'Enviando...' : 'Enviar Reserva'}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
      
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity={snackbar.severity === 'success' ? 'success' : 'error'} 
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
