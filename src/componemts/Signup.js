import React, { Component } from 'react';
import Topbar from './Topbar';
import Footer from './Footer';

class Signup extends Component {
    render() {
        return (
            <div>
                <Topbar />
                <section>
		<div id="agileits-sign-in-page" className="sign-in-wrapper">
			<div class="agileinfo_signin">
			<h3>Sign Up</h3>
				<form action="#" method="post">
					<input type="text" name="Name" placeholder="Your Name" required="" /> 
					<input type="email" name="Email" placeholder="Your Email" required="" /> 
					<input type="tel" name="tel" placeholder="Mobile" required="" /> 
					<input type="password" name="Password" placeholder="Password" required="" /> 
					<input type="password" name="Password" placeholder="Confirm Password" required="" /> 
					<div className="signin-rit">
						<span className="agree-checkbox">
							<label className="checkbox"><input type="checkbox" name="checkbox" />I agree to your <a class="w3layouts-t" href="terms.html" target="_blank">Terms of Use</a> and <a class="w3layouts-t" href="privacy.html" target="_blank">Privacy Policy</a></label>
						</span>
					</div>
					<input type="submit" value="Sign Up" />
				</form>
			</div>
		</div>
	</section>
    <Footer />
            </div>
        )
    }
}
export default Signup;