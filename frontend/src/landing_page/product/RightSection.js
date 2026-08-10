import React from "react";

function RightSection({
  imageURL,
  productName,
  productDesription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-12 col-md-6 col-lg-5 p-3 p-md-5 order-2 order-md-1">
          <h1>{productName}</h1>

          <p className="mt-4">{productDesription}</p>

          <div className="mt-4">
            <a href={learnMore} className="product-link">
              Learn More{" "}
              <i
                className="fa fa-long-arrow-right ms-2"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-12 col-md-6 col-lg-6 offset-lg-1 text-center mb-4 mb-md-0 order-1 order-md-2">
          <img
            src={imageURL}
            className="img-fluid"
            alt={productName}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;