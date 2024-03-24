import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Hoursitem({ day, hours, isSmall }) {

    const fontSize = isSmall ? 'body' : 'h5';

    return (
        <Box display="flex" justifyContent="space-between">
            <Typography mr={3} variant={fontSize} flexGrow={1} color="white">{day}</Typography>
            <Typography variant={fontSize} justifyContent="right" color="white">{hours}</Typography>
        </Box>
    );
}
