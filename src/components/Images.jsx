// MUI Components
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import img01 from '../assets/shop-01-360x639.png';
import img02 from '../assets/shop-02-640x360.png';
import img03 from '../assets/shop-03-640x360.png';
import img04 from '../assets/shop-04-640x360.png';
// import img05 from '../assets/shop-05-640x360.png';
// import img06 from '../assets/shop-06-640x360.png';
// import img07 from '../assets/shop-07-640x360.png';

const itemData = [
  { id: 1, img: img01, title: 'Shop Image 1', },
  { id: 2, img: img02, title: 'Shop Image 2', },
  { id: 3, img: img03, title: 'Shop Image 3', },
  { id: 4, img: img04, title: 'Shop Image 4', },
  // { id: 5, img: img03, title: 'Shop Image 3', },
  // { id: 6, img: img03, title: 'Shop Image 3', },
  // { id: 7, img: img03, title: 'Shop Image 3', },
];

export default function Images() {
  const smallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const mediumScreen = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    // <Box sx={{ border: 1, display: 'flex', alignItems: 'center', width: smallScreen ? 320 : (mediumScreen ? 480 : 500) }}>
    <Box sx={{ mt: 3,border: 0, display: 'flex', alignItems: 'center', width: '100%' }}>
      <ImageList variant="masonry" cols={2} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.id}>
            return (
            <img srcSet={item.img} src={item.img} alt={item.title} loading="lazy" />
            )
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}


