import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function PriceItem({ title, price, isSmall }) {

  const fontSize = isSmall ? 'body' : 'h5';

  return (
    <Box display="flex">
      <Typography variant={fontSize} flexGrow={1} color="white">{title}</Typography>
      <Typography variant={fontSize} justifyContent="right" color="white">R {price}</Typography>
    </Box>
  );
}
