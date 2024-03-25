import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function PriceItem({ index, title, price, isSmall }) {

  const fontSize = isSmall ? 'body1' : 'h6';

  return (
    <>
      {index > 0 && <Divider />}
      <Box display="flex" color="white">
        <Typography variant={fontSize} flexGrow={1}>{title}</Typography>
        <Typography variant={fontSize} textAlign="right">R {price}</Typography>
      </Box>
    </>
  );
}
