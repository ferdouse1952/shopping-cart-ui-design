import React from "react";
import "./ProductSection.css";
const ProductSection = () => {
  return (
    <>
      <section className="section-products pt-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8 col-lg-6">
              <div className="header">
                <h3>Featured Product</h3>
                <h2>Popular Products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div id="product-1" className="single-product">
                {/* <div className="part-1">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fas fa-shopping-cart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-expand"></i>
                      </a>
                    </li>
                  </ul>
                </div> */}
                {/* <div className="part-2">
                  <h3 className="product-title">Here Product Title</h3>
                  <h4 className="product-old-price">$79.99</h4>
                  <h4 className="product-price">$49.99</h4>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSection;
