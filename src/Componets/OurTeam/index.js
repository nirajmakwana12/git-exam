import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./index.scss";
import Blue from "./assets/1.png";
import Tower from "./assets/2.png";
import third from "./assets/3.png";
import blueskin from "./assets/blue.png"
import perle from "./assets/perle.png"

const OurTeam = () => {
  return (
    <Box className="contariner" id="Team">
    <img src={blueskin} className="blueskin" alt="blues" />
      <Grid container spacing={10} className="ServiceContainer">
        <Grid item xs={12} md={12}>
          <div className="heading">
            <h1 className="servier">OUR TEAM</h1>
          </div>
          <div className="thikLineContainer">
            <div className="servierLineOur" />
            <div className="servierLinethinklinkOur" />
          </div>
        </Grid>
      </Grid>
      <div className="ImgLineContainer">
        <Grid item xs={12} md={4} className="imgLine">
          <div>
            <img src={third} alt="img" />
            <h4>Jessica D’suza</h4>
          </div>
        </Grid>
        <Grid item xs={12} md={4} className="imgLine">
          <div>
            <img src={Tower} alt="img" />
            <h4>Johny Williams</h4>
          </div>
        </Grid>
        <Grid item xs={12} md={4} className="imgLine">
          <div>
            <img src={Blue} alt="img" />
            <h4>Sanya R,</h4>
          </div>
        </Grid>
      </div>
      <img src={perle} className="perle" alt="blues" />
    </Box>
  );
};

export default OurTeam;
