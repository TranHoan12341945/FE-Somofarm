import React from 'react';
import { Link } from 'react-router-dom';

// import './css/bootstrap.min.css';
// import './css/animate.css';
// import './css/owl.carousel.min.css';
// import './css/aos.css';
// import './css/bootstrap-datepicker.css';
// import './css/jquery.timepicker.css';
// import './css/fancybox.min.css';
// import './fonts/ionicons/css/ionicons.min.css';
// import './fonts/fontawesome/css/font-awesome.min.css';
// import './css/style.css';

const Home = () => {
  return (
    <>
      <header className="site-header js-site-header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-6 col-lg-4 site-logo" data-aos="fade">
              <Link to="/">Sogo Hotel</Link>
            </div>
            <div className="col-6 col-lg-8">
              <div className="site-menu-toggle js-site-menu-toggle" data-aos="fade">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="site-navbar js-site-navbar">
                <nav role="navigation">
                  <div className="container">
                    <div className="row full-height align-items-center">
                      <div className="col-md-6 mx-auto">
                        <ul className="list-unstyled menu">
                          <li className="active"><Link to="/">Home</Link></li>
                          <li><Link to="/rooms">Rooms</Link></li>
                          <li><Link to="/about">About</Link></li>
                          <li><Link to="/events">Events</Link></li>
                          <li><Link to="/contact">Contact</Link></li>
                          <li><Link to="/reservation">Reservation</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="site-hero overlay" style={{ backgroundImage: 'url(images/hero_4.jpg)' }} data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row site-hero-inner justify-content-center align-items-center">
            <div className="col-md-10 text-center" data-aos="fade-up">
              <span className="custom-caption text-uppercase text-white d-block mb-3">Welcome To 5 <span className="fa fa-star text-primary"></span>   Hotel</span>
              <h1 className="heading">A Best Place To Stay</h1>
            </div>
          </div>
          <a className="mouse smoothscroll" href="#next">
            <div className="mouse-icon">
              <span className="mouse-wheel"></span>
            </div>
          </a>
        </div>
      </section>

      <section className="section bg-light pb-0">
        <div className="container">
          <div className="row check-availabilty" id="next">
            <div className="block-32" data-aos="fade-up" data-aos-offset="-200">
              <form action="#">
                <div className="row">
                  <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
                    <label for="checkin_date" className="font-weight-bold text-black">Check In</label>
                    <div className="field-icon-wrap">
                      <div className="icon"><span className="icon-calendar"></span></div>
                      <input type="text" id="checkin_date" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
                    <label for="checkout_date" className="font-weight-bold text-black">Check Out</label>
                    <div className="field-icon-wrap">
                      <div className="icon"><span className="icon-calendar"></span></div>
                      <input type="text" id="checkout_date" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3 mb-md-0 col-lg-3">
                    <div className="row">
                      <div className="col-md-6 mb-3 mb-md-0">
                        <label for="adults" className="font-weight-bold text-black">Adults</label>
                        <div className="field-icon-wrap">
                          <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                          <select id="adults" className="form-control">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4+</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 mb-3 mb-md-0">
                        <label for="children" className="font-weight-bold text-black">Children</label>
                        <div className="field-icon-wrap">
                          <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                          <select id="children" className="form-control">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4+</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 align-self-end">
                    <button type="submit" className="btn btn-primary btn-block text-white">Check Availabilty</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>



      {/* Additional sections would follow similar conversion patterns. */}
      {/* Ensure you handle scripts and interactivity within React's lifecycle. For instance, jQuery can be replaced with React state, refs, or libraries like react-slick for carousels. */}

      <footer className="section footer-section">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-3 mb-5">
              <ul className="list-unstyled link">
                <li><Link to="#">About Us</Link></li>
                <li><Link to="#">Terms & Conditions</Link></li>
                <li><Link to="#">Privacy Policy</Link></li>
                <li><Link to="#">Rooms</Link></li>
              </ul>
            </div>
            <div className="col-md-3 mb-5">
              <ul className="list-unstyled link">
                <li><Link to="#">The Rooms & Suites</Link></li>
                <li><Link to="#">About Us</Link></li>
                <li><Link to="#">Contact Us</Link></li>
                <li><Link to="#">Restaurant</Link></li>
              </ul>
            </div>
            <div className="col-md-3 mb-5 pr-md-5 contact-info">
              <p><span className="d-block"><span className="ion-ios-location h5 mr-3 text-primary"></span>Address:</span> <span> 198 West 21th Street, Suite 721 New York NY 10016</span></p>
              <p><span className="d-block"><span className="ion-ios-telephone h5 mr-3 text-primary"></span>Phone:</span> <span>(+1) 435 3533</span></p>
              <p><span className="d-block"><span className="ion-ios-email h5 mr-3 text-primary"></span>Email:</span> <span> info@domain.com</span></p>
            </div>
            <div className="col-md-3 mb-5">
              <p>Sign up for our newsletter</p>
              <form className="footer-newsletter">
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Email..." />
                  <button type="submit" className="btn"><span className="fa fa-paper-plane"></span></button>
                </div>
              </form>
            </div>
          </div>
          <div className="row pt-5">
            <p className="col-md-6 text-left">
              &copy;{new Date().getFullYear()} All rights reserved | This template is made with <i className="icon-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
            </p>
            <p className="col-md-6 text-right social">
              <a href="#"><span className="fa fa-tripadvisor"></span></a>
              <a href="#"><span className="fa fa-facebook"></span></a>
              <a href="#"><span className="fa fa-twitter"></span></a>
              <a href="#"><span className="fa fa-linkedin"></span></a>
              <a href="#"><span className="fa fa-vimeo"></span></a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;