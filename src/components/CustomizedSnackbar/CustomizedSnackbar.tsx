import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Dispatch, SetStateAction } from 'react';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
type CustomizedSnackbarPropsType= {
    networkError: string | null
    setNetworkError: Dispatch<SetStateAction<string | null>>
    isSend: boolean
    setIsSend: Dispatch<SetStateAction<boolean>>
}

export default function CustomizedSnackbar(props: CustomizedSnackbarPropsType) {

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        props.setNetworkError(null);
        props.setIsSend(false)
    };
    const isOpenError = props.networkError !== null

    return (
        <>
            <Snackbar open={isOpenError} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }} >
                    {props.networkError}
                </Alert>
            </Snackbar>
            <Snackbar open={props.isSend} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Message send
                </Alert>
            </Snackbar>
        </>


    );
}

