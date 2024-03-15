import { Box, Container, Toolbar, Typography } from "@mui/material";
import Footer from "./Footer";

export default function Home() {
  return (
    <Container maxWidth="md" >
      <Toolbar />
      <Box minHeight={300} border={2} mt={3}>
        <Typography>Here goes all the home page content</Typography>
      </Box>
      <Footer />
    </Container>
  );
}
