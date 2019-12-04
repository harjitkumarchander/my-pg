import React, { Component } from 'react';
import Topbar from '../componemts/Topbar';
import { Link } from 'react-router-dom';

class CatSingle extends Component {
    render() {
        return (
            <div>
                <Topbar />
	{/* <!-- //header --> */}
	{/* <!-- breadcrumbs --> */}
	<div className="w3layouts-breadcrumbs text-center">
		<div className="container">
			<span className="agile-breadcrumbs"><Link href="index.html"><i className="fa fa-home home_1"></i></Link> / <span>Categories</span></span>
		</div>
	</div>
	{/* <!-- //breadcrumbs --> */}
	{/* <!-- Categories --> */}
	{/* <!--Vertical Tab--> */}
	<div className="categories-section main-grid-border">
		<div className="container">
			<h2 className="w3-head">All Categories</h2>
			<div className="category-list">
				<div id="parentVerticalTab">
					<div className="agileits-tab_nav">
					<ul className="resp-tabs-list hor_1">
						<li>Mobiles</li>
						<li>Electronics & Appliances</li>
						<li>Cars</li>
						<li>Bikes</li>
						<li>Furniture</li>
						<li>Pets</li>
						<li>Books, Sports & Hobbies</li>
						<li>Fashion</li>
						<li>Kids</li>
						<li>Services</li>
						<li>Jobs</li>
						<li>Real Estate</li>
					</ul>
						<Link className="w3ls-ads" href="all-classNameifieds.html">View all Ads</Link>
					</div>
					<div className="resp-tabs-container hor_1">
						<span className="active total" style={{display:"block"}} data-toggle="modal" data-target="#myModal"><strong>All USA</strong> (Select your city to see local ads)</span>
						<div>
							<div className="category">
								<div className="category-img">
									<img src="images/cat1.png" title="image" alt="" />
								</div>
								<div className="category-info">
									<h4>Mobiles</h4>
									<span>5,12,850 Ads</span>
									<Link href="all-classNameifieds.html">View all Ads</Link>
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="sub-categories">
								<ul>
									<li><Link href="mobiles.html">mobile phones</Link></li>
									<li><Link href="mobiles.html">Tablets</Link></li>
									<li><Link href="mobiles.html">Accessories</Link></li>
								</ul>
							</div>
						</div>
						<div>
							<div className="category">
								<div className="category-img">
									<img src="images/cat2.png" title="image" alt="" />
								</div>
								<div className="category-info">
									<h4>Electronics & Appliances</h4>
									<span>2,01,850 Ads</span>
									<Link href="all-classNameifieds.html">View all Ads</Link>
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="sub-categories">
								<ul>
									<li><Link href="electronics-appliances.html">Computers & accessories</Link></li>
									<li><Link href="electronics-appliances.html">Tv - video - audio</Link></li>
									<li><Link href="electronics-appliances.html">Cameras & accessories</Link></li>
									<li><Link href="electronics-appliances.html">Games & Entertainment</Link></li>
									<li><Link href="electronics-appliances.html">Fridge - AC - Washing Machine</Link></li>
									<li><Link href="electronics-appliances.html">Kitchen & Other Appliances</Link></li>
								</ul>
							</div>
						</div>
						<div>
							<div className="category">
								<div className="category-img">
									<img src="images/cat3.png" title="image" alt="" />
								</div>
								<div className="category-info">
									<h4>Cars</h4>
									<span>1,98,080 Ads</span>
									<Link href="all-classNameifieds.html">View all Ads</Link>
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="sub-categories">
								<ul>
									<li><Link href="cars.html">Commercial Vehicles</Link></li>
									<li><Link href="cars.html">Other Vehicles</Link></li>
									<li><Link href="cars.html">Spare Parts</Link></li>
								</ul>
							</div>
						</div>
						<div>
							<div className="category">
								<div className="category-img">
									<img src="images/cat4.png" title="image" alt="" />
								</div>
								<div className="category-info">
									<h4>Bikes</h4>
									<span>6,17,568 Ads</span>
									<Link href="all-classNameifieds.html">View all Ads</Link>
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="sub-categories">
								<ul>
									<li><Link href="bikes.html">Motorcycles</Link></li>
									<li><Link href="bikes.html">Scooters</Link></li>
									<li><Link href="bikes.html">Bicycles</Link></li>
									<li><Link href="bikes.html">Spare Parts</Link></li>
								</ul>
							</div>
						</div>
						<div>
							<div className="category">
								<div className="category-img">
									<img src="images/cat5.png" title="image" alt="" />
								</div>
								<div className="category-info">
									<h4>Furniture</h4>
									<span>1,05,168 Ads</span>
									<Link href="all-classNameifieds.html">View all Ads</Link>
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="sub-categories">
								<ul>
									<li><Link href="furnitures.html">Sofa & Dining</Link></li>
									<li><Link href="furnitures.html">Beds & Wardrobes</Link></li>
									<li><Link href="furnitures.html">Home Decor & Garden</Link></li>
									<li><Link href="furnitures.html">Other Household Items</Link></li>
								</ul>
							</div>
						</div>
						<div>
							<div className="category">
								<div className="category-img">
									<img src="images/cat6.png" title="image" alt="" />
								</div>
								<div className="category-info">
									<h4>Pets</h4>
									<span>1,77,816 Ads</span>
									<Link href="all-classNameifieds.html">View all Ads</Link>
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="sub-categories">
								<ul>
									<li><Link href="pets.html">Dogs</Link></li>
									<li><Link href="pets.html">Aquariums</Link></li>
									<li><Link href="pets.html">Pet Food & Accessories</Link></li>
									<li><Link href="pets.html">Other Pets</Link></li>
								</ul>
							</div>
						</div>
						<div>
							<div className="category">
								<div className="category-img">
									<img src="images/cat7.png" title="image" alt="" />
								</div>
								<div className="category-info">
									<h4>Books, Sports & Hobbies</h4>
									<span>9,58,458 Ads</span>
									<Link href="all-classNameifieds.html">View all Ads</Link>
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="sub-categories">
								<ul>
									<li><Link href="books-sports-hobbies.html">Books & Magazines</Link></li>
									<li><Link href="books-sports-hobbies.html">Musical Instruments</Link></li>
									<li><Link href="books-sports-hobbies.html">Sports Equipment</Link></li>
									<li><Link href="books-sports-hobbies.html">Gym & Fitness</Link></li>
									<li><Link href="books-sports-hobbies.html">Other Hobbies</Link></li>
								</ul>
							</div>
						</div>
						<div>
							<div className="category">
								<div className="category-img">
									<img src="images/cat8.png" title="image" alt="" />
								</div>
								<div className="category-info">
									<h4>Fashion</h4>
									<span>3,52,345 Ads</span>
									<Link href="all-classNameifieds.html">View all Ads</Link>
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="sub-categories">
								<ul>
									<li><Link href="fashion.html">Clothes</Link></li>
									<li><Link href="fashion.html">Footwear</Link></li>
									<li><Link href="fashion.html">Accessories</Link></li>
								</ul>
							</div>
						</div>
						<div>
							<div className="category">
								<div className="category-img">
									<img src="images/cat9.png" title="image" alt="" />
								</div>
								<div className="category-info">
									<h4>Kids</h4>
									<span>8,45,298 Ads</span>
									<Link href="all-classNameifieds.html">View all Ads</Link>
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="sub-categories">
								<ul>
									<li><Link href="kids.html">Furniture And Toys</Link></li>
									<li><Link href="kids.html">Prams & Walkers</Link></li>
									<li><Link href="kids.html">Accessories</Link></li>
								</ul>
							</div>
						</div>
						<div>
							<div className="category">
								<div className="category-img">
									<img src="images/cat10.png" title="image" alt="" />
								</div>
								<div className="category-info">
									<h4>Services</h4>
									<span>7,58,867 Ads</span>
									<Link href="all-classNameifieds.html">View all Ads</Link>
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="sub-categories">
								<ul>
									<li><Link href="services.html">Education & classNamees</Link></li>
									<li><Link href="services.html">Web Development</Link></li>
									<li><Link href="services.html">Electronics & Computer Repair</Link></li>
									<li><Link href="services.html">Maids & Domestic Help</Link></li>
									<li><Link href="services.html">Health & Beauty</Link></li>
									<li><Link href="services.html">Movers & Packers</Link></li>
									<li><Link href="services.html">Drivers & Taxi</Link></li>
									<li><Link href="services.html">Event Services</Link></li>
									<li><Link href="services.html">Other Services</Link></li>
								</ul>
							</div>
						</div>
						<div>
							<div className="category">
								<div className="category-img">
									<img src="images/cat11.png" title="image" alt="" />
								</div>
								<div className="category-info">
									<h4>Jobs</h4>
									<span>5,74,547 Ads</span>
									<Link href="all-classNameifieds.html">View all Ads</Link>
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="sub-categories">
								<ul>
									<li><Link href="jobs.html">Customer Service</Link></li>
									<li><Link href="jobs.html">IT</Link></li>
									<li><Link href="jobs.html">Online</Link></li>
									<li><Link href="jobs.html">Marketing</Link></li>
									<li><Link href="jobs.html">Advertising & PR</Link></li>
									<li><Link href="jobs.html">Sales</Link></li>
									<li><Link href="jobs.html">Clerical & Administration</Link></li>
									<li><Link href="jobs.html">Human Resources</Link></li>
									<li><Link href="jobs.html">Education</Link></li>
									<li><Link href="jobs.html">Hotels & Tourism</Link></li>
									<li><Link href="jobs.html">Accounting & Finance</Link></li>
									<li><Link href="jobs.html">Manufacturing</Link></li>
									<li><Link href="jobs.html">Part - Time</Link></li>
									<li><Link href="jobs.html">Other Jobs</Link></li>
								</ul>
							</div>
						</div>
						<div>
							<div className="category">
								<div className="category-img">
									<img src="images/cat12.png" title="image" alt="" />
								</div>
								<div className="category-info">
									<h4>Real Estate</h4>
									<span>98,156 Ads</span>
									<Link href="all-classNameifieds.html">View all Ads</Link>
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="sub-categories">
								<ul>
									<li><Link href="real-estate.html">Houses</Link></li>
									<li><Link href="real-estate.html">Apartments</Link></li>
									<li><Link href="real-estate.html">PG & Roommates</Link></li>
									<li><Link href="real-estate.html">Land & Plots</Link></li>
									<li><Link href="real-estate.html">Shops - Offices - Commercial Space</Link></li>
									<li><Link href="real-estate.html">Vacation Rentals - Guest Houses</Link></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="clearfix"></div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- //Categories --> */}
	{/* <!--footer section start-->		 */}
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
								<li><Link href="howitworks.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>How it Works</Link></li>						
								<li><Link href="sitemap.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Sitemap</Link></li>
								<li><Link href="faq.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Faq</Link></li>
								<li><Link href="feedback.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Feedback</Link></li>
								<li><Link href="contact.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Contact</Link></li>
								<li><Link href="typography.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Short codes</Link></li>
								<li><Link href="icons.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Icons Page</Link></li>
							</ul>
						</div>
						<div className="col-md-3 wthree-footer-grid">
							<h4 className="footer-head">Information</h4>
							<ul>
								<li><Link href="regions.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Locations Map</Link></li>	
								<li><Link href="terms.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Terms of Use</Link></li>
								<li><Link href="popular-search.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Popular searches</Link></li>	
								<li><Link href="privacy.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Privacy Policy</Link></li>	
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
					<h1><Link href="index.html"><span>Re</span>sale-v2</Link></h1>
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
					<p> © 2016 Resale. All Rights Reserved | Design by  <Link href="http://w3layouts.com/"> W3layouts</Link></p>
				</div>
				<div className="clearfix"></div>
			</div>
		</div>
		</footer>
        {/* <!--footer section end--> */}
            </div>
        )
    }
}
export default CatSingle;