import Navbar from "../components/NavbarV2/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
