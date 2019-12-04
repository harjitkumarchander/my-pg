import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer'
import Topbar from './Topbar'

class Howitwork extends Component {
    render() {
        return (
            <div>
                <Topbar />
                <div class="w3layouts-breadcrumbs text-center">
		<div class="container">
			<span class="agile-breadcrumbs"><Link to="/"><i class="fa fa-home home_1"></i></Link> / <span>How it Works</span></span>
		</div>
	</div>
		<div class="work-section">
			<div class="container">
				<h2 class="w3-head">How It Works</h2>
					<div class="work-section-head text-center">
						<p>Fast, easy and free to post an ad and you will find, what you are looking for.</p>
					</div>
					<div class="work-section-grids text-center">
						<div class="col-md-3 work-section-grid">
							<i class="fa fa-pencil-square-o"></i>
							<h4>Post an Ad</h4>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
							<span class="arrow1"><img src={require("../images/arrow1.png")} alt="" /></span>
						</div>
						<div class="col-md-3 work-section-grid">
							<i class="fa fa-eye"></i>
							<h4>Find an item</h4>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
							<span class="arrow2"><img src={require("../images/arrow1.png")} alt="" /></span>
						</div>
						<div class="col-md-3 work-section-grid">
							<i class="fa fa-phone"></i>
							<h4>contact the seller</h4>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
							<span class="arrow1"><img src={require("../images/arrow1.png")} alt="" /></span>
						</div>
						<div class="col-md-3 work-section-grid">
							<i class="fa fa-money"></i>
							<h4>make transactions</h4>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
						</div>
						<div class="clearfix"></div>
						<Link class="work" href="post-ad.html">Get start Now</Link>
					</div>
				</div>
		</div>	
		<div class="happy-clients">
				<div class="container">
					<div class="happy-clients-head text-center wow fadeInRight" data-wow-delay="0.4s">
						<h3>Happy Clients</h3>
						<p>We are explain who is using our business solutions</p>
					</div>
					<div class="happy-clients-grids">
						<div class="col-md-6 happy-clients-grid wow bounceIn" data-wow-delay="0.4s">
							<div class="client">
								<img src={require("../images/client_1.jpg")} alt="" />
							</div>
							<div class="client-info">
								<p><img src={require("../images/open-quatation.jpg")} class="open" alt="" />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.<img src="images/close-quatation.jpg" class="closeq" alt="" /></p>
								<h4><Link href="#">Darwin Michle, </Link>Project manager</h4>
							</div>
							<div class="clearfix"></div>
						</div>
						<div class="col-md-6 happy-clients-grid span_66 wow bounceIn" data-wow-delay="0.4s">
							<div class="client">
								<img src={require("../images/client_2.jpg")} alt="" />
							</div>
							<div class="client-info">
								<p><img src={require("../images/open-quatation.jpg")} class="open" alt="" />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<img src="images/close-quatation.jpg" class="closeq" alt="" /></p>
								<h4><Link href="#">Madam Elisabath, </Link>Creative Director</h4>
							</div>
							<div class="clearfix"></div>
						</div>
						<div class="col-md-6 happy-clients-grid wow bounceIn" data-wow-delay="0.4s">
							<div class="client">
								<img src={require("../images/client_3.jpg")} alt="" />
							</div>
							<div class="client-info">
								<p><img src={require("../images/open-quatation.jpg")} class="open" alt="" />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.<img src="images/close-quatation.jpg" class="closeq" alt="" /></p>
								<h4><Link href="#">Clips arter, </Link>Lipsum director</h4>
							</div>
							<div class="clearfix"></div>
						</div>
						<div class="col-md-6 happy-clients-grid span_66 wow bounceIn" data-wow-delay="0.4s">
							<div class="client">
								<img src={require("../images/client_4.jpg")} alt="" />
							</div>
							<div class="client-info">
								<p><img src={require("../images/open-quatation.jpg")} class="open" alt="" />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<img src="images/close-quatation.jpg" class="closeq" alt="" /></p>
								<h4><Link href="#">zam cristafr,  </Link>manager</h4>
							</div>
							<div class="clearfix"></div>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
			</div>
            <Footer />
            </div>
        )
    }
}
export default Howitwork;