import {
    createTheme,
    ThemeOptions,
    PaletteOptions,
} from "@mui/material/styles";

// 1) Extiende las interfaces de MUI para incluir lighter/darker
declare module "@mui/material/styles" {
    interface SimplePaletteColorOptions {
        lighter?: string;
        darker?: string;
    }
    interface PaletteColor {
        lighter?: string;
        darker?: string;
    }
    interface Palette {
        neonPink: PaletteColor;
        neonGreen: PaletteColor;
    }
    interface PaletteOptions {
        neonPink?: SimplePaletteColorOptions;
        neonGreen?: SimplePaletteColorOptions;
    }
}

// 2) Definición de la paleta con tonos "lighter" y "darker"
const palette: PaletteOptions = {
    mode: "dark",
    primary: {
        main: "#FF43A4", // Rosa neón
        light: "#FF65B5",
        dark: "#E30B86",
        lighter: "#FFA7D5",
        darker: "#CC0975",
        contrastText: "#000000",
    },
    secondary: {
        main: "#39FF14", // Verde neón
        light: "#65FF49",
        dark: "#27CC09",
        lighter: "#A2FF93",
        darker: "#1D9B08",
        contrastText: "#000000",
    },
    neonPink: {
        main: "#FF43A4",
        light: "#FF65B5",
        dark: "#E30B86",
        lighter: "#FFA7D5",
        darker: "#CC0975",
        contrastText: "#000000",
    },
    neonGreen: {
        main: "#39FF14",
        light: "#65FF49",
        dark: "#27CC09",
        lighter: "#A2FF93",
        darker: "#1D9B08",
        contrastText: "#000000",
    },
    background: {
        default: "#121212",
        paper: "#1E1E1E",
    },
    text: {
        primary: "#FFFFFF",
        secondary: "#B0B0B0",
    },
    error: { main: "#FF5252" },
    warning: { main: "#FFB740" },
    info: { main: "#40C4FF" },
    success: { main: "#69F0AE" },
};

// 3) Opciones del tema
const themeOptions: ThemeOptions = {
    palette,
    shape: {
        borderRadius: 8, // 8px como se solicitó
    },
    typography: {
        fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
        h1: { fontWeight: 700 },
        h2: { fontWeight: 600 },
        h3: { fontWeight: 600 },
        button: { fontWeight: 600, textTransform: "none" },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: "10px 22px",
                    boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.2)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px rgba(255, 67, 164, 0.3)",
                    },
                },
                containedPrimary: {
                    background:
                        "linear-gradient(45deg, #FF43A4 30%, #FF65B5 90%)",
                    "&:hover": {
                        background:
                            "linear-gradient(45deg, #E30B86 30%, #FF43A4 90%)",
                    },
                },
                containedSecondary: {
                    background:
                        "linear-gradient(45deg, #27CC09 30%, #39FF14 90%)",
                    "&:hover": {
                        background:
                            "linear-gradient(45deg, #1D9B08 30%, #27CC09 90%)",
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.2)",
                    overflow: "hidden",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 8px 30px rgba(255, 67, 164, 0.25)",
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 8,
                        "&.Mui-focused fieldset": {
                            borderColor: "#FF43A4",
                            borderWidth: "2px",
                        },
                        "&:hover fieldset": {
                            borderColor: "#FF65B5",
                        },
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: "rgba(18, 18, 18, 0.8)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                },
            },
        },
    },
};

// 4) Crear y exportar el tema
const theme = createTheme(themeOptions);
export default theme;
