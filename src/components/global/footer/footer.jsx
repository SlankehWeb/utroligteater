import React from "react";
import "./footer.scss";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footerbox">
      <div className="colum1">
        <h3>ADRESSE</h3>
        <p>Det utrolige teater</p>
        <p>Havnegade 901</p>
        <p>9000 Aalborg</p>
        <p>EAN 5798003279845</p>
        <p>CVR 1001 0012</p>
        <p >Find vej på kort</p>
      </div>
      <div className="colum2">
        <div>
          <h3>BILLETSERVICE</h3>
          <p>Se åbningstider</p>
          <p>Billettelefon: +45 96 31 80 80</p>
          <p>billet@dut.dk</p>
        </div>
        <div className="mobileremove">
          <h3>ADMINISTRATION</h3>
          <p>Telefon: +45 96 31 80 90</p>
          <p>adm@dut.dk</p>
        </div>
      </div>
      <div className="colum3">
        <h3>PRAKTISK INFO</h3>
        <p>Kontakt</p>
        <p>Kom trygt i teatret</p>
        <p>Presseside</p>
        <p>Skoleforestillinger</p>
        <p>Teatercaféen</p>
        <p>Handelsbetingelser</p>
      </div>
      <div className="social">
        <AiFillFacebook size={"3em"} />
        <AiOutlineInstagram size={"3em"} />
        <AiFillLinkedin size={"3em"} />
      </div>
    </footer>
  );
};

export default Footer;