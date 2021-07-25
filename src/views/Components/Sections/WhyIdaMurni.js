import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import Paginations from "components/Pagination/Pagination.js";
import Badge from "components/Badge/Badge.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import classNames from "classnames";

const useStyles = makeStyles(styles);

export default function WhyIdaMurni() {
  const classes = useStyles();
  return (
    <div className={classes.sections} id="home">
        <p style={{textAlign: 'center'}}>IdaMurni release the first project in 2021 with total supply of 7.9 billions IDA considering the world populations
            in 2021. 
        </p>
        <GridContainer>
            <GridItem xs={12} sm={12} md={3} style={{textAlign: 'center'}}>
              <div className={classes.title}>
                <h3>Total Supply</h3>
              </div>
              <p style={{fontSize: 22, fontWeight: 700}}>7.900.000.000</p> <p className="text-white font-size-21 m-0">TOKENS</p>
            </GridItem>
            <GridItem xs={12} sm={12} md={3} style={{textAlign: 'center'}}>
              <div className={classes.title}>
                <h3>Token Holder</h3>
              </div>
              <p style={{fontSize: 22, fontWeight: 700}}>1,619,953</p> <p className="text-white font-size-21 m-0">ACCOUNTS</p>
            </GridItem>
            <GridItem xs={12} sm={12} md={3} style={{textAlign: 'center'}}>
              <div className={classes.title}>
                <h3>Liquidity Provided</h3>
              </div>
              <p style={{fontSize: 22, fontWeight: 700}}>1,619,953</p> <p className="text-white font-size-21 m-0">LIQUIDITY</p>
            </GridItem>
            <GridItem xs={12} sm={12} md={3} style={{textAlign: 'center'}}>
              <div className={classes.title}>
                <h3>Token Burn</h3>
              </div>
              <p style={{fontSize: 22, fontWeight: 700}}>1,619,953</p> <p className="text-white font-size-21 m-0">TOKENS</p>
            </GridItem>
          </GridContainer>
    </div>
  );
}
