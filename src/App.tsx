import { Route, Routes } from "react-router-dom";
import "./App.css";
import PageOne from "./pages/PageOne";
import Shop from "./pages/Shop";
import ContactUs from "./pages/ContactUS";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="layout">
        <Header />
        <div className="content-area">
          <main style={{ paddingTop: "80px" }}>
          <Routes>
            <Route path="/" element={<PageOne />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </main>
        <Sidebar />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
