import React, { useState } from "react";

import "./Dashboard.css";
import guy from "./guy.png";
import ellipse from "./ellipse.png";
import diamond from "./diamond.svg";
import PackageCard from "../../Component/Ui/PackageCard";
import crown from "./crown.png";
import lamp from "./lamp-charge.png";
import suitcase from "./suitcase.png";
import setting from "./setting.png";
import CompareModal from "../../Component/Ui/CompareModal";
const Dashboard = () => {
  const[modalShow, setModalShow] = useState(false);

  const ModalShowHandler =()=>{
    setModalShow(true);
  }
  return (
    <>
      <div className="container mb-3" style={{paddingBottom:'10px'}}>
        <div className="dashboardHeader position-relative">
          <span className="position-relative">
            <img className="guy" src={guy} alt="" />
            <img className="ellipse" src={ellipse} alt="" />
          </span>
          Welcome to <span>1TAP</span>, Zaheer! Select a package to access our
          full range of services.
          <img className="diamond" src={diamond} alt="" />
        </div>
        <div className="row  mb-3" >
          <div className="col-lg-8 col-md-12 mt-3">

              <PackageCard
                title="Business Elite Package"
                variant={"#F1F8FF"}
                subtitle="Premium business support with company setup, end-to-end compliance, accounting, and payroll solutions"
                packageLogo={crown}
                packageText={'All Inclusive Solution'}
                popular={true}
                Price={'7,628'}
                ModalShowHandler={ModalShowHandler}
              />
          </div>
          <div className="col-lg-4 col-md-12 mt-3 card-col">
    
            <PackageCard
                title="Incorporation Package"
                variant={"#FFFFFF"}
                subtitle="Effortless business setup with our all-inclusive incorporation services"
                packageLogo={suitcase}
                popular={false}
                Price={'770'}
                col={4}
              />
   
          </div>
        </div>
        <div className="row  mb-3">
          <div className="col-lg-8 col-md-12 mt-3">

              <PackageCard
                title="Founders Starter Package"
                variant={"#FFFFFF"}
                subtitle="Kickstart your business with hassle-free company registration and streamlined compliance."
                packageLogo={lamp}
                packageText={'Great for Startup'}
                popular={false}
                Price={'2,885'}
              />

          </div>
          <div className="col-lg-4 col-md-12 mt-3 card-col">

            <PackageCard
                title="Personalized Package"
                variant={"#FFFFFF"}
                subtitle="Design your own package with services customized for your needs."
                packageLogo={setting}
                popular={false}
                Price={''}
                col={4}
              />
     
          </div>
        </div>
        <div className="p-4"></div>
      </div>


      <CompareModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Dashboard;
