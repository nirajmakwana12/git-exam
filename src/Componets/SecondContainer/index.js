import React from "react";
import "./index.scss";
import Perple from "./assest/perpel.png";
import blue from "./assest/blue.png";
import Boy from "./assest/boy.png";
import DarkBlue from "./assest/darkblue.png";
import { Grid, Box } from "@mui/material";

const SecondContainer = () => {
  return (
    <Box className="SceondLayer">
      <Grid container>
        <Grid item md={8} xs={0} className="perpleContainer">
          <img src={Perple} className="Perple" alt="per" />
          <img src={blue} className="blue" alt="per" />
          <img src={Boy} className="Boy" alt="per" />
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="TextContainer">
            <h1 className="mainText">
              Mendleson <br /> Communication <br /> and Engagement
            </h1>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Malesuada sed ipsum, ut quam volutpat, tortor.
            </h5>
          </div>
          <div>
            <img src={DarkBlue} className="DarkBlue" alt="per" />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SecondContainer;
