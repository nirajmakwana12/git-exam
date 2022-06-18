import React from "react";
import Box from "@mui/material/Box";
import "./index.scss";
import Grid from "@mui/material/Grid";
import Frist from "./assets/1.png";
import Second from "./assets/2.png";
import Third from "./assets/3.png";

const OurProject = () => {
  return (
    <Box>
      <Grid container justifyContent="center">
        <Grid item md={12}>
          <div className="heading">
            <h1 className="servier">OUR PROJECTS</h1>
          </div>
          <div className="thikLineContainer">
            <div className="OurProjectLineOur" />
            <div className="OurLinethinklinkOur" />
          </div>
        </Grid>
      </Grid>
      <Grid container item className="OurProject">
        <Grid item xs={6} md={6} className="FristImg">
          <img src={Frist} alt="first" className="firstCline" />
        </Grid>
        <Grid container item xs={6} md={6}>
          <Grid item xs={8} md={12}>
            <img src={Second} alt="first" className="sceondsImf" />
          </Grid>
          <Grid item xs={8} md={12}>
            <div style={{ position: "relative" }}>
              <img src={Third} alt="first" className="LastImg" />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurProject;
