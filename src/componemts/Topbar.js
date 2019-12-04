import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import jQuery from 'jquery';
window.jQuery = jQuery;

class Topbar extends Component {
	
	

    render() {
        return (
            <>
			<div className="agiletopbar">
			<div className="wthreenavigation">
				<div className="menu-wrap">
				<nav className="menu">
					<div className="icon-list">
						<a href="mobiles.html"><i className="fa fa-fw fa-mobile"></i><span>Mobiles</span></a>
						<a href="electronics-appliances.html"><i className="fa fa-fw fa-laptop"></i><span>Electronics and appliances</span></a>
						<a href="cars.html"><i className="fa fa-fw fa-car"></i><span>Cars</span></a>
						<a href="bikes.html"><i className="fa fa-fw fa-motorcycle"></i><span>Bikes</span></a>
						<a href="furnitures.html"><i className="fa fa-fw fa-wheelchair"></i><span>Furnitures</span></a>
						<a href="pets.html"><i className="fa fa-fw fa-paw"></i><span>Pets</span></a>
						<a href="books-sports-hobbies.html"><i className="fa fa-fw fa-book"></i><span>Books, Sports & Hobbies</span></a>
						<a href="fashion.html"><i className="fa fa-fw fa-asterisk"></i><span>Fashion</span></a>
						<a href="kids.html"><i className="fa fa-fw fa-asterisk"></i><span>Kids</span></a>
						<a href="services.html"><i className="fa fa-fw fa-shield"></i><span>Services</span></a>
						<a href="jobs.html"><i className="fa fa-fw fa-at"></i><span>Jobs</span></a>
						<a href="real-estate.html"><i className="fa fa-fw fa-home"></i><span>Real Estate</span></a>
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
						<Link ><span className="active uls-trigger"><i className="fa fa-language" aria-hidden="true"></i>languages</span></Link>
					</li>
					<li className="dropdown head-dpdn">
						<div className="header-right">			
	{/* <!-- Large modal --> */}
			<div className="agile-its-selectregion">
				<button className="btn btn-primary" data-toggle="modal" data-target="#myModal">
				<i className="fa fa-globe" aria-hidden="true"></i>Select City</button>
					<div className="modal fade" id="myModal" tabindex="-1" role="dialog"
					aria-hidden="true">
						<div className="modal-dialog modal-lg">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="close" data-dismiss="modal" aria-hidden="true">
										&times;</button>
									<h4 className="modal-title" id="myModalLabel">
										Please Choose Your Location</h4>
								</div>
								<div className="modal-body">
									 <form className="form-horizontal" action="#" method="get">
										<div className="form-group">
											<select id="basic2" className="show-tick form-control" multiple>
												<optgroup label="Popular Cities">
													<option>Select City</option>
													<option>Birmingham</option>
													<option>Anchorage</option>
													<option>Phoenix</option>
													<option>Little Rock</option>
													<option>Los Angeles</option>
													<option>Denver</option>
													<option>Bridgeport</option>
													<option>Wilmington</option>
													<option>Jacksonville</option>
													<option>Atlanta</option>
													<option>Honolulu</option>
													<option>Boise</option>
													<option>Chicago</option>
													<option>Indianapolis</option>
												</optgroup>
													<optgroup label="Alabama">
														<option>Birmingham</option>
														<option>Montgomery</option>
														<option>Mobile</option>
														<option>Huntsville</option>
														<option>Tuscaloosa</option>
													</optgroup>
													<optgroup label="Alaska">
														<option>Anchorage</option>
														<option>Fairbanks</option>
														<option>Juneau</option>
														<option>Sitka</option>
														<option>Ketchikan</option>
													</optgroup>
													<optgroup label="Arizona">
														<option>Phoenix</option>
														<option>Tucson</option>
														<option>Mesa</option>
														<option>Chandler</option>
														<option>Glendale</option>
													</optgroup>
													<optgroup label="Arkansas">
														<option>Little Rock</option>
														<option>Fort Smith</option>
														<option>Fayetteville</option>
														<option>Springdale</option>
														<option>Jonesboro</option>
													</optgroup>
													<optgroup label="California">
														<option>Los Angeles</option>
														<option>San Diego</option>
														<option>San Jose</option>
														<option>San Francisco</option>
														<option>Fresno</option>
													</optgroup>
													<optgroup label="Colorado">
														<option>Denver</option>
														<option>Colorado</option>
														<option>Aurora</option>
														<option>Fort Collins</option>
														<option>Lakewood</option>
													</optgroup>
													<optgroup label="Connecticut">
														<option>Bridgeport</option>
														<option>New Haven</option>
														<option>Hartford</option>
														<option>Stamford</option>
														<option>Waterbury</option>
													</optgroup>
													<optgroup label="Delaware">
														<option>Wilmington</option>
														<option>Dover</option>
														<option>Newark</option>
														<option>Bear</option>
														<option>Middletown</option>
													</optgroup>
													<optgroup label="Florida">
														<option>Jacksonville</option>
														<option>Miami</option>
														<option>Tampa</option>
														<option>St. Petersburg</option>
														<option>Orlando</option>
													</optgroup>
													<optgroup label="Georgia">
														<option>Atlanta</option>
														<option>Augusta</option>
														<option>Columbus</option>
														<option>Savannah</option>
														<option>Athens</option>
													</optgroup>
													<optgroup label="Hawaii">
														<option>Honolulu</option>
														<option>Pearl City</option>
														<option>Hilo</option>
														<option>Kailua</option>
														<option>Waipahu</option>
													</optgroup>
													<optgroup label="Idaho">
														<option>Boise</option>
														<option>Nampa</option>
														<option>Meridian</option>
														<option>Idaho Falls</option>
														<option>Pocatello</option>
													</optgroup>
													<optgroup label="Illinois">
														<option>Chicago</option>
														<option>Aurora</option>
														<option>Rockford</option>
														<option>Joliet</option>
														<option>Naperville</option>
													</optgroup>
													<optgroup label="Indiana">
														<option>Indianapolis</option>
														<option>Fort Wayne</option>
														<option>Evansville</option>
														<option>South Bend</option>
														<option>Hammond</option>														       
													</optgroup>
													<optgroup label="Iowa">
														<option>Des Moines</option>
														<option>Cedar Rapids</option>
														<option>Davenport</option>
														<option>Sioux City</option>
														<option>Waterloo</option>       													
													</optgroup>
													<optgroup label="Kansas">
														<option>Wichita</option>
														<option>Overland Park</option>
														<option>Kansas City</option>
														<option>Topeka</option>
														<option>Olathe  </option>            													
													</optgroup>
													<optgroup label="Kentucky">
														<option>Louisville</option>
														<option>Lexington</option>
														<option>Bowling Green</option>
														<option>Owensboro</option>
														<option>Covington</option>        														
													</optgroup>
													<optgroup label="Louisiana">
														<option>New Orleans</option>
														<option>Baton Rouge</option>
														<option>Shreveport</option>
														<option>Metairie</option>
														<option>Lafayette</option>          														
													</optgroup>
													<optgroup label="Maine">
														<option>Portland</option>
														<option>Lewiston</option>
														<option>Bangor</option>
														<option>South Portland</option>
														<option>Auburn</option>         														
													</optgroup>
													<optgroup label="Maryland">
														<option>Baltimore</option>
														<option>Frederick</option>
														<option>Rockville</option>
														<option>Gaithersburg</option>
														<option>Bowie</option>         														
													</optgroup>
													<optgroup label="Massachusetts">
														<option>Boston</option>
														<option>Worcester</option>
														<option>Springfield</option>
														<option>Lowell</option>
														<option>Cambridge</option>  
													</optgroup>
													<optgroup label="Michigan">
														<option>Detroit</option>
														<option>Grand Rapids</option>
														<option>Warren</option>
														<option>Sterling Heights</option>
														<option>Lansing</option> 
													</optgroup>
													<optgroup label="Minnesota">
														<option>Minneapolis</option>
														<option>St. Paul</option>
														<option>Rochester</option>
														<option>Duluth</option>
														<option>Bloomington</option>      														
													</optgroup>
													<optgroup label="Mississippi">
														<option>Jackson</option>
														<option>Gulfport</option>
														<option>Southaven</option>
														<option>Hattiesburg</option>
														<option>Biloxi</option>         														
													</optgroup>
													<optgroup label="Missouri">
														<option>Kansas City</option>
														<option>St. Louis</option>
														<option>Springfield</option>
														<option>Independence</option>
														<option>Columbia</option>            														
													</optgroup>
													<optgroup label="Montana">
														<option>Billings</option>
														<option>Missoula</option>
														<option>Great Falls</option>
														<option>Bozeman</option>
														<option>Butte-Silver Bow</option>         														
													</optgroup>
													<optgroup label="Nebraska">
														<option>Omaha</option>
														<option>Lincoln</option>
														<option>Bellevue</option>
														<option>Grand Island</option>
														<option>Kearney</option>        													
													</optgroup>
													<optgroup label="Nevada">
														<option>Las Vegas</option>
														<option>Henderson</option>
														<option>North Las Vegas</option>
														<option>Reno</option>
														<option>Sunrise Manor</option>            													
													</optgroup>
													<optgroup label="New Hampshire">
														<option>Manchesters</option>
														<option>Nashua</option>
														<option>Concord</option>
														<option>Dover</option>
														<option>Rochester</option>              													
													</optgroup>
													<optgroup label="New Jersey">
														<option>Newark</option>
														<option>Jersey City</option>
														<option>Paterson</option>
														<option>Elizabeth</option>
														<option>Edison</option> 
													</optgroup>
													<optgroup label="New Mexico">
														<option>Albuquerque</option>
														<option>Las Cruces</option>
														<option>Rio Rancho</option>
														<option>Santa Fe</option>
														<option>Roswell</option>       
													</optgroup>
													<optgroup label="New York">
														<option>New York</option>
														<option>Buffalo</option>
														<option>Rochester</option>
														<option>Yonkers</option>
														<option>Syracuse</option>        														
													</optgroup>
													<optgroup label="North Carolina">
														<option>Charlotte</option>
														<option>Raleigh</option>
														<option>Greensboro</option>
														<option>Winston-Salem</option>
														<option>Durham</option>          														
													</optgroup>
													<optgroup label="North Dakota">
														<option>Fargo</option>
														<option>Bismarck</option>
														<option>Grand Forks</option>
														<option>Minot</option>
														<option>West Fargo</option>
													</optgroup>
													<optgroup label="Ohio">
														<option>Columbus</option>
														<option>Cleveland</option>
														<option>Cincinnati</option>
														<option>Toledo</option>
														<option>Akron</option>      
													</optgroup>
													<optgroup label="Oklahoma">
														<option>Oklahoma City</option>
														<option>Tulsa</option>
														<option>Norman</option>
														<option>Broken Arrow</option>
														<option>Lawton</option>        														
													</optgroup>
													<optgroup label="Oregon">
														<option>Portland</option>
														<option>Eugene</option>
														<option>Salem</option>
														<option>Gresham</option>
														<option>Hillsboro</option>          														
													</optgroup>
													<optgroup label="Pennsylvania">
														<option>Philadelphia</option>
														<option>Pittsburgh</option>
														<option>Allentown</option>
														<option>Erie</option>
														<option>Reading</option>         														
													</optgroup>
													<optgroup label="Rhode Island">
														<option>Providence</option>
														<option>Warwick</option>
														<option>Cranston</option>
														<option>Pawtucket</option>
														<option>East Providence</option>   
													</optgroup>
													<optgroup label="South Carolina">
														<option>Columbia</option>
														<option>Charleston</option>
														<option>North Charleston</option>
														<option>Mount Pleasant</option>
														<option>Rock Hill</option> 
													</optgroup>
													<optgroup label="South Dakota">
														<option>Sioux Falls</option>
														<option>Rapid City</option>
														<option>Aberdeen</option>
														<option>Brookings</option>
														<option>Watertown</option> 
													</optgroup>
													<optgroup label="Tennessee">
														<option>Memphis</option>
														<option>Nashville</option>
														<option>Knoxville</option>
														<option>Chattanooga</option>
														<option>Clarksville</option>       
													</optgroup>
													<optgroup label="Texas">
														<option>Houston</option>
														<option>San Antonio</option>
														<option>Dallas</option>
														<option>Austin</option>
														<option>Fort Worth</option>   
													</optgroup>
													<optgroup label="Utah">
														<option>Salt Lake City</option>
														<option>West Valley City</option>
														<option>Provo</option>
														<option>West Jordan</option>
														<option>Orem</option>   
													</optgroup>	
													<optgroup label="Vermont">
														<option>Burlington</option>
														<option>Essex</option>
														<option>South Burlington</option>
														<option>Colchester</option>
														<option>Rutland</option>   
													</optgroup>
													<optgroup label="Virginia">
														<option>Virginia Beach</option>
														<option>Norfolk</option>
														<option>Chesapeake</option>
														<option>Arlington</option>
														<option>Richmond</option> 
													</optgroup>	
													<optgroup label="Washington">
														<option>Seattle</option>
														<option>Spokane</option>
														<option>Tacoma</option>
														<option>Vancouver</option>
														<option>Bellevue</option> 
													</optgroup>	
													<optgroup label="West Virginia">
														<option>Charleston</option>
														<option>Huntington</option>
														<option>Parkersburg</option>
														<option>Morgantown</option>
														<option>Wheeling</option> 
													</optgroup>	
													<optgroup label="Wisconsin">
														<option>Milwaukee</option>
														<option>Madison</option>
														<option>Green Bay</option>
														<option>Kenosha</option>
														<option>Racine</option>
													</optgroup>
													<optgroup label="Wyoming">
														<option>Cheyenne</option>
														<option>Casper</option>
														<option>Laramie</option>
														<option>Gillette</option>
														<option>Rock Springs</option>
													</optgroup>
											</select>
										</div>
									  </form>    
								</div>
							</div>
						</div>
					</div>
			</div>
		</div>
					</li>
				</ul>
			</div>
			
			<div className="clearfix"> </div> 
		</div>
		<div className="container">
			<div className="agile-its-header">
				<div className="logo">
					<h1><Link href="index.html"><span>Apna</span>PG</Link></h1>
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
				<Link to="/applypg" className="post-w3layouts-ad" href="post-ad.html">Post Free Ad</Link>
				</div>	
				<div className="clearfix"></div>
			</div>
		</div>
	</header>
    <div className="agiletopbar">
			<div className="wthreenavigation">
				<div className="menu-wrap">
				<nav className="menu" id="nav-icon1">
					<div className="icon-list">
						<a href="mobiles.html"><i className="fa fa-fw fa-mobile"></i><span>Mobiles</span></a>
						<a href="electronics-appliances.html"><i className="fa fa-fw fa-laptop"></i><span>Electronics and appliances</span></a>
						<a href="cars.html"><i className="fa fa-fw fa-car"></i><span>Cars</span></a>
						<a href="bikes.html"><i className="fa fa-fw fa-motorcycle"></i><span>Bikes</span></a>
						<a href="furnitures.html"><i className="fa fa-fw fa-wheelchair"></i><span>Furnitures</span></a>
						<a href="pets.html"><i className="fa fa-fw fa-paw"></i><span>Pets</span></a>
						<a href="books-sports-hobbies.html"><i className="fa fa-fw fa-book"></i><span>Books, Sports & Hobbies</span></a>
						<a href="fashion.html"><i className="fa fa-fw fa-asterisk"></i><span>Fashion</span></a>
						<a href="kids.html"><i className="fa fa-fw fa-asterisk"></i><span>Kids</span></a>
						<a href="services.html"><i className="fa fa-fw fa-shield"></i><span>Services</span></a>
						<a href="jobs.html"><i className="fa fa-fw fa-at"></i><span>Jobs</span></a>
						<a href="real-estate.html"><i className="fa fa-fw fa-home"></i><span>Real Estate</span></a>
					</div>
				</nav>
				<button className="close-button" id="close-button">Close Menu</button>
			</div>
			<button className="menu-button" id="open-button"> </button>
			</div>
			<div className="clearfix"></div>
		</div>
            </>
        )
    }
}
export default Topbar;