import { useContext, useEffect } from 'react';

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { AppContext } from '../context/AppStore';

export default function Styles({ header }) {
  const [, appDispatch] = useContext(AppContext);

  useEffect(() => {
    appDispatch({ type: 'ROUTE', payload: header });
    return () => true;
  }, [appDispatch])

  return (
    <Box minHeight={300} border={1} mt={3} p={3} borderRadius={3}>
      <Typography>Styles Details</Typography>
      <p>The idea is to have many hair style pictures show with some description for each.</p>
    </Box>
  );
}