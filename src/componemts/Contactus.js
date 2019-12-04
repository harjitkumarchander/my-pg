import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Topbar from './Topbar'
import Footer from './Footer'

class Contactus extends Component {
    render() {
        return (
            <div>
                <Topbar />
                <div class="w3layouts-breadcrumbs text-center">
		<div class="container">
			<span class="agile-breadcrumbs"><Link to="/"><i class="fa fa-home home_1"></i></Link> / <span>Contact</span></span>
		</div>
	</div>
	{/* <!-- //breadcrumbs -->
	<!-- contact --> */}
	<div class="contact main-grid-border">
		<div class="container">
			<h2 class="w3-head text-center">Contact Us</h2>
			<section id="hire">    
				<form id="filldetails" action="#" method="post">
					  <div class="field name-box">
							<input type="text" name="name" placeholder="Who Are You?"/>
							<label>Name</label>
							<span class="ss-icon">check</span>
					  </div>
					  
					  <div class="field email-box">
							<input type="text" name="email" placeholder="example@email.com"/>
							<label>Email</label>
							<span class="ss-icon">check</span>
					  </div>
					  
					  <div class="field ad-ID">
							<input type="text" name="id" placeholder="Ad ID"/>
							<label>Ad ID</label>
							<span class="ss-icon">check</span>
					  </div>
					  
					  <div class="field phonenum-box">
							<input type="text" name="tel" placeholder="Phone Number"/>
							<label>Phone</label>
							<span class="ss-icon">check</span>
					  </div>

					  <div class="field msg-box">
							<textarea id="msg" rows="4" placeholder="Your message goes here..."></textarea>
							<label>Your Msg</label>
							<span class="ss-icon">check</span>
					  </div>

					 
			  </form>
			<div class="upload">
						 <h3 class="tlt">Add Attachment:</h3>
						<form id="upload" method="post" action="upload.php" enctype="multipart/form-data">
			<div id="drop">
				<Link>Choose file</Link>
				<input type="file" name="upl" multiple />
			</div>

			<ul class="show">
				{/* <!-- The file uploads will be shown here --> */}
			</ul>
		</form>	
		<div class="clear"></div>
		<form class="submit">
		<input class="button" type="submit" value="Send" />
		</form>
						</div>
			</section>
		
		</div>	
            </div>
            <Footer />
            </div>
        )
    }
}
export default Contactus;