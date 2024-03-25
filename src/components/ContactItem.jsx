import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import GoogleIcon from '@mui/icons-material/Google';

export default function ContactItem({ index, title, value, isSmall }) {

  const fontSize = isSmall ? 'body1' : 'h6';

  return (
    <>
      {index > 0 && <Divider />}
      <Box display="flex" color="white" justifyContent="space-between">
        <Typography mr={2} variant={fontSize} >{title}</Typography>
        <Typography variant={fontSize} textAlign="right">{value}</Typography>
      </Box>
    </>
  );
}
