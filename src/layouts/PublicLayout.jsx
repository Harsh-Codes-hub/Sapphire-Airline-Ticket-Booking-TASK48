import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PublicLayout = () => {
  return (
    <div className="flex min-h-dvh flex-col overflow-hidden">
      <Navbar />
      <main className="flex flex-1 flex-col bg-(--off-white)">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
