// src/pages/landing/ContactSection.jsx
import React from "react";
import { motion } from "framer-motion"; // Importing framer-motion for animations
import {
	FaFacebook,
	FaInstagram,
	FaDribbble,
	FaLinkedin,
	FaEnvelope,
	FaPhone,
	FaMapMarkerAlt,
} from "react-icons/fa"; // Icons for social media

const ContactSection = () => {
	// Animation variants for framer-motion
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	return (
		<section className="relative bg-black text-white py-20 px-6 md:px-20 lg:px-32 overflow-hidden">
			{/* Background Decorative Gradient */}
			<div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-black opacity-20 blur-3xl z-0"></div>

			{/* Content Wrapper */}
			<motion.div
				className="relative max-w-7xl mx-auto"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				<div className="flex flex-col lg:flex-row justify-between items-start lg:space-x-16">
					{/* Left Section - Google Maps & Contact Details */}
					<div className="lg:w-1/2 mb-12 lg:mb-0">
						{/* Contact Details */}
						<motion.div className="space-y-8" variants={itemVariants}>
							{/* Title and Description */}
							<h2 className="text-3xl md:text-5xl font-bold mb-4 text-center lg:text-left">
								CA Services
							</h2>
							<p className="text-lg opacity-75 mb-2">
								Feel free to reach out if you want to collaborate with us, or
								simply have a chat.
							</p>

							{/* Email */}
							<a
								href="mailto:lameceti1@gmail.com"
								className="inline-flex items-center text-lg font-semibold text-purple-400 hover:text-purple-500 transition-colors duration-300"
							>
								<FaEnvelope className="mr-2 text-xl" />
								ca-services@gmail.com

							</a>
							<br />
							{/* Phone Number */}
							<div className="inline-flex items-center text-lg font-semibold text-purple-400 hover:text-purple-500 transition-colors duration-300">
								<FaPhone className="mr-2 text-xl" />
								+123 456 7890
							</div>
							<br />
							{/* Location */}
							<div className="inline-flex items-center text-lg font-semibold text-purple-400 hover:text-purple-500 transition-colors duration-300">
								<FaMapMarkerAlt className="mr-2 text-xl" />
								123 Web3 Lane, Blockchain City, CR 12345
							</div>
							{/* Google Maps Embed */}
							<motion.div
								className="rounded-lg shadow-lg overflow-hidden mb-8"
								variants={itemVariants}
							>
								<iframe
									title="Google Maps"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d475922.6856813439!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%20City%2C%20New%20York!5e1!3m2!1sde!2sus!4v1729897492847!5m2!1sde!2sus"
									width="100%"
									height="300"
									style={{ border: 0 }}
									allowFullScreen=""
									loading="lazy"
								></iframe>
							</motion.div>
						</motion.div>
					</div>

					{/* Right Section - Contact Form */}
					<div className="lg:w-1/2 w-full">
						<motion.form
							className="bg-black rounded-lg p-8 md:p-12 backdrop-blur-sm"
							variants={itemVariants}
						>
							{/* Name Input */}
							<div className="mb-6">
								<input
									type="text"
									placeholder="Your Name"
									className="w-full p-4 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
								/>
							</div>

							{/* Email Input */}
							<div className="mb-6">
								<input
									type="email"
									placeholder="Your Email"
									className="w-full p-4 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
								/>
							</div>

							{/* Phone Input */}
							<div className="mb-6">
								<input
									type="text"
									placeholder="Your Phone Number"
									className="w-full p-4 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
								/>
							</div>

							{/* Subject Input */}
							<div className="mb-6">
								<input
									type="text"
									placeholder="Subject"
									className="w-full p-4 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
								/>
							</div>

							{/* Message Input */}
							<div className="mb-6">
								<textarea
									placeholder="Your Message"
									rows="5"
									className="w-full p-4 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
								></textarea>
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-md transition-colors duration-300 shadow-lg shadow-purple-500/50"
							>
								Send Message
							</button>
						</motion.form>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default ContactSection;
