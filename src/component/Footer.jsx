import React from 'react';

const Footer = () => {
  return (
    <div className="wrapper">
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <h5 className="text-uppercase mb-4"><strong>ClassicCarsSwitch</strong></h5>
              <p className="text-muted">Discover the charm of classic cars with ClassicCarsSwitch. Your gateway to timeless automotive elegance.</p>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <h5 className="text-uppercase mb-4">Quick Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#" className="text-muted">Home</a>
                </li>
                <li>
                  <a href="#" className="text-muted">Featured Cars</a>
                </li>
                <li>
                  <a href="#" className="text-muted">Contact</a>
                </li>
                <li>
                  <a href="#" className="text-muted">About Us</a>
                </li>
                <li>
                  <a href="#" className="text-muted">Terms</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <h5 className="text-uppercase mb-4">Contact Us</h5>
              <p className="text-muted mb-4">Have questions? Feel free to reach out to our team.</p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="#" className="text-muted">Email</a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-muted">Phone</a>
                </li>
              </ul>
            </div>
            <div className=" py-4">
          <div className="container">
            <div className="row text-muted">
              <div className="col-md-6">
                <p className="mb-0">&copy; {new Date().getFullYear()} ClassicCarsSwitch. All rights reserved.</p>
              </div>
              <div className="col-md-6">
                <ul className="list-inline float-md-end mb-0">
                  <li className="list-inline-item">
                    <a href="#" className="text-muted">Privacy Policy</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="text-muted">Cookie Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
        

       
      </footer>
    </div>
  );
};

export default Footer;
