import React from "react";
import supportLogo from "./supportLogo.png";
import footerDesign from "./footerDesign.svg";
import girl from "./girl.png";
import "./Footer.css";
import Button from "../../Ui/Button";
import mail from "./mail.png";
import whatsapp from "./whatsapp.png";
import { useState } from "react";

const Footer = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="supportButtonParent">
      {show && (
        <div className="supportComponent">
          <div className="supportText">We are here to help!</div>
          <div className="mx-3">
            <Button
              style={{
                width: "100%",
                margin: "10px 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "52px",
              }}
            >
              <img src={mail} alt="mail" /> <span>Send an email</span>{" "}
            </Button>
            <Button
              style={{
                width: "100%",
                margin: "10px 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "52px",
              }}
            >
              <img src={whatsapp} alt="whatsapp" /> <span>Chat with us</span>{" "}
            </Button>
          </div>
          <div className="text-center">
            <img className="girlImg" src={girl} alt="girl" />
          </div>
          <img className="footerDesign" src={footerDesign} alt="footerDesign" />
        </div>
      )}
      <button className="supportButton" onClick={() => setShow(!show)}>
        <img src={supportLogo} alt="" />
        Support
      </button>
    </div>
  );
};

export default Footer;
