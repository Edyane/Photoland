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
				{/* links */}
				<div>
					<a href='#' className="hover:text-white transition all">Returns policy</a>
					<a href='#' className="hover:text-white transition all">Track your order</a>
					<a href='#' className="hover:text-white transition all">Shipping & delivery</a>
				</div>
				{/* socials */}
				<div>
					<a href="#" className="hover:text-white transition all">
						<FaYoutube />
					</a>

					<a href="#" className="hover:text-white transition all">
						<FaInstagram />
					</a>

					<a href="#" className="hover:text-white transition all">
						<FaTwitter />
					</a>

					<a href="#" className="hover:text-white transition all">
						<FaFacebook />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
