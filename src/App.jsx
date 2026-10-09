import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/SignIn";
import Flight from "./pages/Flight";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import ContactUs from "./pages/ContactUs";
import PublicLayout from "./layouts/PublicLayout";

const App = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/Flight" element={<Flight />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Route>

      <Route path="/Auth" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
