import React, { useState } from "react";
import "./index.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Drawer from "@mui/material/Drawer";
import Asset1 from "./assest/1.png";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TextLogo from "./assest/2.png";
import RightWay from "./assest/rightWay.png";
import { Button } from "@mui/material";

const NavBar = () => {
  const [state, setState] = React.useState(false);
  return (
    <div style={{ position: "relative" }}>
      <div  className="imgesdiv">
        <div>
          <img src={Asset1} />
        </div>
        <div className="rightpelr">
          <img src={RightWay} alt="RightWay" />
        </div>
      </div>
      <Box id="Home" className="navCHnage">
        <Grid container className="navGridMain" alignItems="center">
          <div className="drawer">
            <IconButton onClick={() => setState(true)}>
              <MenuIcon />
            </IconButton>
          </div>
          <Grid item xs={12} md={6} className="navBar">
            <Drawer open={state} anchor="right" onClose={() => setState(false)}>
              <div className="drawerConatainer">
                <div>
                  <Button
                    style={{ minWidth: "0px" }}
                    onClick={() => setState(false)}
                  >
                    <a href="#Home">Home</a>
                  </Button>
                </div>
                <div>
                  <Button
                    style={{ minWidth: "0px" }}
                    onClick={() => setState(false)}
                  >
                    <a href="#AboutUs">About Us</a>
                  </Button>
                </div>
                <div>
                  <Button
                    style={{ minWidth: "0px" }}
                    onClick={() => setState(false)}
                  >
                    <a href="#Services">Services</a>
                  </Button>
                </div>
                <div>
                  <Button
                    style={{ minWidth: "0px" }}
                    onClick={() => setState(false)}
                  >
                    <a href="#Team">Team</a>
                  </Button>
                </div>
                <div>
                  <Button
                    style={{ minWidth: "0px" }}
                    onClick={() => setState(false)}
                  >
                    <a href="#Clients">Clients</a>
                  </Button>
                </div>
                <div>
                  <Button
                    style={{ minWidth: "0px" }}
                    onClick={() => setState(false)}
                  >
                    <a href="#ContactUs">Contact Us</a>
                  </Button>
                </div>
              </div>
            </Drawer>
            <div className="nav-first">
              <a href="#Home">
                <img src={TextLogo} className="TextLogo" alt="textlogo" />
              </a>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className="navSecond">
            <div className="navLinksContainer">
              <a className="nav-link" href="#AboutUs">
                About Us
              </a>

              <a className="nav-link" href="#Services">
                Services
              </a>

              <a className="nav-link" href="#Team">
                Team
              </a>

              <a className="nav-link" href="#Clients">
                Clients
              </a>

              <a className="nav-link" href="#ContactUs">
                Contact Us
              </a>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default NavBar;
