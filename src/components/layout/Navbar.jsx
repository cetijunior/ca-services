// src/components/layout/Navbar.jsx
import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi"; // Using react-icons for the burger icon

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="z-20 flex justify-between items-center px-8 py-6 bg-black text-white relative">
			<div className="text-xl font-bold">CA Services</div>

			{/* Desktop Menu with Quick Links */}
			<ul className="hidden lg:flex space-x-8 text-sm uppercase">
				<li className="hover:text-purple cursor-pointer">Home</li>
				<li className="hover:text-purple cursor-pointer">About</li>
				<li className="hover:text-purple cursor-pointer">Contact</li>
				<li className="hover:text-purple cursor-pointer">Career</li>
				<li className="hover:text-purple cursor-pointer">Projects</li>
				<li className="hover:text-purple cursor-pointer">Links</li>
			</ul>

			{/* Burger Icon - Visible on all screen sizes */}
			<div className="cursor-pointer text-2xl">
				<HiMenuAlt4 />
			</div>
		</nav>
	);
};

export default Navbar;
