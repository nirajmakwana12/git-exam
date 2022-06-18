import React from "react";
import Box from "@mui/material/Box";
import "./index.scss";
import Grid from "@mui/material/Grid";
import face from "./assets/f.png";
import linkdin from "./assets/l.png";
import goolge from "./assets/s.png";


const Footer = () => {
  return (
    <Box className="contariner" id="ContactUs">
      <Grid container className="ServiceContainer footerPading" justifyContent="center">
        <Grid container className="bgColor">
          <Grid item xs={6} md={3} className="responsive">
            <div>
              <h4 style={{ margin: "0px 0px 0px 30px", fontWeight: "900" }}>
                Social
              </h4>
              <div className="">
                <div className="content">
                  <img className="logoImg" src={face} alt="" />

                  <span>Facebook</span>
                </div>
                <div className="content">
                  <img className="logoImg" src={linkdin} alt="" />

                  <span>Linkedin </span>
                </div>
                <div className="content">
                  <img className="logoImg" src={goolge} alt="" />

                  <span>Google +</span>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} md={2} className="responsive">
            <div>
              <h4 style={{ margin: "0px 0px 0px 0px", fontWeight: "900" }}>
                Explore
              </h4>
              <div className="">
                <div className="content">
                  <span>Services</span>
                </div>
                <div className="content">
                  <span>Team </span>
                </div>
                <div className="content">
                  <span> Clients</span>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} md={4} className="responsive">
            <div>
              <h4 style={{ margin: "0px 0px 0px 0px", fontWeight: "900" }}>
                Contact
              </h4>
              <div className="">
                <div className="content">
                  <span>Lorem Ipsum dummy address</span>
                </div>
                <div className="content">
                  <span>used for display</span>
                </div>
                <div className="content">
                  <span> 1234567890</span>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} md={3} className="emailcon responsive">
            <div>
              <h4 style={{ margin: "0px 0px 0px 0px", fontWeight: "900" }}>
                Email
              </h4>
              <div className="">
                <div className="content">
                  <span className="emails">mendlesoncommunication@email.com</span>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <div className="footerEnd">
        <h3>© Copyright 2018 Mendleson Communication Pty Ltd </h3>
      </div>
    </Box>
  );
};

export default Footer;
