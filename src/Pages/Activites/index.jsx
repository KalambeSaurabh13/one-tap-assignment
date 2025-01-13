import React, { useEffect } from "react";
import "./Activites.css";
import RightArrow from "../LocationSelection/Arrow - Right 2.png";
import Button from "../../Component/Ui/Button"
import info from "./info-circle.png"
import plus from "./plus.png"
import minus from "./minus.png"
import Progressbar from "../../Component/Ui/Progressbar";
const Activites = () => {
  const serviceMenu = ["Healthcare", "Manufacturing", "Professional Services", "Information Technology", " Finance and insurance", "Construction and Real Estate", "Commercial and Retail",
    "Education", "Logistics and Transportation", "Tourism and Hospitallity", "Others"]



  return (
    <div className="container">
      <div className="m-3">
        <Progressbar />
        <div className="heading my-4">
          {" "}
          <img src={RightArrow} alt="" /> Identify the industries or sectors
          that best describe your business operations
        </div>

        <div className="servicesMenu">
          {serviceMenu.map((service, index) => <Button key={index} variant={"light"} style={{ width: 'auto' }}>+ {service}</Button>)}

        </div>

        <div className="sub-title py-4">Describe Your Business Activities</div>
        <span className="activityTag mb-4 mx-1">Goods</span>
        <span className="activityTag mb-4 mx-1">Services</span>
        <span className="activityTag mb-4 mx-1">Trading</span>

        <div className="my-4">
          <textarea className="businessText p-3" cols={5} type="text" placeholder="Enter your business details here...." />
        </div>

        <div className="sub-title ">Specify Visa Requirements <img src={info} alt="info" />

          <div>
            <span className="" style={{ background: "#F8F8F8" }}>
              <Button variant={"gray"} style={{ width: 'auto', margin: '0' }}> <img src={minus} alt="minus" /> </Button>
              <Button variant={"light"} style={{ width: 'auto', margin: '0' }}>0</Button>
              <Button variant={"gray"} style={{ width: 'auto', margin: '0' }}> <img src={plus} alt="plus" /> </Button>
            </span>


            <Button variant={"blue"} style={{ width: 'auto' }}>Cost: $00.00</Button>
          </div>

        </div>

        <div className="servicesMenu my-4">
          <div className="sub-title ">
            Are you planning to buy or sell goods and services within the U.A.E.?
            <div>
              <Button variant={"light"} >Yes</Button>
              <Button variant={"light"} >No</Button>
            </div>

          </div>
        </div>
        <div className="pb-5"></div>
      </div>
    </div>
  );
};

export default Activites;
