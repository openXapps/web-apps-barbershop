import { useContext, useEffect } from 'react';

// MUI Components
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// App Specific
import { AppContext } from '../context/AppStore';
import BarbershopPole from '../components/BarbershopPole';
import svgHead02 from '../assets/barbershop-head-02.svg';
import svgHead03 from '../assets/barbershop-head-03.svg';
import logo from '../assets/barbershop-logo.svg';


export default function Home({ header }) {
  const [, appDispatch] = useContext(AppContext);
  const smallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const mediumScreen = useMediaQuery(theme => theme.breakpoints.down('md'));

  useEffect(() => {
    appDispatch({ type: 'ROUTE', payload: header });
    return () => true;
  }, [appDispatch])

  return (
    <>
      <Box mt={2} border={0} display="flex" justifyItems="space-between">
        <BarbershopPole isSmall={smallScreen ? true : false} />
        {/* <Box width={80} maxWidth={100} /> */}
        <Stack direction="column" alignItems="center" spacing={1} flexGrow={1}>
          <Typography variant={smallScreen ? 'h5' : (mediumScreen ? 'h3' : 'h2')} sx={{ fontWeight: 700 }}>Mediterranean</Typography>
          <Box
            component="img"
            sx={{ height: smallScreen ? 160 : (mediumScreen ? 190 : 240) }}
            alt="Home head 01"
            src={logo}
          />
        </Stack>
        <BarbershopPole isSmall={smallScreen ? true : false} />
      </Box>
      <Box sx={{
        position: 'relative',
        height: 0,
        width: '100%',
        p: 0,
        mt: 2,
        paddingBottom: '100%',
        // border: 1,
      }}>
        <Box textAlign="center">
          <Typography>We at the Mediterranean Barber Shop take great care of our customers. Our barbers are professional with many years of experience. Any hairstyle you want, we'll do do it.</Typography>
          <p>...</p>
        </Box>
        <Box
          component="img"
          sx={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, opacity: 0.2 }}
          alt="Home head 02"
          src={svgHead02}
        />
      </Box>
    </>
  );
}
