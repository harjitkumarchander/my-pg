import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Topbar from './Topbar';
import Footer from './Footer';


class ApplyPG extends Component {
    render() {
        return (
            <div>
                <Topbar />
                <div class="w3layouts-breadcrumbs text-center">
		<div class="container">
			<span class="agile-breadcrumbs"><Link to="/"><i class="fa fa-home home_1"></i></Link> / <span>Post Add</span></span>
		</div>
	</div>
	<div class="submit-ad main-grid-border">
		<div class="container">
			<h2 class="w3-head">Post Add</h2>
			<div class="post-ad-form">
				<form>
					<label>Select Properties<span>*</span></label>
					<select class="">
					  <option>How many Properties list with ApnaPG</option>
					  <option>Only 1</option>
					  <option>2 to 4</option>
					  <option>5 to more</option>
					</select><br/>
					<label>Select Location<span>*</span></label>
					<select class="">
					  <option>Where your PG Locate</option>
					  <option>Amritsar</option>
					  <option>Barnala</option>
					  <option>Bathinda</option>
					  <option>Jalandhar</option>
					  <option>Gurdaspur</option>
					  <option>Mohali</option>
					</select><br />

					<label>Ownership<span>*</span></label>
					<select class="">
					  <option>Are you the ?</option>
					  <option>House Owner</option>
					  <option>Properties Manager</option>
					</select><br />

					<label>Society Name<span>*</span></label>
					<select class="">
					  <option>Is your property in a society?</option>
					  <option>Yes</option>
					  <option>No</option>
					</select><br />

					<div class="clearfix"></div>
					<label>Title <span>*</span></label>
					<input type="text" class="phone" placeholder="" />
					<div class="clearfix"></div>
					<label>Description <span>*</span></label>
					<textarea class="mess" placeholder="Write few lines about your product"></textarea>
					<div class="clearfix"></div>
				<div class="upload-ad-photos">
				<label>Upload your Photo :</label>	
					<div class="photos-upload-view">
						<form id="upload" action="index.html" method="POST" enctype="multipart/form-data">
						    <input type="hidden" id="MAX_FILE_SIZE" name="MAX_FILE_SIZE" value="300000" />
						    <div>
							<input type="file" id="fileselect" name="fileselect[]" multiple="multiple" />
							<div id="filedrag">or drop files here</div>
						    </div>
						    <div id="submitbutton">
							<button type="submit">Upload Files</button>
						    </div>
						</form>

						<div id="messages">
						<p>Status Messages</p>
						</div>
						</div>
					<div class="clearfix"></div>
						<script src="js/filedrag.js"></script>
				</div>
					<div class="personal-details">
					<form>
						<label>Your Name <span>*</span></label>
						<input type="text" class="name" placeholder="" />
						<div class="clearfix"></div>
						<label>Your Mobile No <span>*</span></label>
						<input type="text" class="phone" placeholder="" />
						<div class="clearfix"></div>
						<label>Your Email Address<span>*</span></label>
						<input type="text" class="email" placeholder="" />
						<div class="clearfix"></div>
						<p class="post-terms">By clicking <strong>post Button</strong> you accept our <a href="terms.html" target="_blank">Terms of Use </a> and <a href="privacy.html" target="_blank">Privacy Policy</a></p>
					<input type="submit" value="Post" />					
					<div class="clearfix"></div>
					</form>
					</div>
                    </form>
			</div>
		</div>	
	</div>
    <Footer />
            </div>
        )
    }
}
export default ApplyPG; 