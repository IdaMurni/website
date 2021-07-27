import React, { useState } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import classNames from "classnames";

// Assuming ERC20Abi is an ABI
// Assume the DAI_ADDRESS and USDC_ADDRESS constants are Ethereum addresses

const useStyles = makeStyles(styles);

export default function WhyIdaMurni() {
    const provider = new ethers.providers.JsonRpcProvider('https://rpc.deveth.org');
    const signer = provider.getSigner()
    console.log('signer', signer)
    const [holder, setHolder] = useState(0);
    const [burn, setBurn] = useState(0);

    const  getIdaToken = async() => {
        // You can also use an ENS name for the contract address
        const daiAddress = "0x505071eBf3b9c2867E5770E27D0c5B81f4F80E45";

        // The ERC-20 Contract ABI, which is a common contract interface
        // for tokens (this is the Human-Readable ABI format)
        const daiAbi = [
        // Some details about the token
        "function name() view returns (string)",
        "function symbol() view returns (string)",

        // Get the account balance
        "function balanceOf(address) view returns (uint)",

        // Send some of your tokens to someone else
        "function transfer(address to, uint amount)",

        // An event triggered whenever anyone transfers to someone else
        "event Transfer(address indexed from, address indexed to, uint amount)"
        ];

        // The Contract object
        const daiContract = new ethers.Contract(daiAddress, daiAbi, provider);
        const balance = await daiContract.balanceOf('0x62b06E4Fdd628759fda1c2aB3bb4687E86e0eAf0')
        setHolder(7900000000 - ethers.utils.formatUnits(balance, 18))
        setBurn((5 / 100) * (7900000000 - ethers.utils.formatUnits(balance, 18)))
        console.log('balance', 7900000000 - ethers.utils.formatUnits(balance, 18))
        return daiContract.balanceOf('0x62b06E4Fdd628759fda1c2aB3bb4687E86e0eAf0')

    }

    getIdaToken()

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
                <p style={{fontSize: 22, fontWeight: 700}}>{holder}</p> <p className="text-white font-size-21 m-0">TOKENS</p>
                </GridItem>
                <GridItem xs={12} sm={12} md={3} style={{textAlign: 'center'}}>
                <div className={classes.title}>
                    <h3>Liquidity Provided</h3>
                </div>
                <p style={{fontSize: 22, fontWeight: 700}}>{burn}</p> <p className="text-white font-size-21 m-0">LIQUIDITY</p>
                </GridItem>
                <GridItem xs={12} sm={12} md={3} style={{textAlign: 'center'}}>
                <div className={classes.title}>
                    <h3>Token Burn</h3>
                </div>
                <p style={{fontSize: 22, fontWeight: 700}}>{burn}</p> <p className="text-white font-size-21 m-0">TOKENS</p>
                </GridItem>
            </GridContainer>
        </div>
    );
}
