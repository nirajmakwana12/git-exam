import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../FourCompoent/index.scss";
import Blue from "./assets/1.png";
import "./index.scss";
import Tower from "./assets/2.png";

const Consultation = () => {
  return (
    <Box className="Communications">
      <Grid
        container
        className="ConsulationContiner"
        alignItems="center"
        spacing={10}
      >
        <Grid item xs={12} md={6} className="boyGirlContainer">
          <img src={Tower} alt="toer" className="girlBoy" />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="CommunicationsText">
            <h1 className="CommunicationsH1">Consultation and Research</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque
              et. Sit ac fames facilisis nibh faucibus.
            </p>
          </div>
        </Grid>
      </Grid>
      <img src={Blue} alt="toer" className="Consultationperple" />
    </Box>
  );
};

export default Consultation;
