import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Thirdmain from "./assets/thirdmain.png";
import Setting from "./assets/1.png";
import Person from "./assets/2.png";
import "./index.scss";

const ThirdContainer = () => {
  return (
    <Box className="thirdCompoent" id="AboutUs">
      <Grid
        container
        alignItems="center"
      >
        <Grid item xs={12} md={6}>
          <div>
            <img className="Thirdmain" src={Thirdmain} alt="Thirdmain" />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid item md={12}>
            <h1 className="ABOUT">ABOUT US</h1>
            <div className="divder">
              <div className="greyLine" />
              <div className="thinklink" />
            </div>
            <p>
              We love what we do and are driven by achieving great results for
              our clients. Our awards and impressive client list are testament
              to our high quality approach. We deliver value, creaKvity, results
              and excepKonal levels of customer service and professionalism. We
              specialise in infrastructure development, energy and natural
              resources.
            </p>
          </Grid>
          <Grid container className="Twopart">
            <Grid item md={6}>
              <div>
                <img src={Setting} alt="setting" />
              </div>
              <h2 className="h2">Engagement</h2>
              <p className="parger">
                We are engagement specialists, who have led projects at all
                levels of the IAP2 spectrum. READ MORE
              </p>
            </Grid>
            <Grid item md={6}>
              <div>
                <img src={Person} alt="setting" />
              </div>
              <h2 className="h2">Communications</h2>
              <p className="parger">
                We are award-winning leaders in communications and campaign
                management. READ MORE
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ThirdContainer;
