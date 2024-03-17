import { useContext } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

// Material UI
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

// App assets
import { AppContext } from '../context/AppStore';
import light from '../themes/light';
import dark from '../themes/dark';

// Route components
import Layout from './Layout';
import Home from './Home';
import Styles from './Styles';
import Pricing from './Pricing';
import Contact from './Contact';
import NoPage from './NoPage';

export default function App() {
  const [appState] = useContext(AppContext);
  const appTheme = createTheme(appState.themeIsDark ? dark : light);
  const home = '/apps/barbershop';
  // const home = '/';

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="styles" element={<Styles header='Hair Styles' />} />
      <Route path="pricing" element={<Pricing header='Price List' />} />
      <Route path="contact" element={<Contact header='Contact Us' />} />
      <Route path="*" element={<NoPage />} />
    </Route >
  ), { basename: home });

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
