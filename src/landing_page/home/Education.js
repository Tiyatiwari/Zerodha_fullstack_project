import React from 'react'

function Education() {
    return ( 
        <div className='container my-5 py-5'>
            <div className='row align-items-center'>
                <div className='col-6 text-center'>
                    <img 
                        src="/media/images/education.svg"
                        alt="Varsity" 
                        className='img-fluid'
                        style={{maxWidth: "450px"}}
                    />
                </div>

                <div className='col-6'>
                    <h1 className='mb-4' style={{color: "#1E1E2D", fontWeight: "700", fontSize: "2rem"}}>
                        Free and open market education
                    </h1>

                    <p style={{color: "#5A5A5A"}}>
                        Varsity, the largest online stock market education book in the world 
                        covering everything from the basics to advanced trading.
                    </p>
                    <a href='' style={{textDecoration: "none", color: "#387ED1"}}>
                        Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>

                    <p className='mt-4' style={{color: "#5A5A5A"}}>
                        TradingQ&A, the most active trading and investment community in 
                        India for all your market related queries.
                    </p>
                    <a href='' style={{textDecoration: "none", color: "#387ED1"}}>
                        TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
     );
}

export default Education;