import React from "react";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from "../Button"
import right from "../LocationCard/tick-circle.png"
import "./CompareModal.css";
import minus from "./minus.png"

const CompareModal = (props) => {

  const Plan =[
    { name:'Business Setup Freezone',plan1:"check",plan2:"check",plan3:"check"},
    { name:'VAT Registration',plan1:"check",plan2:"check",plan3:"dash"},
    { name:'VAT Profit Amendments',plan1:"check",plan2:"check",plan3:"check"},
    { name:'Corporate Tax Registration',plan1:"check",plan2:"check",plan3:"check"},
    { name:'VAT Returns-Quarterly',plan1:"check",plan2:"check",plan3:"check"},
    { name:'Basic Books Annually',plan1:"Up to 4 employee",plan2:"check",plan3:"check"},
    { name:'Professional Boks & MIS-Monthly',plan1:"dash",plan2:"check",plan3:"dash"},
    { name:'Vat Consultancy',plan1:"check",plan2:"check",plan3:"dash"},
    { name:'Payroll & WPS',plan1:"dash",plan2:"check",plan3:"dash"},
    { name:'Economic substance regulations (ESR) filling',plan1:"check",plan2:"check",plan3:"check"},
    { name:'License Renewal- Freezone',plan1:"dash",plan2:"check",plan3:"dash"},

  ]


  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="modal-90w"
    >
      <Modal.Header style={{border:'none'}} closeButton>
      </Modal.Header>
      <Modal.Body>
      <div className="table-container">
  <div className="table-responsive">
    <table className="main-table">
      <thead>
        <tr>
          <th className="priceFont p-0 text-center pricecss"></th>
          <th className="priceFont p-0 text-center pricecss">Founder Starter Package</th>
          <th className="text-center position-relative pricecss">
            <div
              className="position-absolute"
              style={{ bottom: "50px", right: "60px" }}
            >
              <Button
                variant={"light"}
                style={{
                  color: "#2E95f4",
                  border: "1px solid #0085FF",
                  width: "auto",
                }}
              >
                Most popular
              </Button>
            </div>
            <div className="priceFont p-0 text-center pricecss">
              Business Elite Package
            </div>
          </th>
          <th className="priceFont p-0 text-center pricecss">
            Incorporation Package
          </th>
        </tr>
      </thead>
      <thead className="tableHeading">
        <tr className="rounded-3">
          <th
            className="priceFont pricecss"
            style={{ borderRadius: "16px 0px 0px 16px" }}
          >
            Price
          </th>
          <th className="priceFont pricecss">
            $2,885/ <span className="annual">Annual</span>
          </th>
          <th className="priceFont blueText pricecss">
            $7,628/<span className="annual">Annual</span>
          </th>
          <th
            className="priceFont pricecss"
            style={{ borderRadius: "0px 16px 16px 0px" }}
          >
            $2,120/<span className="annual pricecss">Annual</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {Plan.map(({ name, plan1, plan2, plan3 }) => (
          <tr key={name} className="py-2 tableRow">
            <td className="tableFirstContent p-3 ">{name}</td>
            <td className="text-center p-3 ">
              {plan1 === "Up to 4 employee" ? (
                plan1
              ) : (
                <img
                  className="checkSize" 
                  src={plan1 === "check" ? right : minus}
                  alt="check"
                />
              )}
            </td>
            <td className="text-center p-3">
              <img
                className="checkSize"
                src={plan2 === "check" ? right : minus}
                alt="check"
              />
            </td>
            <td className="text-center p-3">
              <img
                className="checkSize"
                src={plan3 === "check" ? right : minus}
                alt="check"
              />
            </td>
          </tr>
        ))}
        <tr>
          <td></td>
          <td className="text-center">
            <Button variant={"dark"}>Buy Now</Button>
          </td>
          <td className="text-center">
            <Button variant={"dark"}>Buy Now</Button>
          </td>
          <td className="text-center">
            <Button variant={"dark"}>Buy Now</Button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

      </Modal.Body>
    </Modal>
  );
};

export default CompareModal;
