import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Topbar from './Topbar';
import Footer from './Footer';

class Bookpg extends Component {
    render() {
        return (
            <div>
                <Topbar />
				<div class="w3layouts-breadcrumbs text-center">
		<div class="container">
			<span class="agile-breadcrumbs"><Link to="/"><i class="fa fa-home home_1"></i></Link> / <span>Book PG</span></span>
		</div>
	</div>
                    <div class="submit-ad main-grid-border">
		                <div class="container">
			            <h2 class="w3-head">Book your PG Now</h2>
			                <div class="post-ad-form">
			<form>
				<label>Select Category <span>*</span></label>
					<select class="">
			      		<option>Select Category</option>
					    <option>Single</option>
					    <option>Double</option>
					    <option>Triple</option>
					    <option>Family</option>
					</select>

					<div class="clearfix"></div>
                    <label>Your Name <span>*</span></label>
						<input type="text" class="name" placeholder="" />
                    <div class="clearfix"></div>
                        <label>Your Address<span>*</span></label>
					    <textarea class="mess" placeholder="type your full address"></textarea>
                    <div class="clearfix"></div>
					<label>Select City <span>*</span></label>
					<select class="">
			      		<option>Select City</option>
					    <option>Amritsar</option>
					    <option>Jalandhar</option>
					    <option>Kapurthla</option>
					    <option>Moga</option>
					</select>
					<div class="clearfix"></div>
					
						<label>Your Mobile No <span>*</span></label>
						<input type="text" class="phone" placeholder="" />
					<div class="clearfix"></div>
						<label>Your Email Address<span>*</span></label>
						<input type="text" class="email" placeholder="" />
					<div class="clearfix"></div>   
		
				    <div class="upload-ad-photos">
				            <label>Upload your Photo</label>	
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
						<div class="clearfix"></div>
						<div id="messages">	<p>Status Messages</p></div>
						    </div>
					<div class="clearfix"></div>
						<script src="js/filedrag.js"></script>
				        </div>
					<div class="personal-details">
					<div class="clearfix"></div>
						<p class="post-terms">By clicking <strong>post Button</strong> you accept our 
                        <a href="terms.html" target="_blank">Terms of Use </a> and 
                        <a href="privacy.html" target="_blank">Privacy Policy</a></p>
					    <input type="submit" value="Post" />					
					<div class="clearfix"></div>
					{/* </form> */}
                    </div>
			</form>	
	                        </div>
                                </div>
                    </div>
                <Footer />
            </div>
        );
    }
}
export default Bookpg;