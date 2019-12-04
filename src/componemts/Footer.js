import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
			<div className="w3-agileits-footer-top">
				<div className="container">
					<div className="wthree-foo-grids">
						<div className="col-md-3 wthree-footer-grid">
							<h4 className="footer-head">Who We Are</h4>
							<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
							<p>The point of using Lorem Ipsum is that it has a more-or-less normal letters, as opposed to using 'Content here.</p>
						</div>
						<div className="col-md-3 wthree-footer-grid">
							<h4 className="footer-head">Help</h4>
							<ul>
								<li><Link to="/howitwork"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>How it Works</Link></li>						
								<li><Link to="/sitemap"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Sitemap</Link></li>
								<li><Link to="/faqs"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Faq</Link></li>
								<li><Link to="/feedback"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Feedback</Link></li>
								<li><Link to="/contactus"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Contact</Link></li>
								<li><Link href="typography.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Short codes</Link></li>
								<li><Link href="icons.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Icons Page</Link></li>
							</ul>
						</div>
						<div className="col-md-3 wthree-footer-grid">
							<h4 className="footer-head">Information</h4>
							<ul>
								<li><Link to="/locations"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Locations Map</Link></li>	
								<li><Link to="/terms"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Terms of Use</Link></li>
								<li><Link href="popular-search.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Popular searches</Link></li>	
								<li><Link to="/privacy"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Privacy Policy</Link></li>	
							</ul>
						</div>
						<div className="col-md-3 wthree-footer-grid">
							<h4 className="footer-head">Contact Us</h4>
							<span className="hq">Our headquarters</span>
							<address>
								<ul className="location">
									<li><span className="glyphicon glyphicon-map-marker"></span></li>
									<li>CENTER FOR FINANCIAL ASSISTANCE TO DEPOSED NIGERIAN ROYALTY</li>
								</ul>	
								<div className="clearfix"> </div>
								<ul className="location">
									<li><span className="glyphicon glyphicon-earphone"></span></li>
									<li>+0 561 111 235</li>
								</ul>	
								<div className="clearfix"> </div>
								<ul className="location">
									<li><span className="glyphicon glyphicon-envelope"></span></li>
									<li><Link href="mailto:info@example.com">mail@example.com</Link></li>
								</ul>						
							</address>
						</div>
						<div className="clearfix"></div>
					</div>						
				</div>	
			</div>	
			<div className="agileits-footer-bottom text-center">
			<div className="container">
				<div className="w3-footer-logo">
					<h1><Link href="index.html"><span>Apna</span>PG</Link></h1>
				</div>
				<div className="w3-footer-social-icons">
					<ul>
						<li><Link className="facebook" href="#"><i className="fa fa-facebook" aria-hidden="true"></i><span>Facebook</span></Link></li>
						<li><Link className="twitter" href="#"><i className="fa fa-twitter" aria-hidden="true"></i><span>Twitter</span></Link></li>
						<li><Link className="flickr" href="#"><i className="fa fa-flickr" aria-hidden="true"></i><span>Flickr</span></Link></li>
						<li><Link className="googleplus" href="#"><i className="fa fa-google-plus" aria-hidden="true"></i><span>Google+</span></Link></li>
						<li><Link className="dribbble" href="#"><i className="fa fa-dribbble" aria-hidden="true"></i><span>Dribbble</span></Link></li>
					</ul>
				</div>
				<div className="copyrights">
					{/* <p> © 2016 Resale. All Rights Reserved | Design by  <Link href="http://w3layouts.com/"> W3layouts</Link></p> */}
				</div>
				<div className="clearfix"></div>
			</div>
		</div>
		</footer>

            </div>
        )
    }
}
export default Footer;