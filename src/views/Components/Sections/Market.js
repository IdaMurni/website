import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function Market() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="market" style={{background: '#28ca9d'}}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h3>Market</h3>
          <h3 style={{textAlign: 'center'}}>since we are new, we don't have any proper market to trade IdaMurni. but hoppefully soon!</h3>
        </div>
      </div>
    </div>
  );
}
