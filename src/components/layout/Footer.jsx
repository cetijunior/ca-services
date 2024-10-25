// src/components/layout/Footer.jsx
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-black justify-center text-white py-12 px-6 md:px-20">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-800 pt-8">
				{/* Left Section - Logo & Copyright */}
				<div className="flex flex-col justify-between space-y-4 md:space-y-0">
					<h2 className="text-lg font-bold">CA Services</h2>
					<p className="text-sm opacity-60">
						&copy; 2024 CA Services. All rights reserved.
					</p>
				</div>

				{/* Center Section - Pages */}
				<div className="flex flex-col space-y-4">
					<h3 className="text-lg font-semibold">Pages</h3>
					<ul className="space-y-2">
						<li>
							<a
								href="#"
								className="hover:text-purple transition-colors duration-300"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:text-purple transition-colors duration-300"
							>
								About Us
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:text-purple transition-colors duration-300"
							>
								Services
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:text-purple transition-colors duration-300"
							>
								Careers
							</a>
						</li>
					</ul>
				</div>

				{/* Right Section - Quick Links */}
				<div className="flex flex-col space-y-4">
					<h3 className="text-lg font-semibold">Quick Links</h3>
					<ul className="space-y-2">
						<li>
							<a
								href="#"
								className="hover:text-purple transition-colors duration-300"
							>
								Privacy Policy
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:text-purple transition-colors duration-300"
							>
								Terms of Service
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:text-purple transition-colors duration-300"
							>
								Contact Us
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:text-purple transition-colors duration-300"
							>
								FAQs
							</a>
						</li>
					</ul>
				</div>
			</div>

			{/* Bottom Border & Social Media Links */}
			<div className="border-t border-gray-800 mt-8 pt-6 flex justify-between items-center max-w-7xl mx-auto">
				<p className="text-sm opacity-50">Follow Us:</p>
				<div className="flex space-x-6">
					<a
						href="#"
						className="hover:text-purple transition-colors duration-300"
					>
						<FaFacebook />
					</a>
					<a
						href="#"
						className="hover:text-purple transition-colors duration-300"
					>
						<FaLinkedin />
					</a>
					<a
						href="#"
						className="hover:text-purple transition-colors duration-300"
					>
						<FaTwitter />
					</a>
					<a
						href="#"
						className="hover:text-purple transition-colors duration-300"
					>
						<FaInstagram />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
