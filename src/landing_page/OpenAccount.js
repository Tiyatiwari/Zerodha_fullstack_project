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

            <style>{`
                .zerodha-btn {
                    background-color: #387ED1;
                    color: #ffffff;
                    border: none;
                    border-radius: 4px;
                    transition: background-color 0.2s ease, transform 0.1s ease;
                }

                .zerodha-btn:hover {
                    background-color: #2E6BB8;
                }

                .zerodha-btn:active {
                    background-color: #1F4F8F;
                    transform: scale(0.98);
                }

                .zerodha-btn:focus {
                    outline: none;
                    box-shadow: 0 0 0 3px rgba(56, 126, 209, 0.3);
                }
            `}</style>
        </div>
    );
}

export default OpenAccount;