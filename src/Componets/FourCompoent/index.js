import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../FourCompoent/index.scss";
import Blue from "./assets/1.png";
import Tower from "./assets/2.png";

const Services = () => {
  return (
    <Box className="contariner" id="Services">
      <img src={Blue} className="Fourblue" alt="das" />
      <Grid container spacing={10} className="ServiceContainer">
        <Grid item xs={12} md={12}>
          <div className="heading">
            <h1 className="servier">SERVICES</h1>
          </div>
          <div className="thikLineContainer">
            <div className="servierLine" />
            <div className="servierLinethinklink" />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="text">
            <h1>Engagement</h1>
            <p>
              We love what we do and are driven by achieving great results for
              our clients. Our awards and impressive client list are testament
              to our high quality approach. We deliver value, creaKvity, results
              and excepKonal levels of customer service and professionalism. We
              specialise in infrastructure development, energy and natural
              resources.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="towerscontain">
          <img src={Tower} alt="tower" className="Tower" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
