import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-lg-6 col-md-6 text-center mb-4 mb-md-0">
          <img
            src={imageURL}
            className="img-fluid"
            alt={productName}
          />
        </div>

        {/* Right Content */}
        <div className="col-lg-5 offset-lg-1 col-md-6">
          <h1>{productName}</h1>

          <p className="mt-4">
            {productDesription}
          </p>

          <div className="mt-4">
            <a href={tryDemo} className="product-link">
              Try Demo{" "}
              <i
                className="fa fa-long-arrow-right ms-2"
                aria-hidden="true"
              ></i>
            </a>

            <a href={learnMore} className="product-link ms-5">
              Learn More{" "}
              <i
                className="fa fa-long-arrow-right ms-2"
                aria-hidden="true"
              ></i>
            </a>
          </div>

          <div className="mt-4">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
              />
            </a>

            <a href={appStore} className="ms-4">
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;