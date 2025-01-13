import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from '../../Ui/Button'
import '../../../../src/App.css';
import "./Header.css"
import { useLocation } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import { FaAlignLeft, FaPhone } from "react-icons/fa6";
import guy2 from "./Rectangle.png";
import loginPng from "./Login.png"
import  phone from "./Fill 217.png"
import searchimg from "./search-normal.png"

const Header = ({ isMobile, setShowSidebar }) => {
  const location = useLocation();
  const [display,setDisplay] = useState(true);

  const handleSearchIconShow =(e)=>{
    if(e.target.value===""){
      setDisplay(true);
    }else{
      setDisplay(false);
    }
  }

  return (
    <Navbar expand="lg" className="">
      <Container  className='headerParent mx-3 my-2'>
        <InputGroup size='lg' className="">
          {location.pathname === '/' && (
         <div className='positon-relative w-100'>
         <Form.Control
            placeholder=" search packages..."
            aria-label="search packages..."
            aria-describedby="basic-addon1"
            className='InputSearch'
            onChange={(e)=>handleSearchIconShow(e)}
          />
         {display &&<img className='serarchImg' src={searchimg} alt="" />} 
         </div>
          )}
          <h4 className='mb-0'>
            {location.pathname === "/activities" && "Business Overview & Visa Requirements"}
            {location.pathname === "/location" && "Jurisdiction Selection"}
          </h4>
        </InputGroup>
        {location.pathname === "/activities" && <span className='activityTag mb-0'> <FiSearch size={20} color='#2E95f4' /></span>}
        {(location.pathname === "/activities" || location.pathname === "/location") && <span className='phoneButtonHeader ms-3'> <FaPhone size={20} color='#2E95f4' /></span>}

        {location.pathname === '/' && <Button variant="light consultionBtn" style={{width:'360px', border:'1px solid #248FF2',height:'auto'}} className="consultionBtn"> <img src={phone} alt="phone" /> Book Free Consultation</Button>}
        {isMobile && (
          <button
            className="btn btn-primary "
            onClick={() => setShowSidebar(true)}
          >
            <FaAlignLeft />
          </button>
        )}
        <Button variant={"sky"} style={{width:'200px',height:'auto',display:'flex',justifyContent:'center'}}> <img src={guy2} alt="guy" /> <span className='zyFont'>ZY</span>  <img src={loginPng} alt="" /> </Button>

      </Container>
    </Navbar>
  )
}

export default Header