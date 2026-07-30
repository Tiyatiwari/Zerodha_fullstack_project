import React from 'react';

function OpenAccount() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5' style={{color: "#1E1E2D", fontWeight: "700"}}>
                    Open a Zerodha account
                </h1>
                <p style={{color: "#5A5A5A"}}>
                    Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                </p>
                <button className='zerodha-btn p-2 fs-5 mb-5' style={{width: "20%", margin: "0 auto"}}>
                    Sign up Now
                </button>
            </div>

        </div>
    );
}

export default OpenAccount;