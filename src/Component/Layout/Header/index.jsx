import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "../../Ui/Button";
import "../../../../src/App.css";
import "./Header.css";
import { useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaAlignLeft, FaPhone } from "react-icons/fa6";
import guy2 from "./Rectangle.png";
import loginPng from "./Login.png";
import phone from "./Fill 217.png";
import searchimg from "./search-normal.png";
import close from "./close.png";

const Header = ({ isMobile, setShowSidebar }) => {
  const location = useLocation();
  const [display, setDisplay] = useState(true);
  const [show,setShow] =useState(false);

  const [addCart, setAddCart] = useState([
    { id: 0, cart: false },
    { id: 1, cart: false },
    { id: 2, cart: false },
  ]);

  const handleSearchIconShow = (e) => {
    if (e.target.value === "") {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  };

  const CartHandler = (getData) => {
    setAddCart(
      addCart.map((data) =>
        data.id === getData.id ? getData : data
      )
    );
  }
    

  return (
    <Navbar expand="lg" className="justify-content-center">
      <Container className="headerParent mx-3 my-2">
        <InputGroup size="lg" className="">
          {location.pathname === "/" && (
            <div className="positon-relative w-100">
              <Form.Control
                placeholder=" search packages..."
                aria-label="search packages..."
                aria-describedby="basic-addon1"
                className="InputSearch"
                onChange={(e) => handleSearchIconShow(e)}
                onClick={()=>setShow(true)}
              />
              {display && (
                <img className="serarchImg" src={searchimg} alt="search" />
              )}

              {show &&(
                 <div className="dropTask">
                 <div className="d-flex justify-content-between px-4 py-3">
                   <div className="searchImgContainer">
                     <img
                       className="serarchImg1 mx-2"
                       src={searchimg}
                       alt="search"
                     />
                     Business
                   </div>
                   <img  onClick={()=>setShow(false)}
                     style={{ transform: "rotate(45deg)", height: "26px",cursor:'pointer' }}
                     src={close}
                     alt="close"
                   />
                 </div>
                 {addCart.map((item) => (
                   <div className="parentPack">
                     <div className="p-3">
                       <div className="packagesText">
                         <div>Business Elite Package</div> <div>$7,628/year</div>
                       </div>
                       <div>
                         <div className="badge">Includes:</div>
                         <div
                           className="badge"
                           style={{ background: "rgba(255, 238, 238, 1)" }}
                         >
                           Business Formation
                         </div>
                         <div
                           className="badge"
                           style={{ background: "rgba(217, 238, 255, 1)" }}
                         >
                           VAT Consultancy
                         </div>
                         <div
                           className="badge"
                           style={{ background: "rgba(244, 238, 255, 1)" }}
                         >
                           Business Formation
                         </div>
                         <div
                           className="badge"
                           style={{ background: "rgba(238, 255, 238, 1)" }}
                         >
                           VAT Profile Amendments
                         </div>
                         <div
                           className="badge"
                           style={{ background: "rgba(255, 255, 238, 1)" }}
                         >
                           Corporate Tax Registration
                         </div>
                         <div
                           className="badge"
                           style={{ background: "rgba(255, 255, 238, 1)" }}
                         >
                           Corporate Tax Registration
                         </div>
                         <div
                           className="badge"
                           style={{ background: "rgba(255, 255, 238, 1)" }}
                         >
                           Corporate Tax Registration
                         </div>
                       </div>
                       <div className="d-flex justify-content-end">
                         <div className="newButton" style={{background:item.cart?"rgba(36, 143, 242, 1)":"#ffffff",color:item.cart?"#fff":"rgba(36, 143, 242, 1)"}} onClick={()=>CartHandler({id:item.id,cart:!item.cart})}>
                           {!item.cart?(  <>
                             <span style={{ fontSize: "14px" }}>+</span> Add to
                             cart
                           </>):
                           (  <>
                             <span style={{ fontSize: "14px" }}>&#x2714;</span> Added
                           </>)
                           }
                        
                         </div>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
              )}
             
            </div>
          )}
          <h4 className="mb-0">
            {location.pathname === "/activities" &&
              "Business Overview & Visa Requirements"}
            {location.pathname === "/location" && "Jurisdiction Selection"}
          </h4>
        </InputGroup>
        {location.pathname === "/activities" && (
          <span className="activityTag mb-0">
            {" "}
            <FiSearch size={20} color="#2E95f4" />
          </span>
        )}
        {(location.pathname === "/activities" ||
          location.pathname === "/location") && (
          <div className="shopComponentParent">
            <div className="phoneButtonHeader ms-3">
              {" "}
              <FaPhone size={20} color="#2E95f4" />
            </div>
            <div className="visible" style={{ left: "0" }}>
              Book Free Consultation
            </div>
          </div>
        )}

        {location.pathname === "/" && (
          <Button
            variant="light consultionBtn"
            style={{
              border: "1px solid #248FF2",
              height: "auto",
              width: "auto",
            }}
            className="consultionBtn"
          >
            <div className="d-flex align-items-center">
              <div className="phoneBack">
                <img src={phone} alt="phone" />
              </div>
              <div style={{ width: "max-content" }}>Book Free Consultation</div>
            </div>
          </Button>
        )}
        {isMobile && (
          <button
            className="btn btn-primary "
            onClick={() => setShowSidebar(true)}
          >
            <FaAlignLeft />
          </button>
        )}
        <div>
          <div className="shopComponentParent">
            <Button
              variant={"sky"}
              style={{
                width: "200px",
                height: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {" "}
              <img src={guy2} alt="guy" /> <span className="zyFont">ZY</span>{" "}
              <img src={loginPng} alt="" />{" "}
            </Button>
            <div className="visible" style={{ right: "0" }}>
              Log out
            </div>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
