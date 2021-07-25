import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import WhyIdaMurni from "./Sections/WhyIdaMurni.js";
import WhereToBuy from "./Sections/WhereToBuy.js";
import Market from "./Sections/Market.js";
import Dapps from "./Sections/Dapps.js";
import logo from 'assets/img/ida_murni_master.png'

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax>
        <div className={classes.container}>
        <img src={logo} style={{width: 200, display: 'block', margin: '0 auto'}}/>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>IdaMurni</h1>
                <h3 className={classes.subtitle}>
                  A Badass Protocol on devETH
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.container}>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <WhyIdaMurni />
        </div>
      </div>

      <WhereToBuy />
      <Market />
      <Dapps />
      <Footer />
    </div>
  );
}
