import React from 'react'

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3' style={{color: "#1E1E2D", fontWeight: "700"}}>
                        Unbeatable pricing
                    </h1>
                    <p style={{color: "#5A5A5A"}}>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href='' className='mx-5' style={{textDecoration: "none", color: "#387ED1"}}>
                        See pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-centre'>
                        <div className='col'>
                            <h1 style={{color: "#FF6B00", fontWeight: "700"}}>
                                <i className="fa fa-inr" aria-hidden="true"></i>0
                            </h1>
                            <p style={{color: "#5A5A5A"}}>
                                Free account opening
                            </p>
                        </div>
                        <div className='col'>
                            <h1 style={{color: "#FF6B00", fontWeight: "700"}}>
                                <i className="fa fa-inr" aria-hidden="true"></i>0
                            </h1>
                            <p style={{color: "#5A5A5A"}}>
                                Free equity delivery and direct mutual funds
                            </p>
                        </div>
                        <div className='col'>
                            <h1 style={{color: "#FF6B00", fontWeight: "700"}}>
                                <i className="fa fa-inr" aria-hidden="true"></i>20
                            </h1>
                            <p style={{color: "#5A5A5A"}}>
                                Intraday and F&O
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;