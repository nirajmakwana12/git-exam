import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./index.scss";
import Tower from "./assets/2.png";

const Facilitation = () => {
  return (
    <Box className="contariner">
      <Grid container spacing={10} className="ServiceContainer">
        <Grid item xs={12} md={6}>
          <div className="text">
            <h1 style={{ textTransform: "uppercase" }}>facilitation</h1>
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
        <Grid item xs={12} md={6} className="worker">
          <img src={Tower} alt="tower" className="Tower" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Facilitation;
