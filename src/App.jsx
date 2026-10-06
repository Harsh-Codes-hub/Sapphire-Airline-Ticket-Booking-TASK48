import { Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import SignIn from "./assets/pages/SignIn";
import Flight from "./assets/pages/Flight"
import Services from "./assets/pages/Services"
import AboutUs from "./assets/pages/AboutUs"
import ContactUs from "./assets/pages/ContactUs"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Flight" element={<Flight />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default App;
