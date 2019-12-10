import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Topbar from './Topbar';
import Footer from './Footer';

class Login extends Component {
    render() {
        return (
            <div>
                <Topbar />
                <section>
		<div id="agileits-sign-in-page" className="sign-in-wrapper">
			<div className="agileinfo_signin">
			<h3>Sign In</h3>
				<form action="#" method="post">
					<input type="email" name="Your Email" placeholder="Your Email" required="" /> 
					<input type="password" name="Password" placeholder="Password" required="" /> 
					<input type="submit" value="Sign In" />
					<div className="forgot-grid">
						<label className="checkbox"><input type="checkbox" name="checkbox" />Remember me</label>
						<div className="forgot">
							<Link href="#" data-toggle="modal" data-target="#myModal2">Forgot Password?</Link>
						</div>
					
						<div className="modal fade" id="myModal2" role="dialog">
							<div className="modal-dialog">
						
							<div className="modal-dialog modal-lg">
								<div className="modal-content">
									<div className="modal-header">
										<button type="button" className="close" data-dismiss="modal">&times;</button>
										<h3 className="w3ls-password">Get Password</h3>		
										<p className="get-pw">Enter your email address below and we'll send you an email with instructions.</p>
										<form>
											<input type="text" className="user" name="email" placeholder="Email" required="" />
											<input type="submit" value="Submit" />
										</form>
									</div>
								</div>
							</div>
							</div>
						</div>
						<div className="clearfix"> </div>
					</div>
				</form>
				<h6> Not a Member Yet? <Link to="/signup">Sign Up Now</Link> </h6>
        
			</div>
		</div>
    
	</section>
    <Footer />
            </div>
        )
    }
}
export default Login;