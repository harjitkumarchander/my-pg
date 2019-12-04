import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import '../css/style.css';
// import '../css/Sidebar.css';
import '../css/menu_sideslide.css';
import '../css/flexslider.css';
import '../css/bootstrap-select.css';
import '../css/bootstrap.min.css';
import '../css/font-awesome.min.css';
import '../css/easy-responsive-tabs.css';
import '../css/jquery-ui1.css';
import '../css/jquery.uls.css';
import '../css/jquery.uls.grid.css';
import '../css/jquery.uls.lcd.css';
import Topbar from './Topbar';
import Footer from './Footer';
import jQuery from 'jquery';
window.jQuery = jQuery;

class Mainpage extends Component {
    render() {
        return (
            <div>
		<Topbar />
		<div className="slider">
			<ul className="rslides" id="slider">
				<li>
					<div className="w3ls-slide-text">
						<h3>Look online PG anytime</h3>
						<Link to="/" className="w3layouts-explore-all">Browse all Categories</Link>
					</div>
				</li>
				<li>
					<div className="w3ls-slide-text">
						<h3>Find the Best Deals Here</h3>
						<Link to="/" className="w3layouts-explore">Explore</Link>
					</div>
				</li>
				<li>
					<div className="w3ls-slide-text">
						<h3>The Easiest Way to get a PG</h3>
						<Link to="/" className="w3layouts-explore">Find a PG</Link>
					</div>
				</li>
			</ul>
		</div>
		{/* <!-- //Slider --> */}
		{/* <!-- content-starts-here --> */}
		<div className="main-content">
			<div className="w3-categories">
				<h3>Best Deals & Quick Search</h3>
				<div className="container">
					<div className="col-md-3">
						<div className="focus-grid w3layouts-boder1">
							<Link className="btn-8" to="/singleresult">
								<div className="focus-border">
									<div className="focus-layout">
										<div className="focus-image"><i className="fa fa-home"></i></div>
										<h4 className="clrchg">Jalandhar 1</h4>
									</div>
								</div>
							</Link>
						</div>
					</div>
					<div className="col-md-3">
						<div className="focus-grid w3layouts-boder2">	
						<Link className="btn-8" to="/singleresult">
							<div className="focus-border">
								<div className="focus-layout">
									<div className="focus-image"><i className="fa fa-home"></i></div>
									<h4 className="clrchg"> Jalandhar 2</h4>
								</div>
							</div>
						</Link>
					</div>
					</div>
					<div className="col-md-3">
					<div className="focus-grid w3layouts-boder3">
						<Link className="btn-8" to="/singleresult">
							<div className="focus-border">
								<div className="focus-layout">
									<div className="focus-image"><i className="fa fa-home"></i></div>
									<h4 className="clrchg">Jalandhar 3</h4>
								</div>
							</div>
						</Link>
					</div>	
					</div>
					<div className="col-md-3">
					<div className="focus-grid w3layouts-boder4">
						<Link className="btn-8" to="/singleresult">
							<div className="focus-border">
								<div className="focus-layout">
									<div className="focus-image"><i className="fa fa-home"></i></div>
									<h4 className="clrchg">Jalandhar 4</h4>
								</div>
							</div>
						</Link>
					</div>	
					</div>
					<div className="col-md-3">
					<div className="focus-grid w3layouts-boder5">
						<Link className="btn-8" to="/singleresult">
							<div className="focus-border">
								<div className="focus-layout">
									<div className="focus-image"><i className="fa fa-home"></i></div>
									<h4 className="clrchg">Jalandhar 5</h4>
								</div>
							</div>
						</Link>
					</div>
					</div>
					<div className="col-md-3">
					<div className="focus-grid w3layouts-boder6">
						<Link className="btn-8" to="/singleresult">
							<div className="focus-border">
								<div className="focus-layout">
									<div className="focus-image"><i className="fa fa-home"></i></div>
									<h4 className="clrchg">Jalandhar 6</h4>
								</div>
							</div>
						</Link>
					</div>	
					</div>
					<div className="col-md-3">
					<div className="focus-grid w3layouts-boder7">
						<Link className="btn-8" to="/singleresult">
							<div className="focus-border">
								<div className="focus-layout">
									<div className="focus-image"><i className="fa fa-home"></i></div>
									<h4 className="clrchg">Jalandhar 7</h4>
								</div>
							</div>
						</Link>
					</div>	
					</div>
					<div className="col-md-3">
					<div className="focus-grid w3layouts-boder8">
						<Link className="btn-8" to="/singleresult">
							<div className="focus-border">
								<div className="focus-layout">
									<div className="focus-image"><i className="fa fa-home"></i></div>
									<h4 className="clrchg">Jalandhar 8</h4>
								</div>
							</div>
						</Link>
					</div>	
					</div>
					<div className="col-md-3">
					<div className="focus-grid w3layouts-boder9">
						<Link className="btn-8" to="/singleresult">
							<div className="focus-border">
								<div className="focus-layout">
									<div className="focus-image"><i className="fa fa-home"></i></div>
									<h4 className="clrchg">Jalandhar 9</h4>
								</div>
							</div>
						</Link>
					</div>	
					</div>
					<div className="col-md-3">
					<div className="focus-grid w3layouts-boder10">
						<Link className="btn-8" to="/singleresult">
							<div className="focus-border">
								<div className="focus-layout">
									<div className="focus-image"><i className="fa fa-home"></i></div>
									<h4 className="clrchg">Jalandhar 10</h4>
								</div>
							</div>
						</Link>
					</div>
					</div>
					<div className="col-md-3">
					<div className="focus-grid w3layouts-boder11">
						<Link className="btn-8" to="/singleresult">
							<div className="focus-border">
								<div className="focus-layout">
									<div className="focus-image"><i className="fa fa-home"></i></div>
									<h4 className="clrchg">Jalandhar 11</h4>
								</div>
							</div>
						</Link>
					</div>
					</div>
					<div className="col-md-3">
					<div className="focus-grid w3layouts-boder12">
						<Link className="btn-8" to="/singleresult">
							<div className="focus-border">
								<div className="focus-layout">
									<div className="focus-image"><i className="fa fa-home"></i></div>
									<h4 className="clrchg">Jalandhar 12</h4>
								</div>
							</div>
						</Link>
					</div>
					</div>
					<div className="clearfix"></div>
				</div>
			</div>
			{/* <!-- most-popular-ads --> */}
			<div className="w3l-popular-ads">  
				<h3>Most Popular PG</h3>
				 <div className="w3l-popular-ads-info">
					<div className="col-md-4 w3ls-portfolio-left">
						<div className="portfolio-img event-img">
							<img src={require("../images/pg-pic.jpeg")} className ="img-responsive" alt="" />
							<div className="over-image"></div>
						</div>
						<div className="portfolio-description">
						   <h4><Link href="cars.html">Boys Only</Link></h4>
						   <p>Jalandhar</p>
							<Link href="cars.html">
								<span>Explore</span>
							</Link>
						</div>
						<div className="clearfix"> </div>
					</div>
					<div className="col-md-4 w3ls-portfolio-left">
						<div className="portfolio-img event-img">
							<img src={require("../images/pg-pic.jpeg")} className="img-responsive" alt="" />
							 <div className="over-image"></div>
						</div>
						<div className="portfolio-description">
						   <h4><Link href="real-estate.html">Boys Only</Link></h4>
						   <p>Jalandhar</p>
							<Link href="real-estate.html">
								<span>Explore</span>
							</Link>
						</div>
						<div className="clearfix"> </div>
					</div>
					<div className="col-md-4 w3ls-portfolio-left">
						<div className="portfolio-img event-img">
							<img src={require("../images/pg-pic.jpeg")} className="img-responsive" alt="" />
							 <div className="over-image"></div>
						</div>
						<div className="portfolio-description">
						   <h4><Link href="jobs.html">Boys Only</Link></h4>
						   <p>Jalandhar</p>
							<Link href="jobs.html">
								<span>Explore</span>
							</Link>
						</div>
						<div className="clearfix"> </div>
					</div>
					<div className="col-md-4 w3ls-portfolio-left">
						<div className="portfolio-img event-img">
							<img src={require("../images/pg-pic.jpeg")} className="img-responsive" alt="" />
							 <div className="over-image"></div>
						</div>
						<div className="portfolio-description">
						   <h4><Link href="electronics-appliances.html">Girls Only</Link></h4>
						   <p>Jalandhar</p>
							<Link href="electronics-appliances.html">
								<span>Explore</span>
							</Link>
						</div>
						<div className="clearfix"> </div>
					</div>
					<div className="col-md-4 w3ls-portfolio-left">
						<div className="portfolio-img event-img">
							<img src={require("../images/pg-pic.jpeg")} className="img-responsive" alt="" />
							 <div className="over-image"></div>
						</div>
						<div className="portfolio-description">
						   <h4><Link href="furnitures.html">Girls Only</Link></h4>
						   <p>Jalandhar</p>
							<Link href="furnitures.html">
								<span>Explore</span>
							</Link>
						</div>
						<div className="clearfix"> </div>
					</div>
					<div className="col-md-4 w3ls-portfolio-left">
						<div className="portfolio-img event-img">
							<img src={require("../images/pg-pic.jpeg")} className="img-responsive" alt="" />
							 <div className="over-image"></div>
						</div>
						<div className="portfolio-description">
						   <h4><Link href="fashion.html">Girls Only</Link></h4>
						   <p>Jalandhar</p>
							<Link href="fashion.html">
								<span>Explore</span>
							</Link>
						</div>
						<div className="clearfix"> </div>
					</div>
					<div className="clearfix"> </div>
				 </div>
			 </div>
			{/* <!-- most-popular-ads -->									 */}
			<div className="trending-ads">
				<div className="container">
				{/* <!-- slider --> */}
				<div className="agile-trend-ads">
					<h2>Available Services</h2>
							<ul id="flexiselDemo3">
								<li>
									<div className="col-md-3 biseller-column">
										<Link href="single.html">
											<img src={require("../images/p1.jpg")} alt="" />
											<span className="price">&#36; 450</span>
										</Link> 
										<div className="w3-ad-info">
											<h5>High Speed Internet</h5>
											<span>1 hour ago</span>
										</div>
									</div>
									<div className="col-md-3 biseller-column">
										<Link href="single.html">
											<img src={require("../images/p1.jpg")} alt="" />
											<span className="price">&#36; 399</span>
										</Link> 
										<div className="w3-ad-info">
											<h5>Breakfast</h5>
											<span>3 hour ago</span>
										</div>
									</div>
									<div className="col-md-3 biseller-column">
										<Link href="single.html">
											<img src={require("../images/p1.jpg")} alt="" />
											<span className="price">&#36; 199</span>
										</Link> 
										<div className="w3-ad-info">
											<h5>24x7 Security</h5>
											<span>8 hour ago</span>
										</div>
									</div>
									<div className="col-md-3 biseller-column">
										<Link href="single.html">
											<img src={require("../images/p1.jpg")} alt="" />
											<span className="price">&#36; 159</span>
										</Link> 
										<div className="w3-ad-info">
											<h5>Regular Cleaning</h5>
											<span>19 hour ago</span>
										</div>
									</div>
								</li>
								<li>
									<div className="col-md-3 biseller-column">
										<Link href="single.html">
											<img src={require("../images/p1.jpg")} alt="" />
											<span className="price">&#36; 1599</span>
										</Link> 
										<div className="w3-ad-info">
											<h5>24x7 Power Backup</h5>
											<span>1 hour ago</span>
										</div>
									</div>
									<div className="col-md-3 biseller-column">
										<Link href="single.html">
											<img src={require("../images/p1.jpg")} alt="" />
											<span className="price">&#36; 1099</span>
										</Link> 
										<div className="w3-ad-info">
											<h5>2-Wheeler Parking</h5>
											<span>1 day ago</span>
										</div>
									</div>
									<div className="col-md-3 biseller-column">
										<Link href="single.html">
											<img src={require("../images/p1.jpg")} alt="" />
											<span className="price">&#36; 109</span>
										</Link> 
										<div className="w3-ad-info">
											<h5>Fully Furnished</h5>
											<span>9 hour ago</span>
										</div>
									</div>
									<div className="col-md-3 biseller-column">
										<Link href="single.html">
											<img src={require("../images/p1.jpg")} alt="" />
											<span className="price">&#36; 189</span>
										</Link> 
										<div className="w3-ad-info">
											<h5>Spotless Linen</h5>
											<span>3 hour ago</span>
										</div>
									</div>
								</li>
						</ul>
					</div>   
			</div>
			{/* <!-- //slider -->				 */}
			</div>
			{/* <!--partners--> */}
			<div className="w3layouts-partners">
				<h3>Our Partners</h3>
					<div className="container">
						<ul>
							<li><Link href="#"><img className="img-responsive" src={require("../images/p-1.png")} alt="" /></Link></li>
							<li><Link href="#"><img className="img-responsive" src={require("../images/p-2.png")} alt="" /></Link></li>
							<li><Link href="#"><img className="img-responsive" src={require("../images/p-3.png")} alt="" /></Link></li>
							<li><Link href="#"><img className="img-responsive" src={require("../images/p-4.png")} alt="" /></Link></li>
							<li><Link href="#"><img className="img-responsive" src={require("../images/p-5.png")} alt="" /></Link></li>
							<li><Link href="#"><img className="img-responsive" src={require("../images/p-6.png")} alt="" /></Link></li>
							<li><Link href="#"><img className="img-responsive" src={require("../images/p-7.png")} alt="" /></Link></li>
							<li><Link href="#"><img className="img-responsive" src={require("../images/p-8.png")} alt="" /></Link></li>
							<li><Link href="#"><img className="img-responsive" src={require("../images/p-9.png")} alt="" /></Link></li>
							<li><Link href="#"><img className="img-responsive" src={require("../images/p-10.png")} alt="" /></Link></li>	
						</ul>
					</div>
				</div>	
		{/* <!--//partners-->	 */}
		{/* <!-- mobile app --> */}
			<div className="agile-info-mobile-app">
				<div className="container">
					<div className="col-md-5 w3-app-left">
						<Link to="/mobileapp"><img src={require("../images/pg-pic.jpeg")} alt="" /></Link>
					</div>
					<div className="col-md-7 w3-app-right">
						<h3>ApnaPG App is the <span>Easiest</span> way for finding best PG</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor Sed bibendum varius euismod. Integer eget turpis sit amet lorem rutrum ullamcorper sed sed dui. vestibulum odio at elementum. Suspendisse et condimentum nibh.</p>
						<div className="agileits-dwld-app">
							<h6>Download The App : 
								<Link to="/mobileapp"><i className="fa fa-apple"></i></Link>
								<Link to="/mobileapp"><i className="fa fa-windows"></i></Link>
								<Link to="/mobileapp"><i className="fa fa-android"></i></Link>
							</h6>
						</div>
					</div>
					<div className="clearfix"></div>
				</div>
			</div>
			{/* <!-- //mobile app --> */}
		</div>
		{/* <!--footer section start-->		 */}
		<Footer />
		        {/* <!--footer section end--> */}
        {/* </li> */}
            </div>
        );
    }
}
export default Mainpage;