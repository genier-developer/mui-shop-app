import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#206a8c'
        },
        secondary: {
            main: '#ff3d00'
        },
        success: {
            main: '#13f826'
        }
    }
});
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);