const dark = {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(145deg, #013856, #b73535) no-repeat fixed', // Barbershop
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    button: {
      main: '#f2f2f2',
      light: '#ffffff',
      dark: '#cccccc',
      contrastText: '#999999',
    }
  },
};

export default dark;