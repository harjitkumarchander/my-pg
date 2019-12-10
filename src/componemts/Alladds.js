import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import '../css/style.css';
// import '../css/menu_sideslide.css';
// import '../css/flexslider.css';
// import '../css/bootstrap-select.css';
// import '../css/bootstrap.min.css';
// import '../css/font-awesome.min.css';
// import '../css/easy-responsive-tabs.css';
// import '../css/jquery-ui1.css';
// import '../css/jquery.uls.css';
// import '../css/jquery.uls.grid.css';
// import '../css/jquery.uls.lcd.css';
import Topbar from './Topbar';


class Alladds extends Component {

    // componentDidMount(){
    //     const script = document.createElement("script");
    //     script.src = "js/jquery.min.js";
    //     script.async = true;
    //     script.onload = () => this.scriptLoaded();
		
	// }
	// scriptLoaded (){
	// 	window.$("#btn1").click(function(){
	// 		alert("Text: " + $("#test").text());
	// 		console.log("hello")
	// 	});
	// }

    // scriptLoaded(){
    //     this.div.appendChild('script');
    // }

    render() {
        return (
            <div>
        		<Topbar />
	<div className="w3layouts-breadcrumbs text-center">
		<div className="container">
			<span className="agile-breadcrumbs"><Link to="/"><i className="fa fa-home home_1"></i></Link> / <span>All Ads</span></span>
		</div>
	</div>
	{/* <!-- //breadcrumbs --> */}
	{/* <!-- Products --> */}
	<div className="total-ads main-grid-border">
		<div className="container">
			<div className="select-box">
				<div className="select-city-for-local-ads ads-list">
					<label>Select your city to see local ads</label>
						<select>
												<optgroup label="Popular Cities">
													<option selected style={{display:"none" , color: "#eee"}}>Entire USA</option>
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
												<optgroup label="More Cities">
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
												</optgroup>
			            </select>
				</div>
				<div className="browse-category ads-list">
					<label>Browse Categories</label>
					<select className="selectpicker show-tick" data-live-search="true">
					  <option data-tokens="Mobiles">All</option>
					  <option data-tokens="Mobiles">Mobiles</option>
					  <option data-tokens="Electronics & Appliances">Electronics & Appliances</option>
					  <option data-tokens="Cars">Cars</option>
					  <option data-tokens="Bikes">Bikes</option>
					  <option data-tokens="Furniture">Furniture</option>
					  <option data-tokens="Pets">Pets</option>
					  <option data-tokens="Books, Sports & Hobbies">Books, Sports & Hobbies</option>
					  <option data-tokens="Fashion">Fashion</option>
					  <option data-tokens="Kids">Kids</option>
					  <option data-tokens="Services">Services</option>
					  <option data-tokens="Jobs">Jobs</option>
					  <option data-tokens="Real Estate">Real Estate</option>
					</select>
				</div>
				<div className="search-product ads-list">
					<label>Search for a specific product</label>
					<div className="search">
						<div id="custom-search-input">
						<div className="input-group">
							<input type="text" className="form-control input-lg" placeholder="Buscar" />
							<span className="input-group-btn">
								<button className="btn btn-info btn-lg" type="button">
									<i className="glyphicon glyphicon-search"></i>
								</button>
							</span>
						</div>
					</div>
					</div>
				</div>
				<div className="clearfix"></div>
			</div>
			<div className="all-categories">
				<h3> Select your category and find the perfect ad</h3>
				<ul className="all-cat-list">
					<li><Link href="mobiles.html">Mobiles <span className="num-of-ads">(5,78,076)</span></Link></li>
					<li><Link href="electronics-appliances.html">Electronics & Appliances  <span className="num-of-ads">(3,66,495)</span></Link></li>
					<li><Link href="real-estate.html">Real Estate  <span className="num-of-ads">(45,450)</span></Link></li>
					<li><Link href="furnitures.html">Furniture    <span className="num-of-ads">(1,77,145)</span></Link></li>
					<li><Link href="pets.html">Pets   <span className="num-of-ads">(1,81,250)</span></Link></li>
					<li><Link href="books-sports-hobbies.html">Books, Sports & Hobbies    <span className="num-of-ads">(66,822)</span></Link></li>
					<li><Link href="fashion.html">Fashion   <span className="num-of-ads">(29,156)</span></Link></li>
					<li><Link href="kids.html">Kids   <span className="num-of-ads">(25,699)</span></Link></li>
					<li><Link href="services.html">Services   <span className="num-of-ads">(2,15,895)</span></Link></li>
					<li><Link href="cars.html">Cars   <span className="num-of-ads">(2,15,306)</span></Link></li>
				</ul>
			</div>
			<div className="ads-grid">
				<div className="side-bar col-md-3">
					<div className="search-hotel">
					<h3 className="agileits-sear-head">Name contains</h3>
					<form>
						<input type="text" value="Product name..." onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Product name...';}" required="" />
						<input type="submit" value=" " />
					</form>
				</div>
				
				<div className="range">
					<h3 className="agileits-sear-head">Price range</h3>
							<ul className="dropdown-menu6">
								<li>
									                
									<div id="slider-range"></div>							
										<input type="text" id="amount" style={{border: "0" , color: "#ffffff" , fontweight: "normal"}} />
									</li>			
							</ul>
							{/* <!----> */}
							
							
				</div>
				<div className="w3ls-featured-ads">
					<h2 className="sear-head fer">Featured Ads</h2>
					<div className="w3l-featured-ad">
						<Link href="single.html">
							<div className="w3-featured-ad-left">
								<img src={require("../images/f1.jpg")} title="ad image" alt="" />
							</div>
							<div className="w3-featured-ad-right">
								<h4>Lorem Ipsum is simply dummy text of the printing industry</h4>
								<p>$ 450</p>
							</div>
							<div className="clearfix"></div>
						</Link>
					</div>
					<div className="w3l-featured-ad">
						<Link href="single.html">
							<div className="w3-featured-ad-left">
								<img src={require("../images/f2.jpg")} title="ad image" alt="" />
							</div>
							<div className="w3-featured-ad-right">
								<h4>Lorem Ipsum is simply dummy text of the printing industry</h4>
								<p>$ 380</p>
							</div>
							<div className="clearfix"></div>
						</Link>
					</div>
					<div className="w3l-featured-ad">
						<Link href="single.html">
							<div className="w3-featured-ad-left">
								<img src={require("../images/f3.jpg")} title="ad image" alt="" />
							</div>
							<div className="w3-featured-ad-right">
								<h4>Lorem Ipsum is simply dummy text of the printing industry</h4>
								<p>$ 560</p>
							</div>
							<div className="clearfix"></div>
						</Link>
					</div>
					<div className="clearfix"></div>
				</div>
				</div>
				<div className="agileinfo-ads-display col-md-9">
					<div className="wrapper">					
					<div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
					  <ul id="myTab" className="nav nav-tabs nav-tabs-responsive" role="tablist">
						<li role="presentation" className="active">
						  <Link href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">
							<span className="text">All Ads</span>
						  </Link>
						</li>
						<li role="presentation" className="next">
						  <Link href="#profile" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile">
							<span className="text">Ads with Photos</span>
						  </Link>
						</li>
						<li role="presentation">
						  <Link href="#samsa" role="tab" id="samsa-tab" data-toggle="tab" aria-controls="samsa">
							<span className="text">Company</span>
						  </Link>
						</li>
					  </ul>
					  <div id="myTabContent" className="tab-content">
						<div role="tabpanel" className="tab-pane fade in active" id="home" aria-labelledby="home-tab">
						   <div>
												<div id="container">
								<div className="view-controls-list" id="viewcontrols">
									<label>view :</label>
									<Link className="gridview"><i className="glyphicon glyphicon-th"></i></Link>
									<Link className="listview active"><i className="glyphicon glyphicon-th-list"></i></Link>
								</div>
								<div className="sort">
								   <div className="sort-by">
										<label>Sort By : </label>
										<select>
														<option value="">Most recent</option>
														<option value="">Price: Rs Low to High</option>
														<option value="">Price: Rs High to Low</option>
										</select>
									   </div>
									 </div>
								<div className="clearfix"></div>
							<ul className="list">
								<Link href="single.html">
									<li>
									<img src={require("../images/m1.jpg")} title="" alt="" />
									<section className="list-left">
									<h5 className="title">There are many variations of passages of Lorem Ipsum</h5>
									<span className="adprice">$290</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:55</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src={require("../images/m2.jpg")} title="" alt="" />
									<section className="list-left">
									<h5 className="title">It is a long established fact that a reader long established</h5>
									<span className="adprice">$310</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:45</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src={require("../images/m3.jpg")} title="" alt="" />
									<section className="list-left">
									<h5 className="title">Contrary to popular belief, Lorem Ipsum is not</h5>
									<span className="adprice">$190</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:30</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src={require("../images/m4.jpg")} title="" alt="" />
									<section className="list-left">
									<h5 className="title">The standard chunk of Lorem Ipsum used since the</h5>
									<span className="adprice">$480</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:25</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src={require("../images/m5.jpg")} title="" alt="" />
									<section className="list-left">
									<h5 className="title">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</h5>
									<span className="adprice">$859</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:24</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src={require("../images/m6.jpg")} title="" alt="" />
									<section className="list-left">
									<h5 className="title">But I must explain to you how all this mistaken idea of denouncing</h5>
									<span className="adprice">$1299</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:22</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src={require("../images/m7.jpg")} title="" alt="" />
									<section className="list-left">
									<h5 className="title">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</h5>
									<span className="adprice">$1099</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:21</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src={require("../images/m8.jpg")} title="" alt="" />
									<section className="list-left">
									<h5 className="title">On the other hand, we denounce with righteous dislike men</h5>
									<span className="adprice">$290</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:20</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src={require("../images/m9.jpg")} title="" alt="" />
									<section className="list-left">
									<h5 className="title">There are many variations of passages of Lorem Ipsum</h5>
									<span className="adprice">$899</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:05</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src={require("../images/m10.jpg")} title="" alt="" />
									<section className="list-left">
									<h5 className="title">ducimus qui blanditiis praesentium voluptatum quos dolores et qua</h5>
									<span className="adprice">$199</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:04</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src={require("../images/m11.jpg")} title="" alt="" />
									<section className="list-left">
									<h5 className="title">There are many variations of passages of Lorem Ipsum</h5>
									<span className="adprice">$250</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:03</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src={require("../images/m12.jpg")} title="" alt="" />
									<section className="list-left">
									<h5 className="title">who are so beguiled and demoralized by the charms of pleasure of the moment</h5>
									<span className="adprice">$189</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:03</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
							</ul>
						</div>
							</div>
						</div>
						<div role="tabpanel" className="tab-pane fade" id="profile" aria-labelledby="profile-tab">
						 <div>
												<div id="container">
								<div className="view-controls-list" id="viewcontrols">
									<label>view :</label>
									<Link className="gridview"><i className="glyphicon glyphicon-th"></i></Link>
									<Link className="listview active"><i className="glyphicon glyphicon-th-list"></i></Link>
								</div>
								<div className="sort">
								   <div className="sort-by">
										<label>Sort By : </label>
										<select>
														<option value="">Most recent</option>
														<option value="">Price: Rs Low to High</option>
														<option value="">Price: Rs High to Low</option>
										</select>
									   </div>
									 </div>
								<div className="clearfix"></div>
							<ul className="list">
								<Link href="single.html">
									<li>
									<img src="images/m1.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">There are many variations of passages of Lorem Ipsum</h5>
									<span className="adprice">$290</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:55</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m2.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">It is a long established fact that a reader long established</h5>
									<span className="adprice">$310</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:45</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m3.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">Contrary to popular belief, Lorem Ipsum is not</h5>
									<span className="adprice">$190</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:30</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m4.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">The standard chunk of Lorem Ipsum used since the</h5>
									<span className="adprice">$480</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:25</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m5.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</h5>
									<span className="adprice">$859</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:24</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m6.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">But I must explain to you how all this mistaken idea of denouncing</h5>
									<span className="adprice">$1299</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:22</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m1.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</h5>
									<span className="adprice">$1099</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:21</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m7.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">On the other hand, we denounce with righteous dislike men</h5>
									<span className="adprice">$290</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:20</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m8.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">There are many variations of passages of Lorem Ipsum</h5>
									<span className="adprice">$899</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:05</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m9.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">ducimus qui blanditiis praesentium voluptatum quos dolores et qua</h5>
									<span className="adprice">$199</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:04</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m10.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">There are many variations of passages of Lorem Ipsum</h5>
									<span className="adprice">$250</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:03</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m11.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">who are so beguiled and demoralized by the charms of pleasure of the moment</h5>
									<span className="adprice">$189</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:03</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m12.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">you need to be sure there isn't anything embarrassing hidden</h5>
									<span className="adprice">$1090</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:03</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m13.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">looked up one of the more obscure Latin words</h5>
									<span className="adprice">$599</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:02</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								<div className="clearfix"></div>
								</Link>
							</ul>
						</div>
							</div>
						</div>
						<div role="tabpanel" className="tab-pane fade" id="samsa" aria-labelledby="samsa-tab">
						  <div>
												<div id="container">
								<div className="view-controls-list" id="viewcontrols">
									<label>view :</label>
									<Link className="gridview"><i className="glyphicon glyphicon-th"></i></Link>
									<Link className="listview active"><i className="glyphicon glyphicon-th-list"></i></Link>
								</div>
								<div className="sort">
								   <div className="sort-by">
										<label>Sort By : </label>
										<select>
														<option value="">Most recent</option>
														<option value="">Price: Rs Low to High</option>
														<option value="">Price: Rs High to Low</option>
										</select>
									   </div>
									 </div>
								<div className="clearfix"></div>
							<ul className="list">
								<Link href="single.html">
									<li>
									<img src="images/m1.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">There are many variations of passages of Lorem Ipsum</h5>
									<span className="adprice">$290</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:55</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m2.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">It is a long established fact that a reader long established</h5>
									<span className="adprice">$310</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:45</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m3.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">Contrary to popular belief, Lorem Ipsum is not</h5>
									<span className="adprice">$190</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:30</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m4.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">The standard chunk of Lorem Ipsum used since the</h5>
									<span className="adprice">$480</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:25</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m5.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</h5>
									<span className="adprice">$859</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:24</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m6.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">But I must explain to you how all this mistaken idea of denouncing</h5>
									<span className="adprice">$1299</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:22</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m12.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">you need to be sure there isn't anything embarrassing hidden</h5>
									<span className="adprice">$1090</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:03</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m1.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</h5>
									<span className="adprice">$1099</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:21</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m7.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">On the other hand, we denounce with righteous dislike men</h5>
									<span className="adprice">$290</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:20</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m8.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">There are many variations of passages of Lorem Ipsum</h5>
									<span className="adprice">$899</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:05</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m13.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">looked up one of the more obscure Latin words</h5>
									<span className="adprice">$599</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:02</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m9.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">ducimus qui blanditiis praesentium voluptatum quos dolores et qua</h5>
									<span className="adprice">$199</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:04</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m10.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">There are many variations of passages of Lorem Ipsum</h5>
									<span className="adprice">$250</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:03</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m12.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">you need to be sure there isn't anything embarrassing hidden</h5>
									<span className="adprice">$1090</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:03</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m11.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">who are so beguiled and demoralized by the charms of pleasure of the moment</h5>
									<span className="adprice">$189</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:03</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								
								<Link href="single.html">
									<li>
									<img src="images/m4.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">The standard chunk of Lorem Ipsum used since the</h5>
									<span className="adprice">$480</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:25</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m9.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">ducimus qui blanditiis praesentium voluptatum quos dolores et qua</h5>
									<span className="adprice">$199</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:04</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m8.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">There are many variations of passages of Lorem Ipsum</h5>
									<span className="adprice">$899</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:05</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m12.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">you need to be sure there isn't anything embarrassing hidden</h5>
									<span className="adprice">$1090</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:03</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								
								<Link href="single.html">
									<li>
									<img src="images/m11.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">who are so beguiled and demoralized by the charms of pleasure of the moment</h5>
									<span className="adprice">$189</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:03</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								</Link>
								<Link href="single.html">
									<li>
									<img src="images/m13.jpg" title="" alt="" />
									<section className="list-left">
									<h5 className="title">looked up one of the more obscure Latin words</h5>
									<span className="adprice">$599</span>
									<p className="catpath">Mobile Phones » Brand</p>
									</section>
									<section className="list-right">
									<span className="date">Today, 17:02</span>
									<span className="cityname">City name</span>
									</section>
									<div className="clearfix"></div>
									</li> 
								<div className="clearfix"></div>
								</Link>
							</ul>
						</div>
							</div>
						</div>
						<ul className="pagination pagination-sm">
							<li><Link href="#">Prev</Link></li>
							<li><Link href="#">1</Link></li>
							<li><Link href="#">2</Link></li>
							<li><Link href="#">3</Link></li>
							<li><Link href="#">4</Link></li>
							<li><Link href="#">5</Link></li>
							<li><Link href="#">6</Link></li>
							<li><Link href="#">7</Link></li>
							<li><Link href="#">8</Link></li>
							<li><Link href="#">Next</Link></li>
						</ul>
					  </div>
					</div>
				</div>
				</div>
				<div className="clearfix"></div>
			</div>
		</div>	
	</div>
	{/* <!-- // Products --> */}
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
            // </div>
        );
    }
}
export default Alladds;