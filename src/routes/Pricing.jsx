import { useContext, useEffect } from 'react';

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { AppContext } from '../context/AppStore';

export default function Pricing({ header }) {
  const [, appDispatch] = useContext(AppContext);

  useEffect(() => {
    appDispatch({ type: 'ROUTE', payload: header });
    return () => true;
  }, [appDispatch])

  return (
    <Box minHeight={300} border={1} mt={3} p={3} borderRadius={3}>
      <Typography>Pricing Details</Typography>
      <p>We can show a pricing board here with all the different pricing options your customer can see. Each pricing option can have some description explaining the type of cut their'll get.</p>
    </Box>
  );
}