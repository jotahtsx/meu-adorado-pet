import {createTheme} from '@mui/material';

const theme = createTheme(
    {
        typography: {
            fontFamily: 'Work Sans, sans-serif',
        },
        palette: {
            primary: {
                main: '#F67A7B',
            },
            secondary: {
                main: '#0c2461',
            },
            text: {
                primary: '#0c2461',
                secondary: '#718093',
            },
        },
        shape: {
            borderRadius: '3px',
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                        borderRadius: '5px',
                        fontWeight: 'normal',
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        boxShadow: '0px 0px 39px rgba(0, 0, 0, 0.05)',
                    },
                },
            },
            MuiTextField: {
                defaultProps: {
                    InputLabelProps: {
                        required: false,
                    },
                    required: true,
                },
            },
            MuiTableHead: {
                styleOverrides: {
                    root: {
                        '& .MuiTableCell-root': {
                            fontWeight: 'bold',
                        },
                    },
                },
            },
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        border: '1px solid #D8D8D8',
                    },
                },
            },
        },
    }
);

export default theme;