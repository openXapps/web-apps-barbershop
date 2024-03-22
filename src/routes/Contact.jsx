import { useContext, useEffect } from 'react';

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { AppContext } from '../context/AppStore';

export default function Contact({ header }) {
  const [, appDispatch] = useContext(AppContext);

  useEffect(() => {
    appDispatch({ type: 'ROUTE', payload: header });
    return () => true;
  }, [appDispatch])

  return (
    <Box minHeight={300} border={1} mt={3} p={3} borderRadius={3}>
      <Typography>Contact Details</Typography>
      
    </Box>
  );
}