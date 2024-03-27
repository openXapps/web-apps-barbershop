import { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// MUI Components
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

// MUI Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// App Specific
import { AppContext } from '../context/AppStore';
import { storageItems } from '../config/defaults';
import { getSettings, saveLocalStorage } from '../helpers/localstorage';

function Header() {
  const rrNavigate = useNavigate();
  const { pathname } = useLocation();
  const smallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const [{ themeIsDark, routePath }, appDispatch] = useContext(AppContext);

  const handleThemeClick = () => {
    saveLocalStorage(storageItems.settings, { ...getSettings().data, themeIsDark: !themeIsDark });
    appDispatch({ type: 'THEME', payload: !themeIsDark });
  }

  return (
    <AppBar color="inherit">
      <Container maxWidth="md">
        <Toolbar disableGutters variant={smallScreen ? 'dense' : 'regular'}>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            {routePath}
          </Typography>
          {pathname === '/' ? (
            <Box display="flex" flexDirection="row">
              <IconButton
                color="inherit"
                onClick={() => { rrNavigate('/pricing') }}
              ><MonetizationOnIcon /></IconButton>
              <IconButton
                color="inherit"
                onClick={() => { rrNavigate('/contact') }}
              ><LocationOnIcon /></IconButton>
              <Divider sx={{ opacity: 0.9 }} orientation="vertical" variant="middle" flexItem />
              <IconButton
                color="inherit"
                onClick={handleThemeClick}
              ><Brightness6Icon /></IconButton>
            </Box>
          ) : (
            <IconButton
              sx={{ mr: 1 }}
              aria-label="back button"
              color="inherit"
              onClick={() => rrNavigate(-1)}
            ><ArrowBackIcon /></IconButton>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;