// src/components/layout/Navbar.jsx
import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi"; // Using react-icons for the burger icon
import { Link } from "react-scroll"; // Importing Link from react-scroll for smooth scrolling

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="z-20 fixed flex w-screen justify-between items-center px-8 py-6 bg-black text-white ">
			<button className="text-xl font-bold" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
				<img src="/assets/icons/logo.png" className="sm:w-10 w-10" />
			</button>


			{/* Section Buttons */}
			<ul className="hidden lg:flex space-x-8 text-sm uppercase">
				<li>
					<button className="hover:text-purple cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</button>
				</li>
				<li>
					<Link to="about" smooth={true} duration={500} className="hover:text-purple cursor-pointer">About</Link>
				</li>
				<li>
					<Link to="projects" smooth={true} duration={500} className="hover:text-purple cursor-pointer">Projects</Link>
				</li>
				<li>
					<Link to="contact" smooth={true} duration={500} className="hover:text-purple cursor-pointer">Contact</Link>
				</li>
				{/* <li>
					<Link to="/about" className="hover:text-purple cursor-pointer">About Us</Link>
				</li>
				<li>
					<Link to="/projects" className="hover:text-purple cursor-pointer">Projects</Link>
				</li>
				<li>
					<Link to="/contact" className="hover:text-purple cursor-pointer">Contact</Link>
				</li> */}
			</ul>

			{/* Burger Icon - Visible on all screen sizes */}
			<div className="cursor-pointer text-2xl" onClick={toggleMenu}>
				<HiMenuAlt4 />
			</div>

			{/* Dropdown Menu for Mobile */}
			{isMenuOpen && (
				<div className="absolute right-0 top-16 mt-2 w-48 bg-black text-white rounded-md shadow-lg z-30">
					<ul className="flex flex-col p-2">
						{/* 
						<li className="py-2">
							<Link to="hero" smooth={true} duration={500} onClick={toggleMenu} className="hover:text-purple">Home</Link>
						</li>
						<li className="py-2">
							<Link to="about" smooth={true} duration={500} onClick={toggleMenu} className="hover:text-purple">About</Link>
						</li>
						<li className="py-2">
							<Link to="projects" smooth={true} duration={500} onClick={toggleMenu} className="hover:text-purple">Projects</Link>
						</li>
						<li className="py-2">
							<Link to="contact" smooth={true} duration={500} onClick={toggleMenu} className="hover:text-purple">Contact</Link>
						</li> */}


						<li className="py-2">
							<Link to="/about" onClick={toggleMenu} className="hover:text-purple">About Us</Link>
						</li>
						<li className="py-2">
							<Link to="/projects" onClick={toggleMenu} className="hover:text-purple">Projects</Link>
						</li>
						<li className="py-2">
							<Link to="/contact" onClick={toggleMenu} className="hover:text-purple">Contact</Link>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
