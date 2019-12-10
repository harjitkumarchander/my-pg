import React, { Component } from 'react';
import Topbar from './Topbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

class Complaints extends Component {
    render() {
        return (
            <div>
                <Topbar />
                <div class="w3layouts-breadcrumbs text-center">
		<div class="container">
			<span class="agile-breadcrumbs"><Link to="/"><i class="fa fa-home home_1"></i></Link> / <span>Complaint</span></span>
		</div>
	</div>
	<div class="feedback main-grid-border">
		<div class="container">
			<h2 class="w3-head">Register Complaint</h2>
			<div class="feed-back">
				<h3>Tell us what you think of us</h3>
				<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
				<div class="feed-back-form">
					<form>
					<span>Customer Details</span>
							<input type="text" value="Customer ID" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'First Name';}" />
							<input type="text" value="Your Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Last Name';}" />
							<input type="text" value="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" />
							<input type="text" value="Mobile No" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Phone No';}" />
							<span>Is there anything you would like to tell us?</span>
							<textarea onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message...';}" required="">Message...</textarea>
							<input type="submit" value="submit" />
						</form>
				</div>
			</div>
		</div>	
	</div>
    <Footer />
            </div>
        )
    }
}
export default Complaints;