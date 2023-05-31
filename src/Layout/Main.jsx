import { Outlet } from "react-router-dom";
import Nav from "../Component/Nav";
import Footer from "../Component/Footer";

const Main = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
