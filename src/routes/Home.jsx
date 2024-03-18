import { useContext, useEffect } from 'react';

// MUI Components
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// App Specific
import { AppContext } from '../context/AppStore';
import BarbershopPole from '../components/BarbershopPole';
import head01 from '../assets/barbershop-head-01.svg';
import logo from '../assets/barbershop-logo.svg';


export default function Home({ header }) {
  const [, appDispatch] = useContext(AppContext);
  const smallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));

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
          <Typography variant={smallScreen ? 'h4' : 'h2'} sx={{ fontWeight: 700 }}>Mediterranean</Typography>
          {/* <Typography variant="h4" sx={{ fontWeight: 700 }}>Barber</Typography> */}
          <Box
            component="img"
            sx={{
              height: smallScreen ? 180 : 440,
            }}
            alt="Home head 01"
            src={logo}
          />
        </Stack>
      </Box>
      <Box
        component="img"
        sx={{
          height: smallScreen ? 280 : 540,
        }}
        alt="Home head 01"
        src={head01}
      />
      <Box mt={2}>
        <Typography>Alot more pictures and text goes here until everything is mentioned about the barber shop and it talents.</Typography>
      </Box>
    </>
  );
}
