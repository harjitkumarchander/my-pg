import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Topbar from './Topbar';
import Footer from './Footer';
import $ from 'jquery';
// import flexslider from '../js/jquery.flexslider';

class Singleresult extends Component {

    componentDidMount(){
            const script = document.createElement("script");
            script.src = "js/jquery.min.js";
            script.async = true;
            script.onload = () => this.scriptLoaded();
            
        }
        scriptLoaded(){
        $(window).load(function() {
            $('.flexslider').flexslider({
              animation: "slide",
              controlNav: "thumbnails",
            });
          });
        }

    render() {
        return (
            <div>
                <Topbar />
                <div className="w3layouts-breadcrumbs text-center">
		<div className="container">
			<span className="agile-breadcrumbs">
			<Link to="/"><i className="fa fa-home home_1"></i></Link> / 
			<Link href="all-classifieds.html">All Ads</Link> / 
			<Link href="cars.html">Cars</Link> / 
			<span>Car name</span></span>
		</div>
	</div>
	<div className="single-page main-grid-border">
		<div className="container">
			<div className="product-desc">
				<div className="col-md-7 product-view">
					<h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h2>
					<p> <i className="glyphicon glyphicon-map-marker"></i><Link href="#">state</Link>, <Link href="#">city</Link>| Added at 06:55 pm, Ad ID: 987654321</p>
					<div className="flexslider">
						<ul className="slides">
							<li data-thumb="images/ss1.jpg">
								<img src={require("../images/ss1.jpg")} alt="" />
							</li>
							<li data-thumb="images/ss2.jpg">
								<img src={require("../images/ss1.jpg")} alt="" />
							</li>
							<li data-thumb="images/ss3.jpg">
								<img src={require("../images/ss1.jpg")} alt="" />
							</li>
							<li data-thumb="images/ss4.jpg">
								<img src={require("../images/ss1.jpg")} alt="" />
							</li>
						</ul>
					</div>

                    <script defer src="js/jquery.flexslider.js"></script>

					


					<div className="product-details">
						<h4><span className="w3layouts-agileinfo">Brand </span> : <Link href="#">Company name</Link><div className="clearfix"></div></h4>
						<h4><span className="w3layouts-agileinfo">Views </span> : <strong>150</strong></h4>
						<h4><span className="w3layouts-agileinfo">Fuel </span> : Petrol</h4>
						<h4><span className="w3layouts-agileinfo">Summary</span> :<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p><div className="clearfix"></div></h4>
					
					</div>
				</div>
				<div className="col-md-5 product-details-grid">
					<div className="item-price">
						<div className="product-price">
							<p className="p-price">Price</p>
							<h3 className="rate">$ 45999</h3>
							<div className="clearfix"></div>
						</div>
						<div className="condition">
							<p className="p-price">Condition</p>
							<h4>Good</h4>
							<div className="clearfix"></div>
						</div>
						<div className="itemtype">
							<p className="p-price">Item Type</p>
							<h4>Cars</h4>
							<div className="clearfix"></div>
						</div>
					</div>
					<div className="interested text-center">
						<h4>Interested in this Ad?<small> Contact the Seller!</small></h4>
						<p><i className="glyphicon glyphicon-earphone"></i>00-85-9875462655</p>
					</div>
						<div className="tips">
						<h4>Safety Tips for Buyers</h4>
							<ol>
								<li><Link href="#">Contrary to popular belief.</Link></li>
								<li><Link href="#">Contrary to popular belief.</Link></li>
								<li><Link href="#">Contrary to popular belief.</Link></li>
								<li><Link href="#">Contrary to popular belief.</Link></li>
								<li><Link href="#">Contrary to popular belief.</Link></li>
								<li><Link href="#">Contrary to popular belief.</Link></li>
								<li><Link href="#">Contrary to popular belief.</Link></li>
								<li><Link href="#">Contrary to popular belief.</Link></li>
								<li><Link href="#">Contrary to popular belief.</Link></li>
							</ol>
						</div>
				</div>
			<div className="clearfix"></div>
			</div>
		</div>
	</div>

                <Footer />
            </div>
        )
    }
}
export default Singleresult;