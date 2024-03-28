const light = {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(145deg, rgba(239,239,247,1) 0%, rgba(171,171,191,1) 35%, rgba(20,20,23,1) 100%) no-repeat fixed',
        },
      },
    },
  },
  palette: {
    mode: 'light',
    button: {
      main: '#f2f2f2',
      light: '#ffffff',
      dark: '#cccccc',
      contrastText: '#999999',
    },
  },
};

export default light;