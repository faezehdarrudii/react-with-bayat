import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginLayout from "./layouts/loginLayout/indext";
import ContactUs from "./pages/ContactUS";
import Shop from "./pages/Shop";
import LoginForm from "./components/LoginForm/LoginForm";
import PageOne from "./pages/PageOne";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route index element={<PageOne />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/shop" element={<Shop />} />
        </Route>

        <Route path="/auth" element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;
