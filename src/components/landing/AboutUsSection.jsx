// src/pages/landing/AboutSection.jsx
import React from "react";
import { motion } from "framer-motion"; // Importing framer-motion for animations
import { FaLightbulb, FaUsers, FaHandshake } from "react-icons/fa"; // Importing icons for visual enhancement

const AboutSection = () => {
	// Animation variants for framer-motion
	const textVariant = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: "easeOut" },
		},
	};

	const containerVariant = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3, // Stagger animation for children
				delayChildren: 0.2,
			},
		},
	};

	const imageVariant = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 1, ease: "easeOut" },
		},
	};

	return (
		<section className="bg-black text-white py-20 px-6 md:px-24 relative overflow-hidden">
			{/* Background Decorative Gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-black opacity-20 blur-3xl z-0"></div>

			{/* Content Wrapper */}
			<motion.div
				className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
				variants={containerVariant}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				{/* Left Side - Text Content */}
				<div className="space-y-8">
					<motion.h2
						className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
						variants={textVariant}
					>
						Discover Our Passion for{" "}
						<span className="text-purple-400">Web3</span> Innovation
					</motion.h2>
					<motion.p
						className="text-lg md:text-xl opacity-75 leading-relaxed"
						variants={textVariant}
					>
						At Web3 Studio, we are dedicated to designing the future of the
						digital landscape. Our mission is to create beautiful and functional
						products that harness the power of blockchain and decentralized
						technologies.
					</motion.p>
					<motion.p
						className="text-lg md:text-xl opacity-75 leading-relaxed"
						variants={textVariant}
					>
						From crafting intuitive interfaces to building seamless user
						experiences, our team is passionate about bringing cutting-edge
						technology to everyone.
					</motion.p>
				</div>

				{/* Right Side - Image Content */}
				<div className="relative">
					<motion.div
						className="w-full h-full rounded-lg shadow-lg overflow-hidden bg-black p-2 relative"
						variants={imageVariant}
					>
						{/* Main Image */}
						<img
							src="/assets/images/team.jpg"
							alt="Our Team"
							className="w-full h-full object-cover rounded-lg"
						/>
					</motion.div>

					{/* Decorative Circles */}
					<motion.div
						className="absolute -top-12 -left-16 w-40 h-40 rounded-full bg-purple-500 opacity-30 blur-2xl"
						variants={imageVariant}
					></motion.div>
					<motion.div
						className="absolute -bottom-16 -right-12 w-32 h-32 rounded-full bg-teal-400 opacity-30 blur-2xl"
						variants={imageVariant}
					></motion.div>
				</div>
			</motion.div>

			{/* Bottom Section - Core Values with Icons */}
			<motion.div
				className="relative max-w-5xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
				variants={containerVariant}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				{[
					{
						title: "Innovative Solutions",
						description: "Pioneering the way in blockchain technology.",
						icon: <FaLightbulb className="text-yellow-400 text-3xl mb-4" />,
					},
					{
						title: "User-Centric Design",
						description: "Crafting experiences that prioritize users.",
						icon: <FaUsers className="text-blue-300 text-3xl mb-4" />,
					},
					{
						title: "Collaborative Spirit",
						description: "Partnering with brands to push boundaries.",
						icon: <FaHandshake className="text-green-400 text-3xl mb-4" />,
					},
				].map((item, index) => (
					<motion.div
						key={index}
						className="bg-gradient-to-b hover:shadow-[#69e2be] shadow-2xl from-black to-gray-900 p-6 rounded-lg backdrop-blur-lg hover:bg-opacity-90 transition duration-300"
						variants={textVariant}
					>
						{/* Icon */}
						<div className="flex justify-center">{item.icon}</div>
						{/* Title */}
						<h3 className="text-2xl font-semibold mb-4 text-center">
							{item.title}
						</h3>
						{/* Description */}
						<p className="text-base opacity-75 text-center">
							{item.description}
						</p>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default AboutSection;
