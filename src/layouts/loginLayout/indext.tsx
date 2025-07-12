import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginLayout() {
  const navigate = useNavigate()
  useEffect(() => {
    localStorage.setItem("user","darrudi");
    localStorage.setItem("pass","1234")
    const islogin=localStorage.getItem("islogin")
    if(!islogin==true){
      navigate("/auth")
    }
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
