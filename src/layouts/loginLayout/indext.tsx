import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useEffect } from "react";

export default function LoginLayout() {
  useEffect(() => {
    console.log("CHECK AUTH HERE");
  }, []);

  return (
    <div className="layout">
      <Header />
      <div className="content-area">
        <Outlet />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}
