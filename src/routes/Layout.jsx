import { Outlet } from "react-router-dom";
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Header from "../components/Header";

export default function Layout() {
  return (
    <Container maxWidth="md" >
      <Toolbar />
      <Header />
      <Outlet />
    </Container>
  );
};
