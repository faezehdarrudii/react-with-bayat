import { Route, Routes } from "react-router-dom";
import "./App.css";
import PageOne from "./pages/PageOne";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageOne />} />
      </Routes>
    </>
  );
}

export default App;
