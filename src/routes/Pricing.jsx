import { useContext, useEffect } from 'react';

// MUI Components
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { AppContext } from '../context/AppStore';
import PriceItem from '../components/PriceItem';

const priceList = [
  { title: 'GENTS HAIRCUT', price: '150' },
  { title: 'PENSIONERS HAIRCUT', price: '130' },
  { title: 'STUDENTS HAIRCUT', price: '140' },
  { title: 'BEARD SHAVE', price: '120' },
  { title: 'BLADE HAND SHAVE', price: '150' },
  { title: 'CLIPPERS HAND SHAVE', price: '140' },
  { title: 'BOYS UNDER 12 YEARS', price: '120' },
  { title: 'BOYS UNDER 17 YEARS', price: '130' },
  { title: 'CLIPPER BEARD TRIM', price: '80' },
  { title: 'WAX', price: '80' },
  { title: 'EYEBROW THREADING', price: '80' },
  { title: 'FULL FACE THREADING', price: '180' },
];

const priceSpacials = [
  { title: 'HAIRCUT + BEARD SHAVE + WAX', price: '300' },
  { title: 'HAIRCUT + WAX', price: '200' },
];

export default function Pricing({ header }) {
  const [, appDispatch] = useContext(AppContext);
  const smallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));

  useEffect(() => {
    appDispatch({ type: 'ROUTE', payload: header });
    return () => true;
  }, [appDispatch])

  return (
    <Box mt={smallScreen ? 2 : 3}>
      <Typography
        variant={smallScreen ? 'h6' : 'h5'}
        textAlign="center"
        fontWeight={700}
      >Haircut, Shave, Wax & Threading</Typography>
      <Box sx={{ mt: 2, p: 2, backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 5 }}>
        {priceList.map((v, i) => {
          return (
            <PriceItem key={i} index= {i} title={v.title} price={v.price} isSmall={smallScreen} />
          );
        })}
      </Box>
      <Typography
        mt={smallScreen ? 2 : 3}
        variant={smallScreen ? 'h6' : 'h5'}
        textAlign="center"
        fontWeight={700}
      >SPECIAL</Typography>
      <Box sx={{ mt: 2, p: 2, backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 5 }}>
        {priceSpacials.map((v, i) => {
          return (
            <PriceItem key={i} index={i} title={v.title} price={v.price} isSmall={smallScreen} />
          );
        })}
      </Box>
    </Box>
  );
}