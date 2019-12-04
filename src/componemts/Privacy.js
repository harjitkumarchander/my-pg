import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Topbar from './Topbar';
import Footer from './Footer';

class Privacy extends Component {
    render() {
        return (
            <div>
                <Topbar />
                <div className="w3layouts-breadcrumbs text-center">
		<div className="container">
			<span className="agile-breadcrumbs"><Link to="/"><i className="fa fa-home home_1"></i></Link> / <span>Privacy Policy</span></span>
		</div>
	</div>
	<div className="privacy main-grid-border">
		<div className="container">
			<h2 className="w3-head">Privacy Policy</h2>
				<p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur.</p>
				<h4>Security:</h4>
				<p className="privacy-para">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum</p>
				<ol className="privacy-start">
					<li><Link href="#">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids .</Link></li>
					<li><Link href="#">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed .</Link></li>
					<li><Link href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</Link></li>
					<li><Link href="#">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids .</Link></li>
					<li><Link href="#">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed .</Link></li>
					<li><Link href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</Link></li>
				</ol>
				<h4 className="use-privay">Tips for safe transaction:</h4>
				<ul className="privacy-start">
					<li><Link href="#">Contrary to popular belief, Lorem Ipsum is not simply random text.</Link></li>
					<li><Link href="#">There are many variations of passages of Lorem Ipsum available.</Link></li>
					<li><Link href="#">It is a long established fact that a reader will be distracted.</Link></li>
					<li><Link href="#">Lorem Ipsum is simply dummy text of the printing.</Link></li>
					<li><Link href="#">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</Link></li>
					<li><Link href="#">Contrary to popular belief, Lorem Ipsum is not simply random text.</Link></li>
					<li><Link href="#">There are many variations of passages of Lorem Ipsum available.</Link></li>
					<li><Link href="#">It is a long established fact that a reader will be distracted.</Link></li>
					<li><Link href="#">Lorem Ipsum is simply dummy text of the printing.</Link></li>
					<li><Link href="#">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</Link></li>
					<li><Link href="#">Contrary to popular belief, Lorem Ipsum is not simply random text.</Link></li>
					<li><Link href="#">There are many variations of passages of Lorem Ipsum available.</Link></li>
					<li><Link href="#">It is a long established fact that a reader will be distracted.</Link></li>
					<li><Link href="#">Lorem Ipsum is simply dummy text of the printing.</Link></li>
					<li><Link href="#">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</Link></li>
				</ul>
		</div>	
	</div>
    <Footer />
            </div>
        )
    }
}
export default Privacy;