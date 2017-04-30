import React, { Component } from 'react';


class Timeline extends Component{
    render(){
        return(
            <div>
                <div className="dy-timeline-num">622 0945 2017032458</div>
                <div className="dy-timeline">
                    <div className="timeline-main">
                        <div className="timeline-year">

                            <div className="timeline-month">
                                <h3><b>09:03</b></h3>
                                <p className="date"><b>AM</b></p>
                            </div>
                            <div className="timeline-line"></div>
                            <div className="timeline-content">
                                <span className="dot-circle"><i className="ddzt"></i></span>
                                <div className="timeline-con">
                                    <p className="content-en"><span><b>ORDER</b> <i>|</i> SUBMITTED</span></p>
                                    <p className="conten-cn">订单已提交</p>
                                    <p className="conten-nr"><span>订单号: <i>1312034120</i></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-main">
                        <div className="timeline-year">

                            <div className="timeline-month">
                                <h3><b>09:08</b></h3>
                                <p className="date"><b>AM</b></p>
                            </div>
                            <div className="timeline-line"></div>
                            <div className="timeline-content">
                                <span className="dot-circle"><i className="paychenggong"></i></span>
                                <div className="timeline-con">
                                    <p className="content-en"><span><b>PAYMENT</b> <i>|</i> SUCCESS</span></p>
                                    <p className="conten-cn">支付成功</p>
                                    <p className="conten-nr"><span>等待商家接单</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-main">
                        <div className="timeline-year">

                            <div className="timeline-month">
                                <h3><b>09:12</b></h3>
                                <p className="date"><b>AM</b></p>
                            </div>
                            <div className="timeline-line"></div>
                            <div className="timeline-content">
                                <span className="dot-circle"><i className="orders"></i></span>
                                <div className="timeline-con">
                                    <p className="content-en"><span><b>BUSINESS</b> <i>|</i> ORDERS</span></p>
                                    <p className="conten-cn">商家已接单</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-main">
                        <div className="timeline-year">

                            <div className="timeline-month">
                                <h3><b>09:40</b></h3>
                                <p className="date"><b>AM</b></p>
                            </div>
                            <div className="timeline-line"></div>
                            <div className="timeline-content">
                                <span className="dot-circle"><i className="viacar"></i></span>
                                <div className="timeline-con">
                                    <p className="content-en"><span><b>BUSINESS</b> <i>|</i> VIA CAR</span></p>
                                    <p className="conten-cn">商家已取到车</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-main">
                        <div className="timeline-year">

                            <div className="timeline-month">
                                <h3><b>10:20</b></h3>
                                <p className="date"><b>AM</b></p>
                            </div>
                            <div className="timeline-line"></div>
                            <div className="timeline-content">
                                <span className="dot-circle"><i className="thecar"></i></span>
                                <div className="timeline-con">
                                    <p className="content-en"><span><b>THE CAR</b> <i>|</i> HAS RETURNED</span></p>
                                    <p className="conten-cn">车已归还</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-main">
                        <div className="timeline-year">

                            <div className="timeline-month">
                                <h3><b>10:25</b></h3>
                                <p className="date"><b>AM</b></p>
                            </div>
                            <div className="timeline-line"></div>
                            <div className="timeline-content">
                                <span className="dot-circle"><i className="fulfill"></i></span>
                                <div className="timeline-con">
                                    <p className="content-en"><span><b>ORDER</b> <i>|</i> FULFILLMENT</span></p>
                                    <p className="conten-cn">订单完成</p>
                                    <p className="conten-nr"><span>任何意见和吐槽欢迎联系我们</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Timeline;
