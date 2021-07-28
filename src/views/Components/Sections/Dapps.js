import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import devethswap from 'assets/img/deveth_swap.png'
import devethwallet from 'assets/img/deveth_wallet_sw.png'

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import classNames from "classnames";

const useStyles = makeStyles(styles);

export default function WhereToBuy() {
    const classes = useStyles();
    return (
        <div className={classes.sections} id="dapps">
        <div className={classes.container}>
            <div className={classes.title}>
                <h2>Dapps</h2>
            </div>
            <p>Visit decentralized exchange devethswap and idawallet to play with IDA Tokens</p>
            <GridContainer>
                <GridItem xs={12} sm={12} md={3} style={{textAlign: 'center'}}>
                    <a href="https://www.devethswap.de" target="_blank" style={{color: '#3d4a58'}}>
                        <div className={classes.title}>
                            <h3>devETH</h3>
                        </div>
                        <img src={devethswap} style={{marginBottom: 20, width: 100}}/>
                        <p className="text-white font-size-21 m-0">VISIT DEVETHSWAP</p>
                    </a>
                </GridItem>
                <GridItem xs={12} sm={12} md={3} style={{textAlign: 'center'}}>
                <div className={classes.title}>
                    <h3>IDA-Wallet</h3>
                </div>
                <img src={devethwallet} style={{marginBottom: 20, width: 100}}/>
                <p className="text-white font-size-21 m-0">VISIT IDAWALLET</p>
                </GridItem>
            </GridContainer>
        </div>
        </div>
    );
}
