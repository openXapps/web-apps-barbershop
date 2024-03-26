import { useContext, useEffect } from 'react';

// MUI Components
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';

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
  { title: 'Cellphone', value: '+27 74 021 4302', },
  { title: 'Cellphone', value: '+27 81 361 9742', },
  { title: 'Email', value: 'chabanesekour@gmail.com', },
]

export default function Contact({ header }) {
  const [, appDispatch] = useContext(AppContext);
  const smallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));

  useEffect(() => {
    appDispatch({ type: 'ROUTE', payload: header });
    return () => true;
  }, [appDispatch])

  return (
    <Box mt={smallScreen ? 2 : 3}>
      <Typography
        // color="error"
        variant={smallScreen ? 'h6' : 'h5'}
        textAlign="center"
        fontWeight={700}
      >Business Hours</Typography>
      <Box sx={{ mt: 2, p: 2, backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 5 }}>
        {businessHours.map((v, i) => {
          return (
            <Hoursitem key={i} index={i} day={v.day} hours={v.hours} isSmall={smallScreen} />
          );
        })}
      </Box>
      <Typography
        mt={2}
        variant={smallScreen ? 'h6' : 'h5'}
        textAlign="center"
        fontWeight={700}
      >Contact Details</Typography>
      <Box sx={{ mt: 2, p: 2, backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 5 }}>
        {contactList.map((v, i) => {
          return (
            <ContactItem key={i} index={i} title={v.title} value={v.value} icon={v.icon} url={v.url} isSmall={smallScreen} />
          );
        })}
        <Box mt={2} textAlign="center" color="white">
        <Divider />
          <Typography mt={2} variant={smallScreen ? 'body1' : 'h6'}>Raslouw Lifestyle Centre</Typography>
          <Typography variant={smallScreen ? 'body1' : 'h6'}>Corner of Hendrik Verwoerd Dr</Typography>
          <Typography variant={smallScreen ? 'body1' : 'h6'}>& Rooihuiskraal Rd</Typography>
          <Typography variant={smallScreen ? 'body1' : 'h6'}>Raslouw, Centurion</Typography>
        </Box>
      </Box>
      <Typography
        my={2}
        variant={smallScreen ? 'h6' : 'h5'}
        textAlign="center"
        fontWeight={700}
      >Google Map</Typography>
      <iframe
        style={{
          width: "100%",
          height: "360px",
          frameBorder: "0",
          scrolling: "no",
          marginHeight: "0",
          marginWidth: "0",
        }}
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=320&amp;height=400&amp;hl=en&amp;q=Raslouw%20Lifestyle%20Centre%20Centurion+(Mediterranian%20Barber)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
      </iframe>
      <Toolbar />
    </Box>
  );
}