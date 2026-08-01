import React from 'react'


function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                    <img src="/media/images/homeHero.svg" alt="Hero" className='mb-5 img-fluid' />
                    <h1 className='mt-5' style={{color: "#1E1E2D", fontWeight: "700"}}>
                        Invest in everything
                    </h1>
                    <p style={{color: "#5A5A5A"}}>
                        Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                    </p>
                    <button 
                        className='zerodha-btn p-2 fs-5 mb-5' 
                        style={{
                            padding: "12px 40px", 
                            margin: "0 auto", 
                            whiteSpace: "nowrap",
                            display: "inline-block",
                            width: "fit-content"
                        }}
                    >
                        Sign up for free
                    </button>
            </div>

        </div>
     );

}
export default Hero;