import React from "react";
import Card from "react-bootstrap/Card";
import Button from "../Button";
import "./PackageCard.css";
import lock from "./lock.svg"
const PackageCard = ({
  title,
  variant,
  subtitle,
  packageLogo,
  packageText,
  popular,
  Price,
  col,
  ModalShowHandler
}) => {
  return (
      <Card className={`cardBlur h-100 ${popular}`}>
        <Card.Body className="p-4">
            <div className="d-flex justify-content-between align-items-center">
          <span
            className={`packageTagDesign p-2 ${popular}`}
          >
            <img className="guy" src={packageLogo} alt={packageText} />
            {packageText}
          </span>
          <div className="Dnone">
          {col===4 && Price!=='' && (<div> $ <span className="price ">{Price}</span>one time </div>)}

          </div>
          {Price!=='' &&<div className="Dshow"> $ <span className="price ">{Price}</span>one time </div>}
          
            </div>
          <Card.Title className="my-4">{title}</Card.Title>
          <div className="mb-2 subtitle">{subtitle}</div>

          <div className="d-flex justify-content-between align-items-center flexMedia">
            {Price!==''?
            <div className="d-flex">
              <Button onClick={ModalShowHandler} variant={ variant==="#F1F8FF"?"light":"sky"}>Compare</Button>
              <Button variant={"dark"}>Buy Now</Button>
            </div>
            : 
            <div>
            <Button variant={"sky"}>
                <img src={lock} alt="" />
            </Button>
          </div> 
            }
            {col!==4 && <div className="d-flex align-items-baseline Dnone">
              $ <span className="price">{Price}</span>/year
            </div>}
          </div>
        </Card.Body>
      </Card>
  );
};

export default PackageCard;
