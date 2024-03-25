import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function Hoursitem({ index, day, hours, isSmall }) {

    const fontSize = isSmall ? 'body1' : 'h6';

    return (
        <>
            {index > 0 && <Divider />}
            <Box display="flex" justifyContent="space-between">
                <Typography mr={3} variant={fontSize} flexGrow={1} color="white">{day}</Typography>
                <Typography variant={fontSize} justifyContent="right" color="white">{hours}</Typography>
            </Box>
        </>
    );
}
