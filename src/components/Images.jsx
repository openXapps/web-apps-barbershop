// MUI Components
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import img01 from '../assets/shop-01-360x639.png';
import img02 from '../assets/shop-02-640x360.png';
import img03 from '../assets/shop-03-640x360.png';
import img04 from '../assets/shop-04-640x360.png';
import img05 from '../assets/shop-05-640x360.png';
import img06 from '../assets/shop-06-640x360.png';
import img07 from '../assets/shop-07-360x639.png';
import img08 from '../assets/shop-08-360x639.png';
import img09 from '../assets/shop-09-360x639.png';
import img10 from '../assets/shop-10-360x480.png';
import img11 from '../assets/shop-11-360x480.png';
import img12 from '../assets/shop-12-640x480.png';

const itemData = [
  { img: img04, title: 'Shop Image 4', cols: 3, rows: 1 },
  { img: img05, title: 'Shop Image 5', cols: 3, rows: 1 },
  { img: img03, title: 'Shop Image 3', cols: 2, rows: 1 },
  { img: img09, title: 'Shop Image 9', cols: 1, rows: 1 },
  { img: img12, title: 'Shop Image 12', cols: 3, rows: 1 },
  { img: img07, title: 'Shop Image 7', cols: 1, rows: 1 },
  { img: img11, title: 'Shop Image 11', cols: 2, rows: 1 },
  { img: img01, title: 'Shop Image 1', cols: 1, rows: 1 },
  { img: img10, title: 'Shop Image 10', cols: 2, rows: 1 },
  { img: img02, title: 'Shop Image 2', cols: 3, rows: 1 },
  { img: img06, title: 'Shop Image 6', cols: 2, rows: 1 },
  { img: img08, title: 'Shop Image 8', cols: 1, rows: 1 },
];

export default function Images() {
  const smallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const mediumScreen = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <Box sx={{ mt: 3, border: 0, display: 'flex', alignItems: 'center', width: '100%' }}>
      <ImageList
        variant="quilted"
        cols={3}
        gap={10}
      >
        {itemData.map((item, id) => (
          <ImageListItem key={id} cols={item.cols} rows={item.rows}>
            <img srcSet={item.img} src={item.img} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}


