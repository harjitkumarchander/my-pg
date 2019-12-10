import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';
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
// import jQuery from 'jquery';
// window.jQuery = jQuery;

class Topbar extends Component {
	
	

    render() {
        return (
            <>
			<div className="agiletopbar">
			<div className="wthreenavigation">
				<div className="menu-wrap">
				<nav className="menu">
					<div className="icon-list">
						<Link to="/applypg"><i className="fa fa-fw fa-mobile"></i><span>Book Now</span></Link>
						<Link to="/payrent"><i className="fa fa-fw fa-laptop"></i><span>Pay Rent</span></Link>
						<Link to="/complaints"><i className="fa fa-fw fa-car"></i><span>Ccomplaints</span></Link>
						<Link to="/contactus"><i className="fa fa-fw fa-motorcycle"></i><span>Contact Us</span></Link>
						<Link to="/aboutus"><i className="fa fa-fw fa-wheelchair"></i><span>About Us</span></Link>
						<Link to="/faqs"><i className="fa fa-fw fa-paw"></i><span>Faqs</span></Link>
					</div>
				</nav>
				<button className="close-button" id="close-button">Close Menu</button>
			</div>
			<button className="menu-button" id="open-button"> </button>
			</div>
			<div className="clearfix"></div>
		</div>
                	<header>
		<div className="w3ls-header">
            {/* <!--header-one-->  */}
			<div className="w3ls-header-left">
				{/* <p><Link href="mobileapp.html"><i className="fa fa-download" aria-hidden="true"></i>Download Mobile App </Link></p> */}
			</div>
			<div className="w3ls-header-right">
				<ul>
					<li className="dropdown head-dpdn">
						<Link to="/login" aria-expanded="false"><i className="fa fa-user" aria-hidden="true"></i> Sign In</Link>
					</li>
					<li className="dropdown head-dpdn">
						<Link to="/help"><i className="fa fa-question-circle" aria-hidden="true"></i> Help</Link>
					</li>
					<li className="dropdown head-dpdn">
						<Link to="/"><span className="active uls-trigger"><i className="fa fa-language" aria-hidden="true"></i>languages</span></Link>
					</li>
					<li className="dropdown head-dpdn">
						<div className="header-right">			
		</div>
					</li>
				</ul>
			</div>
			
			<div className="clearfix"> </div> 
		</div>
		<div className="container">
			<div className="agile-its-header">
				<div className="logo">
					<h1><Link to="/"><span>Apna</span>PG</Link></h1>
				</div>
				<div className="agileits_search">
					<form action="#" method="post">
						<input name="Search" type="text" placeholder="Enter Locations / Landmark" required="" />
						<select id="agileinfo_search" name="agileinfo_search" required="">
							<option value="">All Categories</option>
							<option value="Single">Single</option>
							<option value="Double">Double</option>
							<option value="Triple">Triple</option>
							<option value="Family">Family</option>
						</select>
						<button type="submit" className="btn btn-default" aria-label="Left Align">
							<i className="fa fa-search" aria-hidden="true"> </i>
						</button>
					</form>
				<Link to="/applypg" className="post-w3layouts-ad" href="post-ad.html">Post Add</Link>
				</div>	
				<div className="clearfix"></div>
			</div>
		</div>
	</header>
            </>
        )
    }
}
export default Topbar;