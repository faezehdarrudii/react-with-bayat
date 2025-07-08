import { Route, Routes } from "react-router-dom";
import "./App.css";
import PageOne from "./pages/PageOne";
import Shop from "./pages/Shop";
import ContactUs from "./pages/ContactUS";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>

    </>
  );
}

export default App;
