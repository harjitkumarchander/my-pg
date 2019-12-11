import React, { Component } from 'react';
import Topbar from './Topbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

class Payrent extends Component {
    render() {
        return (
            <div>
                <Topbar />
                <div class="w3layouts-breadcrumbs text-center">
		<div class="container">
			<span class="agile-breadcrumbs"><Link to="/"><i class="fa fa-home home_1"></i></Link> / <span>Pay Rent</span></span>
		</div>
	</div>
	<div class="faq main-grid-border">
		<div class="container">
			<div class="wthree-help">
				<h3>Pay your Rent Online</h3> <br />
				<form action="#" method="get"> 
					<input placeholder="Please Enter your ID" className="name" name="Message" required="" /> <br /> <br />
					<input type="submit" value="submit" />
				</form>
				<h5>OR</h5>
				<Link to="/contactus">Contact Us</Link>
			</div>
			<h2 class="w3-head">Frequently asked Questions</h2>
		</div>	
	</div>
                <Footer />
            </div>
        )
    }
}
export default Payrent;