import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Topbar from './Topbar';
import Footer from './Footer';

class Sitemap extends Component {
    render() {
        return (
            <div>
                <Topbar />
                <div class="w3layouts-breadcrumbs text-center">
		<div class="container">
			<span class="agile-breadcrumbs"><Link to="/"><i class="fa fa-home home_1"></i></Link> / <span>Sitemap</span></span>
		</div>
	</div>
		<div class="container">
			<h2 class="w3-head">Sitemap</h2>
		</div>
		<div class="sitemap-regions">
			<div class="container">
				<div class="sitemap-region-grid">
					<div class="sitemap-region">
						<h4>Furniture</h4>
						<ul>
							<li><a href="furnitures.html">Sofa & Dining</a></li>
							<li><a href="furnitures.html">Other Household Items</a></li>
							<li><a href="furnitures.html">Beds & Wardrobes</a></li>
							<li><a href="furnitures.html">Home Decor & Garden</a></li>
							<li><a href="furnitures.html">Kitchen & Other Appliances</a></li>
							<li><a href="furnitures.html">Fridge - AC - Washing Machine</a></li>
							<li class="left-gap"><a href="furnitures.html">Fridges</a></li>
							<li class="left-gap"><a href="furnitures.html">AC</a></li>
							<li class="left-gap"><a href="furnitures.html">Washing Machine</a></li>
						</ul>
					</div>
					<div class="sitemap-region">
						<h4>Services</h4>
						<ul>
							<li><a href="services.html">Other Services</a></li>
							<li><a href="services.html">Education & Classes</a></li>
							<li class="left-gap"><a href="services.html">Tutoring</a></li>
							<li class="left-gap"><a href="services.html">Other</a></li>
							<li class="left-gap"><a href="services.html">Computer</a></li>
							<li class="left-gap"><a href="services.html">Language Classes</a></li>
							<li class="left-gap"><a href="services.html">Music & Dance</a></li>
							<li><a href="services.html">Drivers & Taxi</a></li>
							<li><a href="services.html">Web Development</a></li>
							<li><a href="services.html">Electronics & Computer Repair</a></li>
							<li class="left-gap"><a href="services.html">Computer</a></li>
							<li class="left-gap"><a href="services.html">Home Appliances</a></li>
							<li class="left-gap"><a href="services.html">Other Electronics</a></li>
							<li class="left-gap"><a href="services.html">Mobile</a></li>
							<li><a href="services.html">Health & Beauty</a></li>
							<li><a href="services.html">Event Services</a></li>
							<li><a href="services.html">Movers & Packers</a></li>
							<li><a href="services.html">Maids & Domestic Help</a></li>
						</ul>
					</div>
					<div class="sitemap-region">
						<h4>Real Estate</h4>
						<ul>
							<li><a href="real-estate.html">Land & Plots</a></li>
							<li class="left-gap"><a href="real-estate.html">Sale</a></li>
							<li class="left-gap"><a href="real-estate.html">Rent</a></li>
							<li><a href="real-estate.html">Apartments</a></li>
							<li class="left-gap"><a href="real-estate.html">Rent</a></li>
							<li class="left-gap"><a href="real-estate.html">Sale</a></li>
							<li><a href="real-estate.html">Houses</a></li>
							<li class="left-gap"><a href="real-estate.html">Rent</a></li>
							<li class="left-gap"><a href="real-estate.html">Sale</a></li>
							<li><a href="real-estate.html">Shops - Offices - Commercial Space</a></li>
							<li class="left-gap"><a href="real-estate.html">Lease</a></li>
							<li class="left-gap"><a href="real-estate.html">Sale</a></li>
							<li><a href="real-estate.html">PG & Roommates</a></li>
							<li><a href="real-estate.html">Vacation Rentals - Guest Houses</a></li>
						</ul>
					</div>
					<div class="sitemap-region">
						<h4>Bikes</h4>
						<ul>
							<li><a href="bikes.html">Motorcycles</a></li>
							<li><a href="bikes.html">Bajaj</a></li>
							<li><a href="bikes.html">Hero Honda</a></li>
							<li><a href="bikes.html">Yamaha</a></li>
							<li><a href="bikes.html">Royal Enfield</a></li>
							<li><a href="bikes.html">Honda</a></li>
							<li><a href="bikes.html">Hero</a></li>
							<li><a href="bikes.html">TVS</a></li>
							<li><a href="bikes.html">Suzuki</a></li>
							<li><a href="bikes.html">Other Brands</a></li>
							<li><a href="bikes.html">KTM</a></li>
							<li><a href="bikes.html">Mahindra</a></li>
							<li><a href="bikes.html">Kawasaki</a></li>
							<li><a href="bikes.html">Harley Davidson</a></li>
							<li><a href="bikes.html">Spare Parts</a></li>
							<li><a href="bikes.html">Scooters</a></li>
							<li><a href="bikes.html">Honda</a></li>
							<li><a href="bikes.html">TVS </a></li>
							<li><a href="bikes.html">Bajaj</a></li>
							<li><a href="bikes.html">Hero</a></li>
							<li><a href="bikes.html">Suzuki</a></li>
							<li><a href="bikes.html">Mahindra</a></li>
							<li><a href="bikes.html">LML</a></li>
							<li><a href="bikes.html">Kinetic</a></li>
							<li><a href="bikes.html">Other Brands</a></li>
							<li><a href="bikes.html">Yamaha</a></li>
							<li><a href="bikes.html">Vespa</a></li>
							<li><a href="bikes.html">Lambretta</a></li>
							<li><a href="bikes.html">Bicycles</a></li>
							<li><a href="bikes.html">Hero</a></li>
							<li><a href="bikes.html">Other Brands</a></li>
							<li><a href="bikes.html">Hercules</a></li>
							<li><a href="bikes.html">BSA</a></li>
							<li><a href="bikes.html">Atlas</a></li>
							<li><a href="bikes.html">Avon</a></li>
							<li><a href="bikes.html">Firefox</a></li>
							<li><a href="bikes.html">Trek</a></li>
						</ul>
					</div>
				</div>
				<div class="sitemap-region-grid">
					<div class="sitemap-region">
						<h4>Jobs</h4>
						<ul>
							<li><a href="jobs.html">Online</a></li>
							<li><a href="jobs.html">Other Jobs</a></li>
							<li><a href="jobs.html">Customer Service</a></li>
							<li><a href="jobs.html">IT</a></li>
							<li><a href="jobs.html">Marketing</a></li>
							<li><a href="jobs.html">Sales</a></li>
							<li><a href="jobs.html">Manufacturing</a></li>
							<li><a href="jobs.html">Clerical & Administration</a></li>
							<li><a href="jobs.html">Hotels & Tourism</a></li>
							<li><a href="jobs.html">Accounting & Finance</a></li>
							<li><a href="jobs.html">Advertising & PR</a></li>
							<li><a href="jobs.html">Human Resources</a></li>
							<li><a href="jobs.html">Education</a></li>
						</ul>
					</div>				
					<div class="sitemap-region">
						<h4>Cars</h4>
						<ul>
							<li><a href="cars.html">Cars</a></li>
							<li class="left-gap"><a href="cars.html">Maruti Suzuki</a></li>
							<li class="left-gap"><a href="cars.html">Hyundai</a></li>
							<li class="left-gap"><a href="cars.html">Tata</a></li>
							<li class="left-gap"><a href="cars.html">Mahindra</a></li>
							<li class="left-gap"><a href="cars.html">Honda</a></li>
							<li class="left-gap"><a href="cars.html">Ford</a></li>
							<li class="left-gap"><a href="cars.html">Toyota</a></li>
							<li class="left-gap"><a href="cars.html">Chevrolet</a></li>
							<li class="left-gap"><a href="cars.html">Skoda</a></li>
							<li class="left-gap"><a href="cars.html">Volkswagen</a></li>
							<li class="left-gap"><a href="cars.html">Fiat</a></li>
							<li class="left-gap"><a href="cars.html">Mitsubishi</a></li>
							<li class="left-gap"><a href="cars.html">Other Brands</a></li>
							<li class="left-gap"><a href="cars.html">Mercedes-Benz</a></li>
							<li class="left-gap"><a href="cars.html">Nissan</a></li>
							<li class="left-gap"><a href="cars.html">BMW</a></li>
							<li class="left-gap"><a href="cars.html">Renault</a></li>
							<li class="left-gap"><a href="cars.html">Hindustan Motors</a></li>
							<li class="left-gap"><a href="cars.html">Audi</a></li>
							<li class="left-gap"><a href="cars.html">Mahindra Renault</a></li>
							<li class="left-gap"><a href="cars.html">Opel</a></li>
							<li class="left-gap"><a href="cars.html">Daewoo</a></li>
							<li class="left-gap"><a href="cars.html">Force Motors</a></li>
							<li class="left-gap"><a href="cars.html">Landrover</a></li>
							<li class="left-gap"><a href="cars.html">Premier</a></li>
							<li class="left-gap"><a href="cars.html">Jaguar</a></li>
							<li class="left-gap"><a href="cars.html">Volvo</a></li>
							<li class="left-gap"><a href="cars.html">Isuzu</a></li>
							<li class="left-gap"><a href="cars.html">Mini</a></li>
							<li class="left-gap"><a href="cars.html">Porsche</a></li>
							<li class="left-gap"><a href="cars.html">Ssangyong</a></li>
							<li class="left-gap"><a href="cars.html">Mahindra Reva</a></li>
							<li class="left-gap"><a href="cars.html">Rolls Royce</a></li>
							<li class="left-gap"><a href="cars.html">Bentley</a></li>
							<li class="left-gap"><a href="cars.html">Ferrari</a></li>
							<li class="left-gap"><a href="cars.html">Lamborghini </a></li>
							<li><a href="cars.html">Spare Parts</a></li>
							<li class="left-gap"><a href="cars.html">Car Parts</a></li>
							<li class="left-gap"><a href="cars.html">Other Parts</a></li>
							<li class="left-gap"><a href="cars.html">Spare Parts</a></li>
							<li><a href="cars.html">Commercial Vehicles</a></li>
							<li><a href="cars.html">Other Vehicles</a></li>
							<li><a href="cars.html">Motorcycles</a></li>
							<li class="left-gap"><a href="cars.html">Hero Honda</a></li>
							<li class="left-gap"><a href="cars.html">Honda</a></li>
							<li class="left-gap"><a href="cars.html">Bajaj</a></li>
							<li class="left-gap"><a href="cars.html">TVS</a></li>
							<li class="left-gap"><a href="cars.html">Royal Enfield</a></li>
							<li class="left-gap"><a href="cars.html">Suzuki</a></li>
							<li><a href="cars.html">Scooters</a></li>
							<li class="left-gap"><a href="cars.html">Honda</a></li>
							<li class="left-gap"><a href="cars.html">Bajaj</a></li>
							<li class="left-gap"><a href="cars.html">TVS</a></li>
							<li class="left-gap"><a href="cars.html">Suzuki</a></li>
							<li class="left-gap"><a href="cars.html">Kinetic</a></li>
							<li class="left-gap"><a href="cars.html">Mahindra</a></li>
							<li><a href="cars.html">Bicycles</a></li>
							<li class="left-gap"><a href="cars.html">Other Brands</a></li>
							<li class="left-gap"><a href="cars.html">Hero</a></li>
						</ul>
					</div>
					<div class="sitemap-region">
						<h4>Pets</h4>
						<ul>
							<li><a href="pets.html">Dogs</a></li>
							<li class="left-gap"><a href="pets.html">Other Breeds</a></li>
							<li class="left-gap"><a href="pets.html">Labrador</a></li>
							<li class="left-gap"><a href="pets.html">German Shepherd</a></li>
							<li class="left-gap"><a href="pets.html">Rottweiler</a></li>
							<li class="left-gap"><a href="pets.html">Pug</a></li>
							<li class="left-gap"><a href="pets.html">Mastiff</a></li>
							<li class="left-gap"><a href="pets.html">Saint Bernard</a></li>
							<li class="left-gap"><a href="pets.html">Golden Retriever</a></li>
							<li class="left-gap"><a href="pets.html">Beagle</a></li>
							<li class="left-gap"><a href="pets.html">Pomeranian</a></li>
							<li class="left-gap"><a href="pets.html">Doberman</a></li>
							<li class="left-gap"><a href="pets.html">Husky</a></li>
							<li class="left-gap"><a href="pets.html">Cocker Spaniel</a></li>
							<li class="left-gap"><a href="pets.html">Boxer</a></li>
							<li class="left-gap"><a href="pets.html">Bulldog</a></li>
							<li class="left-gap"><a href="pets.html">Dalmatian</a></li>
							<li><a href="pets.html">Other Pets</a></li>
							<li><a href="pets.html">Aquariums</a></li>
							<li><a href="pets.html">Pet Food & Accessories</a></li>
						</ul>
					</div>
				</div>
				<div class="sitemap-region-grid">
					<div class="sitemap-region">					
						<h4>Mobiles</h4>
						<ul>
							<li><a href="mobiles.html">Mobile Phones</a></li>
							<li class="left-gap"><a href="mobiles.html">Samsung</a></li>
							<li class="left-gap"><a href="mobiles.html">Nokia</a></li>
							<li class="left-gap"><a href="mobiles.html">Other Mobiles</a></li>
							<li class="left-gap"><a href="mobiles.html">Micromax</a></li>
							<li class="left-gap"><a href="mobiles.html">iPhone</a></li>
							<li class="left-gap"><a href="mobiles.html">Sony</a></li>
							<li class="left-gap"><a href="mobiles.html">HTC</a></li>
							<li class="left-gap"><a href="mobiles.html">Lenovo</a></li>
							<li class="left-gap"><a href="mobiles.html">Intex</a></li>
							<li class="left-gap"><a href="mobiles.html">Motorola</a></li>
							<li class="left-gap"><a href="mobiles.html">Lava</a></li>
							<li class="left-gap"><a href="mobiles.html">LG</a></li>
							<li class="left-gap"><a href="mobiles.html">Mi</a></li>
							<li class="left-gap"><a href="mobiles.html">BlackBerry</a></li>
							<li class="left-gap"><a href="mobiles.html">Karbonn</a></li>
							<li class="left-gap"><a href="mobiles.html">Asus</a></li>
							<li><a href="mobiles.html">Accessories</a></li>
							<li class="left-gap"><a href="mobiles.html">Mobile</a></li>
							<li class="left-gap"><a href="mobiles.html">Tablets</a></li>
							<li><a href="mobiles.html">Tablets</a></li>
							<li class="left-gap"><a href="mobiles.html">Samsung</a></li>
							<li class="left-gap"><a href="mobiles.html">Other Tablets</a></li>
							<li class="left-gap"><a href="mobiles.html">iPads</a></li>
							<li class="left-gap"><a href="mobiles.html">iBall</a></li>
							<li class="left-gap"><a href="mobiles.html">Micromax</a></li>
							<li class="left-gap"><a href="mobiles.html">Lenovo</a></li>
							<li class="left-gap"><a href="mobiles.html">Asus</a></li>
							<li class="left-gap"><a href="mobiles.html">HP</a></li>
							<li class="left-gap"><a href="mobiles.html">Dell</a></li>
							<li class="left-gap"><a href="mobiles.html">HCL</a></li>
							<li class="left-gap"><a href="mobiles.html">Acer</a></li>
							<li class="left-gap"><a href="mobiles.html">Blackberry</a></li>
							<li class="left-gap"><a href="mobiles.html">Sony</a></li>
						</ul>
					</div>
					<div class="sitemap-region">					
						<h4>Kids</h4>
						<ul>
							<li><a href="kids.html">Furniture And Toys</a></li>
							<li><a href="kids.html">Accessories</a></li>
							<li><a href="kids.html">Prams & Walkers</a></li>
						</ul>
					</div>
					<div class="sitemap-region">
						<h4>Fashion</h4>
						<ul>
							<li><a href="fashion.html">Accessories</a></li>
							<li class="left-gap"><a href="fashion.html">Women</a></li>
							<li class="left-gap"><a href="fashion.html">Men</a></li>
							<li><a href="fashion.html">Clothes</a></li>
							<li class="left-gap"><a href="fashion.html">Women</a></li>
							<li class="left-gap"><a href="fashion.html">Men</a></li>
							<li><a href="fashion.html">Footwear</a></li>
							<li class="left-gap"><a href="fashion.html">Men</a></li>
							<li class="left-gap"><a href="fashion.html">Women</a></li>
						</ul>
					</div>
					<div class="sitemap-region">
						<h4>Electronics & Appliances</h4>
						<ul>
							<li><a href="electronics-appliances.html">Computers & Accessories</a></li>
							<li class="left-gap"><a href="electronics-appliances.html">Laptops</a></li>
							<li class="left-gap"><a href="electronics-appliances.html">Computers</a></li>
							<li class="left-gap"><a href="electronics-appliances.html">Other Accessories</a></li>
							<li class="left-gap"><a href="electronics-appliances.html">Internet</a></li>
							<li class="left-gap"><a href="electronics-appliances.html">Printers</a></li>
							<li class="left-gap"><a href="electronics-appliances.html">Monitors</a></li>
							<li class="left-gap"><a href="electronics-appliances.html">Hard Disk</a></li>
							<li><a href="electronics-appliances.html">Kitchen & Other Appliances</a></li>
							<li><a href="electronics-appliances.html">TV - Video - Audio</a></li>
							<li class="left-gap"><a href="electronics-appliances.html">Video - Audio</a></li>
							<li class="left-gap"><a href="electronics-appliances.html">TV</a></li>
							<li><a href="electronics-appliances.html">Cameras & Accessories</a></li>
							<li class="left-gap"><a href="electronics-appliances.html">Cameras</a></li>
							<li class="left-gap"><a href="electronics-appliances.html">Other Accessories</a></li>
							<li class="left-gap"><a href="electronics-appliances.html">Lenses</a></li>
							<li><a href="electronics-appliances.html">Games & Entertainment</a></li>
							<li><a href="electronics-appliances.html">Fridge - AC - Washing Machine</a></li>
							<li class="left-gap"><a href="electronics-appliances.html">Fridges</a></li>
							<li class="left-gap"><a href="electronics-appliances.html">Washing Machine</a></li>
							<li class="left-gap"><a href="electronics-appliances.html">AC</a></li>
						</ul>
					</div>
					<div class="sitemap-region">
						<h4>Books, Sports & Hobbies</h4>
						<ul>
							<li><a href="books-sports-hobbies.html">Gym & Fitness</a></li>
							<li><a href="books-sports-hobbies.html">Other Hobbies</a></li>
							<li><a href="books-sports-hobbies.html">Musical Instruments</a></li>
							<li><a href="books-sports-hobbies.html">Books & Magazines</a></li>
							<li class="left-gap"><a href="books-sports-hobbies.html">Education & Training</a></li>
							<li class="left-gap"><a href="books-sports-hobbies.html">Competitive Exam</a></li>
							<li class="left-gap"><a href="books-sports-hobbies.html">Literature & Fiction</a></li>
							<li class="left-gap"><a href="books-sports-hobbies.html">Professional & Technical</a></li>
							<li class="left-gap"><a href="books-sports-hobbies.html">Other Books</a></li>
							<li class="left-gap"><a href="books-sports-hobbies.html">School Books</a></li>
							<li class="left-gap"><a href="books-sports-hobbies.html">Children</a></li>
							<li><a href="books-sports-hobbies.html">Sports Equipment</a></li>
						</ul>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
                <Footer />
            </div>
        )
    }
}
export default Sitemap;