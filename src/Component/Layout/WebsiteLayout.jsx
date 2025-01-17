import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./LeftSidebar";

const WebsiteLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1025);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="">
        <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} isMobile={isMobile} />
        <div className="Mainbody" style={{ width: 'calc(100% - 20%)', height: 'fit-content', background: location.pathname === "/" ? '#F8F8F8' : "#FFFFFF", marginLeft: 'auto' }}>
          <Header setShowSidebar={setShowSidebar} isMobile={isMobile} />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default WebsiteLayout;
