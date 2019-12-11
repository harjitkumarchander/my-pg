import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Topbar from './Topbar';
import Footer from './Footer';


class Categories extends Component {
    render() {
        return (
            <div>
                <Topbar />
                <div class="w3layouts-breadcrumbs text-center">
		<div class="container">
			<span class="agile-breadcrumbs"><Link to="/"><i class="fa fa-home home_1"></i></Link> / <span>Categories</span></span>
		</div>
	</div>
	<div class="categories-section main-grid-border">
		<div class="container">
			<h2 class="w3-head">All Categories</h2>
			<div class="category-list">
				<div id="parentVerticalTab">
					<div class="agileits-tab_nav">
					<ul class="resp-tabs-list hor_1">
						<li>Single</li>
						<li>Double</li>
						<li>Triple</li>
						<li>Family</li>
						<li>Services</li>
					</ul>
					</div>
					<div class="resp-tabs-container hor_1">
						<span class="active total" style={{display:"block" }} data-toggle="modal" data-target="#myModal"><strong>All PG</strong> (Select your city to see local ads)</span>
						<div>
							<div class="category">
								<div class="category-img">
									<img src={require("../images/singlebed.jpeg")} title="image" alt="" />
								</div>
								<div class="category-info">
									<h4>Single</h4>
									<span>5,12,850 Ads</span>
									<a href="all-classifieds.html">View all Ads</a>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="sub-categories">
								<ul>
									<li><a href="mobiles.html">mobile phones</a></li>
									<li><a href="mobiles.html">Tablets</a></li>
									<li><a href="mobiles.html">Accessories</a></li>
								</ul>
							</div>
						</div>
						<div>
							<div class="category">
								<div class="category-img">
									<img src={require("../images/doublebed.jpeg")} title="image" alt="" />
								</div>
								<div class="category-info">
									<h4>Double</h4>
									<span>2,01,850 Ads</span>
									<a href="all-classifieds.html">View all Ads</a>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="sub-categories">
								<ul>
									<li><a href="electronics-appliances.html">Computers & accessories</a></li>
									<li><a href="electronics-appliances.html">Tv - video - audio</a></li>
									<li><a href="electronics-appliances.html">Cameras & accessories</a></li>
									<li><a href="electronics-appliances.html">Games & Entertainment</a></li>
									<li><a href="electronics-appliances.html">Fridge - AC - Washing Machine</a></li>
									<li><a href="electronics-appliances.html">Kitchen & Other Appliances</a></li>
								</ul>
							</div>
						</div>
						<div>
							<div class="category">
								<div class="category-img">
									<img src={require("../images/triplebed.jpeg")} title="image" alt="" />
								</div>
								<div class="category-info">
									<h4>Triple</h4>
									<span>1,98,080 Ads</span>
									<a href="all-classifieds.html">View all Ads</a>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="sub-categories">
								<ul>
									<li><a href="cars.html">Commercial Vehicles</a></li>
									<li><a href="cars.html">Other Vehicles</a></li>
									<li><a href="cars.html">Spare Parts</a></li>
								</ul>
							</div>
						</div>
						<div>
							<div class="category">
								<div class="category-img">
									<img src={require("../images/familybed.jpeg")} title="image" alt="" />
								</div>
								<div class="category-info">
									<h4>Family</h4>
									<span>6,17,568 Ads</span>
									<a href="all-classifieds.html">View all Ads</a>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="sub-categories">
								<ul>
									<li><a href="bikes.html">Motorcycles</a></li>
									<li><a href="bikes.html">Scooters</a></li>
									<li><a href="bikes.html">Bicycles</a></li>
									<li><a href="bikes.html">Spare Parts</a></li>
								</ul>
							</div>
						</div>
						<div>
							<div class="category">
								<div class="category-img">
									<img src={require("../images/services.jpeg")} title="image" alt="" />
								</div>
								<div class="category-info">
									<h4>All Services</h4>
									<span>5,74,547 Ads</span>
									<a href="all-classifieds.html">View all Ads</a>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="sub-categories">
								<ul>
									<li><a href="jobs.html">High Speed Internet</a></li>
                                    <li><a href="jobs.html">Breakfast</a></li>
									<li><a href="jobs.html">24x7 Security</a></li>
									<li><a href="jobs.html">Regular Cleaning</a></li>
									<li><a href="jobs.html">24x7 Power Backup</a></li>
									<li><a href="jobs.html">2-Wheeler Parking</a></li>
									<li><a href="jobs.html">Fully-Furnished</a></li>
									<li><a href="jobs.html">Laundry</a></li>
									
								</ul>
							</div>
						</div>
						<div>
							<div class="category">
								<div class="category-img">
									<img src={require("../images/cat12.png")} title="image" alt="" />
								</div>
								<div class="category-info">
									<h4>Real Estate</h4>
									<span>98,156 Ads</span>
									<a href="all-classifieds.html">View all Ads</a>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="sub-categories">
								<ul>
									<li><a href="real-estate.html">Houses</a></li>
									<li><a href="real-estate.html">Apartments</a></li>
									<li><a href="real-estate.html">PG & Roommates</a></li>
									<li><a href="real-estate.html">Land & Plots</a></li>
									<li><a href="real-estate.html">Shops - Offices - Commercial Space</a></li>
									<li><a href="real-estate.html">Vacation Rentals - Guest Houses</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
		</div>
	</div>
    <Footer />
            </div>
        )
    }
}
export default Categories;