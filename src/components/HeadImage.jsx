import Box from "@mui/material/Box";

export default function HeadImage({ title, image }) {
  return (
    <Box sx={{
      position: 'relative',
      height: 0,
      width: '100%',
      paddingBottom: '100%',
      // border: 1,
    }}>
      <Box
        component="img"
        sx={{ position: 'absolute', height: '50%', width: '100%', left: 0, top: 0, opacity: 0.3 }}
        alt={title}
        src={image}
      />
    </Box>
  );
}
