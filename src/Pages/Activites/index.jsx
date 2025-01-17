import React, { useEffect, useState } from "react";
import "./Activites.css";
import RightArrow from "../LocationSelection/Arrow - Right 2.png";
import Button from "../../Component/Ui/Button";
import info from "./info-circle.png";
import plus from "./plus.png";
import minus from "./minus.png";
import Progressbar from "../../Component/Ui/Progressbar";
import checkImg from "../../Component/Ui/LocationCard/tick-circle.png";

const Activites = () => {
  const [count,setCount] = useState(0)
  const serviceMenu = [
    {
      name: "Healthcare",
      check: false,
    },
    {
      name: "Manufacturing",
      check: false,
    },
    {
      name: "Professional Services",
      check: false,
    },
    {
      name: "Information Technology",
      check: false,
    },
    {
      name: " Finance and insurance",
      check: false,
    },
    {
      name: "Construction and Real Estate",
      check: false,
    },
    {
      name: "Commercial and Retail",
      check: false,
    },
    {
      name: "Education",
      check: false,
    },
    {
      name: "Logistics and Transportation",
      check: false,
    },
    {
      name: "Tourism and Hospitallity",
      check: false,
    },
    {
      name: "Others",
      check: false,
    },
  ];

  const bussinessActivity = [
    { name: "goods", check: false },
    { name: "services", check: false },
    { name: "Trading", check: false },
  ];

  const workspaceType = [
    { name: "Retail Shop", check: false },
    { name: "Virtual Office Space", check: false },
    { name: "Industrial Area", check: false },
    { name: "Warehouse", check: false },
    { name: "Physical Office Space", check: false },
  ];

  const [checkWorkspaceType, setCheckWorkspaceType] = useState(workspaceType);

  const [activity, setActivity] = useState(serviceMenu);
  const [bussinessActivityCheck, setBussinessActivityCheck] =
    useState(bussinessActivity);

  const [goodService, setGoodService] = useState([
    { name: "Yes", check: false },
    { name: "No", check: false },
  ]);

  const [financial, setFinancial] = useState([
    { name: "Yes", check: false },
    { name: "No", check: false },
    { name: "Notsure", check: false },
  ]);

  const checkOperationHandler = (getData) => {
    setActivity(
      activity.map((data) => (data.name === getData.name ? getData : data))
    );
  };


  const bussinessActivityHandler = (getData) => {
    setBussinessActivityCheck(
      bussinessActivityCheck.map((data) =>
        data.name === getData.name ? getData : data
      )
    );
  };

const checkWorkspaceTypeHandler= (getData) => {
  setCheckWorkspaceType(
    checkWorkspaceType.map((data) =>
      data.name === getData.name ? getData : data
    )
  );
};
  
  const checkGoodServiceHandler = (getData) => {
    setGoodService(
      goodService.map((data, index) => {
        if (data.check === true) {
          goodService[index].check = false;
        }
        if (data.name === getData.name) {
          return getData;
        } else {
          return data;
        }
      })
    );
  };

  const checkFinancialHandler = (getData) => {
    setFinancial(
      financial.map((data, index) => {
        if (data.check === true) {
          financial[index].check = false;
        }
        if (data.name === getData.name) {
          return getData;
        } else {
          return data;
        }
      })
    );
  };
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
          {activity.map(({ name, check }, index) => (
            <Button
              key={index}
              onClick={() =>
                checkOperationHandler({ name: name, check: !check })
              }
              variant={check ? "sky" : "light"}
              style={{
                width: "auto",
                border: check ? "1px solid blue" : "1px solid transparent",
              }}
            >
              {check ? <img src={checkImg} alt="" /> : "+"} {name}
            </Button>
          ))}
        </div>

        <div className="sub-title py-4">Describe Your Business Activities</div>
        {bussinessActivityCheck.map(({ name, check }) => (
          <Button
            variant={check ? "sky" : "gray"}
            style={{
              width: "auto",
              border: check ? "1px solid blue" : "1px solid transparent",
            }}
            onClick={() =>
              bussinessActivityHandler({ name: name, check: !check })
            }
            className="activityTag mb-4 mx-1"
          >
            {name}
          </Button>
        ))}

        <div className="my-4">
          <textarea
            className="businessText sec p-3"
            cols={5}
            type="text"
            placeholder="Enter your business details here...."
          />
        </div>

        <div className="sub-title ">
          Specify Visa Requirements <img src={info} alt="info" />
          <div>
            <span className="" style={{ background: "#F8F8F8" }}>
              <Button variant={"gray"} style={{ width: "auto", margin: "0" }}>
                {" "}
                <img src={minus} alt="minus" />{" "}
              </Button>
              <Button variant={"light"} style={{ width: "auto", margin: "0" }}>
                {count}
              </Button>
              <Button variant={"gray"} onClick={()=>setCount(count+1)} style={{ width: "auto", margin: "0" }}>
                {" "}
                <img src={plus} alt="plus" />{" "}
              </Button>
            </span>

            <Button variant={"blue"} style={{ width: "auto" }}>
              Cost: $00.00
            </Button>
          </div>
        </div>

        <div className="servicesMenu sec my-4">
          <div className="sub-title ">
            Are you planning to buy or sell goods and services within the
            U.A.E.?
            <div>
              {goodService.map(({ name, check }) => (
                <Button
                  variant={check ? "sky" : "light"}
                  style={{
                    width: "auto",
                    border: check ? "1px solid blue" : "1px solid transparent",
                  }}
                  onClick={() =>
                    checkGoodServiceHandler({ name: name, check: !check })
                  }
                  className="activityTag mb-4 mx-1"
                >
                  {name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="servicesMenu sec my-4">
          <div className="subTitle" >
            Indicate if your business requires a specific type of workspace
            <div>
              <div className="row text-left">
              {checkWorkspaceType.map(({ name, check }) => (
                <div class="col-md-4 subDiv">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value={check}
                    id={name}
                    onChange={()=>checkWorkspaceTypeHandler({ name: name, check: !check })}
                  />
                  <label class="inputText" for={name}>
                    {name}
                  </label>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>

        <div className="servicesMenu sec my-4">
          <div className="sub-title ">
            Will your company's annual turnover exceed AED 3 million in upcoming
            financial year in the U.A.E?
            <div>
              {financial.map(({ name, check }) => (
                <Button
                  variant={check ? "sky" : "light"}
                  style={{
                    width: "auto",
                    border: check ? "1px solid blue" : "1px solid transparent",
                  }}
                  onClick={() =>
                    checkFinancialHandler({ name: name, check: !check })
                  }
                  className="activityTag mb-4 mx-1"
                >
                  {name}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="pb-5"></div>
      </div>
    </div>
  );
};

export default Activites;
