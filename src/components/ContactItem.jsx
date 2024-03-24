import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export default function ContactItem({ title, value, icon, url, isSmall }) {

  const fontSize = isSmall ? 'body' : 'h5';

  return (
    <Box display="flex" color="white" justifyContent="space-between">
      <Typography mr={3} variant={fontSize}>{title}</Typography>
      <Typography variant={fontSize}>{value}</Typography>
      {/* <IconButton>{icon}</IconButton> */}
    </Box>
  );
}
