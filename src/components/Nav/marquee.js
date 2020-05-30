import React, { Component } from 'react'

export default class marquee extends Component {
    render() {
        return (
            <div>
                <marquee behavior="" direction="left">
                    <div className="coin-stat">
                        <span className="coin-wrapper">
                            <div>
                                <span className="yellow-header">BITCOIN</span>
                                <span className="bold-price">$5000</span>
                            </div>
                            <div>
                                <span>btc</span>
                                <span>-12.25</span>
                            </div>
                        </span>                    
                        <span className="coin-wrapper">
                            <div>
                                <span className="yellow-header">ETHEREUM</span>
                                <span className="bold-price">$5000</span>
                            </div>
                            <div>
                                <span>eth</span>
                                <span>-12.25</span>
                            </div>
                        </span>                    
                        <span className="coin-wrapper">
                            <div>
                                <span className="yellow-header">XRP</span>
                                <span className="bold-price">$5000</span>
                            </div>
                            <div>
                                <span>xrp</span>
                                <span>-12.25</span>
                            </div>
                        </span>                    
                        <span className="coin-wrapper">
                            <div>
                                <span className="yellow-header">ETHER</span>
                                <span className="bold-price">$5000</span>
                            </div>
                            <div>
                                <span>usdt</span>
                                <span>-12.25</span>
                            </div>
                        </span>                    
                        <span className="coin-wrapper">
                            <div>
                                <span className="yellow-header">BITCOIN CASH</span>
                                <span className="bold-price">$5000</span>
                            </div>
                            <div>
                                <span>bch</span>
                                <span>-12.25</span>
                            </div>
                        </span>                    
                        <span className="coin-wrapper">
                            <div>
                                <span className="yellow-header">BITCOIN SV</span>
                                <span className="bold-price">$5000</span>
                            </div>
                            <div>
                                <span>bsv</span>
                                <span>-12.25</span>
                            </div>
                        </span>  
                    </div>
                </marquee>
            </div>
        )
    }
}
