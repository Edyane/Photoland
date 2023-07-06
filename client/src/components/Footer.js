import React from "react";
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="pt-16" bg-primary>
			<div className="container mx-auto">
				<div>
					<h2>Subscribe to our newsletter</h2>
					<p>
						Be the first to get the latest news about trends,
						promotions and much more!
					</p>
				</div>
				{/* form */}
				<form>
					<input
						type="text"
						placeholder="Your email adress"
						className="input"
					/>
					<button className="btn btn-accent min-w-[150px]">
						Join
					</button>
				</form>
				{/* lines */}
			</div>
		</footer>
	);
};

export default Footer;
