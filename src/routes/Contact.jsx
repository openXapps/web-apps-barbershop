import { useContext, useEffect } from 'react';

// MUI Components
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GoogleIcon from '@mui/icons-material/Google';

import { AppContext } from '../context/AppStore';
import Hoursitem from '../components/HoursItem';
import ContactItem from '../components/ContactItem';

const businessHours = [
  { day: 'Sunday', hours: '08:30 - 14:00' },
  { day: 'Monday', hours: '08:00 - 18:00' },
  { day: 'Tuesday', hours: '08:00 - 18:00' },
  { day: 'Wednesday', hours: '08:00 - 18:00' },
  { day: 'Thursday', hours: '08:00 - 18:00' },
  { day: 'Friday', hours: '08:00 - 18:00' },
  { day: 'Saturday', hours: '08:00 - 17:30' },
  { day: 'Public Holidays', hours: '08:00 - 17:30' },
];

const contactList = [
  { title: 'WhatsApp', value: '+27 74 021 4302', icon: GoogleIcon, url: '' },
  { title: 'WhatsApp', value: '+27 81 361 9742', icon: GoogleIcon, url: '' },
  { title: 'Email', value: '???@gmail.com', icon: GoogleIcon, url: '' },
  // { title: 'Google', value: 'Search', icon: GoogleIcon, url: 'https://www.google.com/search?q=mediterranean+barber+raslouw&oq=medit' },
]

export default function Contact({ header }) {
  const [, appDispatch] = useContext(AppContext);
  const smallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));

  useEffect(() => {
    appDispatch({ type: 'ROUTE', payload: header });
    return () => true;
  }, [appDispatch])

  return (
    <Box
      mt={smallScreen ? 2 : 3}
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <Typography
        color="error"
        variant={smallScreen ? 'h5' : 'h4'}
        textAlign="center"
        fontWeight={700}
      >Business Hours</Typography>
      <Box sx={{ mt: 2, p: 2, backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 5 }}>
        {businessHours.map((v, i) => {
          return (
            <Hoursitem key={i} day={v.day} hours={v.hours} isSmall={smallScreen} />
          );
        })}
      </Box>
      <Typography
        mt={2}
        color="error"
        variant={smallScreen ? 'h5' : 'h4'}
        textAlign="center"
        fontWeight={700}
      >Contact Details</Typography>
      <Box sx={{ mt: 2, p: 2, backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 5 }}>
        {contactList.map((v, i) => {
          return (
            <ContactItem key={i} title={v.title} value={v.value} icon={v.icon} url={v.url} isSmall={smallScreen} />
          );
        })}
      </Box>
      <Typography
        my={2}
        color="error"
        variant={smallScreen ? 'h5' : 'h4'}
        textAlign="center"
        fontWeight={700}
      >Google Map</Typography>
      <iframe
        width="320"
        height="400"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=320&amp;height=400&amp;hl=en&amp;q=Raslouw%20Lifestyle%20Centre%20Centurion+(Mediterranian%20Barber)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
      </iframe>
      <Toolbar />
    </Box>
  );
}