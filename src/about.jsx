import React from 'react';
import { Link } from 'react-router-dom';
import './css/bootstrap.min.css';
import './css/animate.css';
import './css/owl.carousel.min.css';
import './css/aos.css';
import './css/bootstrap-datepicker.css';
import './css/jquery.timepicker.css';
import './css/fancybox.min.css';
import './fonts/ionicons/css/ionicons.min.css';
import './fonts/fontawesome/css/font-awesome.min.css';
import './css/style.css';


const About = () => {
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
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="/rooms">Rooms</Link></li>
                          <li className="active"><Link to="/about">About</Link></li>
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

      <section className="site-hero inner-page overlay" style={{ backgroundImage: 'url(images/hero_4.jpg)' }} data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row site-hero-inner justify-content-center align-items-center">
            <div className="col-md-10 text-center" data-aos="fade">
              <h1 className="heading mb-3">About Us</h1>
              <ul className="custom-breadcrumbs mb-4">
                <li><Link to="/">Home</Link></li>
                <li>&bullet;</li>
                <li>About</li>
              </ul>
            </div>
          </div>
        </div>

        <a className="mouse smoothscroll" href="#next">
          <div className="mouse-icon">
            <span className="mouse-wheel"></span>
          </div>
        </a>
      </section>

      <section className="py-5 bg-light" id="next">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-7 ml-auto order-lg-2 position-relative mb-5" data-aos="fade-up">
              <figure className="img-absolute">
                <img src="images/food-1.jpg" alt="Free Website Template by Templateux" className="img-fluid" />
              </figure>
              <img src="images/img_1.jpg" alt="Image" className="img-fluid rounded" />
            </div>
            <div className="col-md-12 col-lg-4 order-lg-1" data-aos="fade-up">
              <h2 className="heading">Welcome!</h2>
              <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p>
                <a href="#" className="btn btn-primary text-white py-2 mr-3">Learn More</a>
                <span className="mr-3 font-family-serif"><em>or</em></span>
                <a href="https://vimeo.com/channels/staffpicks/93951774" data-fancybox className="text-uppercase letter-spacing-1">See video</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container section">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-7 mb-5">
            <h2 className="heading" data-aos="fade-up">Leadership</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="block-2">
              <div className="flipper">
                <div className="front" style={{ backgroundImage: 'url(images/person_3.jpg)' }}>
                  <div className="box">
                    <h2>Will Peters</h2>
                    <p>President</p>
                  </div>
                </div>
                <div className="back">
                  <blockquote>
                    <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.&rdquo;</p>
                  </blockquote>
                  <div className="author d-flex">
                    <div className="image mr-3 align-self-center">
                      <img src="images/person_3.jpg" alt="" />
                    </div>
                    <div className="name align-self-center">Will Peters <span className="position">President</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="block-2">
              <div className="flipper">
                <div className="front" style={{ backgroundImage: 'url(images/person_1.jpg)' }}>
                  <div className="box">
                    <h2>Jane Williams</h2>
                    <p>Business Manager</p>
                  </div>
                </div>
                <div className="back">
                  <blockquote>
                    <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.&rdquo;</p>
                  </blockquote>
                  <div className="author d-flex">
                    <div className="image mr-3 align-self-center">
                      <img src="images/person_1.jpg" alt="" />
                    </div>
                    <div className="name align-self-center">Jane Williams <span className="position">Business Manager</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div className="block-2">
              <div className="flipper">
                <div className="front" style={{ backgroundImage: 'url(images/person_2.jpg)' }}>
                  <div className="box">
                    <h2>Jeffrey Neddery</h2>
                    <p>Marketing Director</p>
                  </div>
                </div>
                <div className="back">
                  <blockquote>
                    <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.&rdquo;</p>
                  </blockquote>
                  <div className="author d-flex">
                    <div className="image mr-3 align-self-center">
                      <img src="images/person_2.jpg" alt="" />
                    </div>
                    <div className="name align-self-center">Jeffrey Neddery <span className="position">Marketing Director</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section slider-section bg-light">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-md-7">
              <h2 className="heading" data-aos="fade-up">Photos</h2>
              <p data-aos="fade-up" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="home-slider major-caousel owl-carousel mb-5" data-aos="fade-up" data-aos-delay="200">
                <div className="slider-item">
                  <a href="images/slider-1.jpg" data-fancybox="images" data-caption="Caption for this image"><img src="images/slider-1.jpg" alt="Image placeholder" className="img-fluid" /></a>
                </div>
                <div className="slider-item">
                  <a href="images/slider-2.jpg" data-fancybox="images" data-caption="Caption for this image"><img src="images/slider-2.jpg" alt="Image placeholder" className="img-fluid" /></a>
                </div>
                <div className="slider-item">
                  <a href="images/slider-3.jpg" data-fancybox="images" data-caption="Caption for this image"><img src="images/slider-3.jpg" alt="Image placeholder" className="img-fluid" /></a>
                </div>
                <div className="slider-item">
                  <a href="images/slider-4.jpg" data-fancybox="images" data-caption="Caption for this image"><img src="images/slider-4.jpg" alt="Image placeholder" className="img-fluid" /></a>
                </div>
                <div className="slider-item">
                  <a href="images/slider-5.jpg" data-fancybox="images" data-caption="Caption for this image"><img src="images/slider-5.jpg" alt="Image placeholder" className="img-fluid" /></a>
                </div>
                <div className="slider-item">
                  <a href="images/slider-6.jpg" data-fancybox="images" data-caption="Caption for this image"><img src="images/slider-6.jpg" alt="Image placeholder" className="img-fluid" /></a>
                </div>
                <div className="slider-item">
                  <a href="images/slider-7.jpg" data-fancybox="images" data-caption="Caption for this image"><img src="images/slider-7.jpg" alt="Image placeholder" className="img-fluid" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-md-7 mb-5">
              <h2 className="heading" data-aos="fade">History</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="timeline-item" date-is="2019" data-aos="fade">
                <h3>More Branches Worldwide</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              </div>
              <div className="timeline-item" date-is="2011" data-aos="fade">
                <h3>Company Full Blast</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              </div>
              <div className="timeline-item" date-is="2008" data-aos="fade">
                <h3>The Birth of the Company</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section bg-image overlay" style={{ backgroundImage: 'url(images/hero_4.jpg)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center mb-4 mb-md-0 text-md-left" data-aos="fade-up">
              <h2 className="text-white font-weight-bold">A Best Place To Stay. Reserve Now!</h2>
            </div>
            <div className="col-12 col-md-6 text-center text-md-right" data-aos="fade-up" data-aos-delay="200">
              <Link to="/reservation" className="btn btn-outline-white-primary py-3 text-white px-5">Reserve Now</Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="section footer-section">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-3 mb-5">
              <ul className="list-unstyled link">
                <li><Link to="#">About Us</Link></li>
                <li><Link to="#">Terms &amp; Conditions</Link></li>
                <li><Link to="#">Privacy Policy</Link></li>
                <li><Link to="#">Rooms</Link></li>
              </ul>
            </div>
            <div className="col-md-3 mb-5">
              <ul className="list-unstyled link">
                <li><Link to="#">The Rooms &amp; Suites</Link></li>
                <li><Link to="#">About Us</Link></li>
                <li><Link to="#">Contact Us</Link></li>
                <li><Link to="#">Restaurant</Link></li>
              </ul>
            </div>
            <div className="col-md-3 mb-5 pr-md-5 contact-info">
              <p><span className="d-block"><span className="ion-ios-location h5 mr-3 text-primary"></span>Address:</span> <span> 198 West 21th Street, <br /> Suite 721 New York NY 10016</span></p>
              <p><span className="d-block"><span className="ion-ios-telephone h5 mr-3 text-primary"></span>Phone:</span> <span> (+1) 435 3533</span></p>
              <p><span className="d-block"><span className="ion-ios-email h5 mr-3 text-primary"></span>Email:</span> <span> info@domain.com</span></p>
            </div>
            <div className="col-md-3 mb-5">
              <p>Sign up for our newsletter</p>
              <form action="#" className="footer-newsletter">
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Email..." />
                  <button type="submit" className="btn"><span className="fa fa-paper-plane"></span></button>
                </div>
              </form>
            </div>
          </div>
          <div className="row pt-5">
            <p className="col-md-6 text-left">
              &copy;{new Date().getFullYear()} All rights reserved | This template is made with <i className="icon-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noreferrer">Colorlib</a>
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

export default About;