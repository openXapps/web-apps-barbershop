import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// MUI Components
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from "@mui/material/Box";
import Toolbar from '@mui/material/Toolbar';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// App Specific
import { AppContext } from '../context/AppStore';
import BarbershopPole from '../components/BarbershopPole';
import Images from '../components/Images';
import logo from '../assets/barbershop-logo.svg';
import svgHead01 from '../assets/barbershop-head-01-90x119.png';
import svgHead03 from '../assets/barbershop-head-03-90x119.png';


export default function Home({ header }) {
  const [, appDispatch] = useContext(AppContext);
  const smallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const mediumScreen = useMediaQuery(theme => theme.breakpoints.down('md'));
  const rrNavigate = useNavigate();

  useEffect(() => {
    appDispatch({ type: 'ROUTE', payload: header });
    return () => true;
  }, [appDispatch])

  return (
    <>
      <Box mt={2} border={0} display="flex" alignItems="center">
        <BarbershopPole isSmall={smallScreen ? true : false} />
        <Stack direction="column" alignItems="center" spacing={2} flexGrow={1}>
          <Typography
            variant={smallScreen ? 'h5' : (mediumScreen ? 'h4' : 'h3')}
            sx={{ fontWeight: 700 }}
          >Mediterranean</Typography>
          <Box
            component="img"
            sx={{ height: smallScreen ? 160 : 240 }}
            alt="Home head 01"
            src={logo}
          />
        </Stack>
        <BarbershopPole isSmall={smallScreen ? true : false} />
      </Box>
      {/* <Typography mt={2} color="white" variant={smallScreen ? 'body1' : 'h6'}>We at the Mediterranean Barber Shop take great care of our customers. Our barbers are professional with many years of experience. Any hairstyle you want, we'll do it.</Typography>
        <Typography mt={2} color="white" variant={smallScreen ? 'body1' : 'h6'}>Depending how you want your haircut or beard trim to look like, just tell us or show a picture of your favourite style and we'll cut and trim just the way you want it.</Typography> */}
      <Box mt={3} display="flex" justifyContent="space-around" alignItems="center" gap={1}>
        <Box component="img" src={svgHead03} />
        <Box>
          <Typography color="white" variant={smallScreen ? 'body1' : 'h6'} textAlign="center">Elevate Your Look</Typography>
          <Typography color="white" variant={smallScreen ? 'body1' : 'h6'} textAlign="center">Elevate Your Life</Typography>
        </Box>
        <Box component="img" src={svgHead01} />
      </Box>
      <Images />
      <Box mt={3} display="flex" alignItems="center" flexDirection="column">
        <Typography color="white" variant="h5" fontWeight={700}>Check Out Our</Typography>
        <Stack mt={2} spacing={1}>
          <Button color="warning" onClick={e => rrNavigate('/pricing')}>Price List</Button>
          <Button color="warning" onClick={e => rrNavigate('/contact')}>Contact Information</Button>
        </Stack>
      </Box>
      <Toolbar />
    </>
  );
}
