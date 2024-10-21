import { Alert, Snackbar } from "@mui/material";
import { FC } from "react";
import { SnackbarCloseReason } from "@mui/material/Snackbar";

type SnackType = {
    isOpen: boolean;
    handleClose: (event: React.SyntheticEvent<any> | Event, reason: SnackbarCloseReason) => void;
};

export const Snack: FC<SnackType> = ({ isOpen, handleClose }) => {
    const handleAlertClose = (event: React.SyntheticEvent<Element, Event>) =>{
        handleClose(event, 'clickaway')
    }

    return (
        <Snackbar
            open={isOpen}
            onClose={handleClose}
            autoHideDuration={3000}
        >
            <Alert
                onClose={handleAlertClose}
                severity="success"
                sx={{ width: '100%' }}
            >
                Товар добавлен в корзину!
            </Alert>
        </Snackbar>
    );
};
