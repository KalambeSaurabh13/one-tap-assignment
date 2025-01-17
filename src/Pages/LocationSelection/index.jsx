import React, { useState } from "react";
import "./LocationSelection.css";
import RightArrow from "./Arrow - Right 2.png";
import LocationCard from "../../Component/Ui/LocationCard";
import building from "./building.svg";
import diamondLeft from "./diamondLeft.png";
import diamondRight from "./diamondRight.png";
import Button from "../../Component/Ui/Button";
import Progressbar from "../../Component/Ui/Progressbar";

const LocationSelection = () => {
  const locationArray = [
    {id:0,variant:"gray",buttonVariant:"sky",filled:false},
    {id:1,variant:"sky",buttonVariant:"blue",filled:false},
    {id:2,variant:"sky",buttonVariant:"light",filled:false},
  ]
const [locationArr,setLocationArr] = useState(locationArray)
const locationHandler = (getData) => {
  console.log(getData)
  setLocationArr(
    locationArr.map((data, index) => {
      if (data.filled === true) {
        locationArr[index].filled = false;
        locationArr[index].variant="gray";
        locationArr[index].buttonVariant="light";
      }
      if (data.id === getData.id) {
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
      <Progressbar  />
      <div className="heading my-4">
        {" "}
        <img src={RightArrow} alt="" /> Recommended Jurisdictions for Business
      </div>
      <div className="row">
        {locationArr.map(({id,variant,buttonVariant,filled})=>(

        <div className="col-md-4">
          <LocationCard onClick={()=>locationHandler({id:id,variant:"sky",buttonVariant:"blue",filled:!filled})} variant={variant} buttonVariant={buttonVariant} filled={filled} />
        </div>
        ))}
      </div>

      <button className="CompareButton my-2 p-2 px-3">
        <img src={building} alt="" />
        <span className="ms-1">Compare Options</span> 
      </button>

      <div className="sub-title py-4">
        Prefer a Different Jurisdiction?
      </div>
        <div className="customLocationtag mb-4">Select a custom location</div>

      <div className="dashboardHeader position-relative diamondHeight taxHover mb-5">
        <img className="diamond1 " src={diamondLeft} alt="" />
        <img className="diamond2 " src={diamondRight} alt="" />

        <div className=" mx-4 d-flex position-relative justify-content-between flex-row">
        <div className="p-3 mx-2 padRemove">
          Do you want to optimise your <span>Corporate Tax?</span>
        </div>
        <Button variant={"blue"}>Know more</Button>
        </div>
      </div>
      <div className="pb-5"></div>
      </div>
    </div>
  );
};

export default LocationSelection;
