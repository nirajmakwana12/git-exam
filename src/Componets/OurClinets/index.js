import React from "react";
import Box from "@mui/material/Box";
import "./index.scss";
import Grid from "@mui/material/Grid";
import Frist from "./assets/u1.png";
import Second from "./assets/u2.png";
import Third from "./assets/u3.png";
import Four from "./assets/u4.png";
import Five from "./assets/u5.png";
import dFrist from "./assets/d1.png";
import dSecond from "./assets/d2.png";
import dThird from "./assets/d3.png";
import dFour from "./assets/d4.png";
import bgimg from "./assets/bg.png";

const OURCLIENTS = () => {
  return (
    <Box className="contariner" id="Clients">
        <img src={bgimg} alt="" className="bgimgour" />
      <Grid item md={12}>
        <div className="heading">
          <h1 className="servier">OUR CLIENTS</h1>
        </div>
        <div className="thikLineContainer">
          <div className="OurClineLineOur" />
          <div className="OurclinhinklinkOur" />
        </div>
      </Grid>
      <Grid container className="OurProject">
        <Grid container justifyContent="space-around" alignItems="center" >
          <Grid item md={2}  className="logoClin" >
            <img src={Frist} alt=""  />
          </Grid>
          <Grid item md={2}  className="logoClin" >
            <img src={Second} alt=""  />
          </Grid>
          <Grid item md={2}  className="logoClin" >
            <img src={Third} alt=""  />
          </Grid>
          <Grid item md={2}  className="logoClin" >
            <img src={Four} alt=""  />
          </Grid>
          <Grid item md={2}  className="logoClin" >
            <img src={Five} alt=""  />
          </Grid>
          <Grid item md={2} className="logoClin show" >
            <img src={dFrist} alt=""  />
          </Grid> 
        </Grid>
        <Grid container justifyContent="space-around" alignItems="center" >
          <Grid item md={2} className="logoClin hide" >
            <img src={dFrist} alt=""  />
          </Grid>
          <Grid item md={2} className="logoClin" >
            <img src={dSecond} alt=""  />
          </Grid>
          <Grid item md={2} className="logoClin" >
            <img src={dThird} alt=""  />
          </Grid>
          <Grid item md={2} className="logoClin" >
            <img src={dFour} alt=""  />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OURCLIENTS;
