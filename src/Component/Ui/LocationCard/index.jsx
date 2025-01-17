import React from "react";
import Card from "react-bootstrap/Card";
import "./LocationCard.css";
import tick from "./tick-circle.png";
import Button from "../Button";
const LocationCard = ({onClick,variant, buttonVariant,filled}) => {

  return (
    <Card className={`cardDesign ${filled}`} onClick={onClick} >
      <Card.Body className={variant}>
        <div className="d-flex justify-content-between">
        <Card.Title>Location</Card.Title>
          <div className={filled?"planCircleFilled":"planCircle"}></div>
        </div>
        <div className="mb-2 subtitle">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
          voluptates quo error cum est.
        </div>
        <span className="locationPrice p-2">Starts At $00/-</span>
        {[1,2,3].map((data)=>(
        <div key={data} className="d-flex cardMap">  
          <div>
            <img src={tick} alt="" />
          </div>
          <div className="ms-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </div>
        </div>
        ))}
        <Button variant={buttonVariant} style={{width:"-webkit-fill-available"}}>Select</Button>
      </Card.Body>
    </Card>
  );
};

export default LocationCard;
