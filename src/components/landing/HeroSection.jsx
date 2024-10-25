// src/pages/landing/HeroSection.jsx
import React from "react";
import { FiArrowDown } from "react-icons/fi"; // Importing arrow icon for scroll down hint
import { motion } from "framer-motion"; // Importing framer-motion for animations

const HeroSection = () => {
	return (
		<section
			className="min-h-screen flex flex-col justify-center bg-cover bg-center bg-black text-white px-6 md:px-12 lg:px-24 relative overflow-hidden"
			style={{
				backgroundImage: "url('/assets/images/phone.png')",
				backgroundSize: "contain",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "right top",
			}}
		>
			{/* Top Content */}
			<div className="flex flex-col justify-center items-start w-full max-w-7xl">
				{/* Left - Headline */}
				<motion.div
					className="flex sm:-mt-32 h-screen flex-col justify-center sm:justify-evenly md:pr-8 lg:pr-16"
					initial={{ opacity: 0, y: 20 }} // Start from opacity 0 and a bit lower
					animate={{ opacity: 1, y: 0 }} // Animate to full opacity and normal position
					transition={{ duration: 1, ease: "easeOut" }} // Animation timing
				>
					<motion.h1
						className="text-center sm:text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
						initial={{ opacity: 0, scale: 0.95 }} // Slightly smaller and transparent
						animate={{ opacity: 1, scale: 1 }} // Animate to full size and opacity
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						Design studio
						<br />
						<span>for the</span>
						<br />
						<span className="text-purple">web3 world</span>
					</motion.h1>
					<motion.p
						className="text-base sm:text-lg md:text-xl opacity-70"
						initial={{ opacity: 0, x: -30 }} // Start from the left
						animate={{ opacity: 1, x: 0 }} // Animate to normal position
						transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
					>
						We help companies design their products to be ready for the web3
						world
					</motion.p>
					<motion.div
						className="mt-8 border-2 sm:w-fit w-full p-2 rounded-3xl md:mt-12 flex sm:justify-start justify-center items-center space-x-4 opacity-70"
						initial={{ opacity: 0, y: 20 }} // Start slightly lower
						animate={{ opacity: 1, y: 0 }} // Animate to normal position
						transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
					>
						<FiArrowDown className="text-lg" />
						<p className="text-sm">Scroll down</p>
					</motion.div>
				</motion.div>
			</div>

			{/* Bottom Content - Client Logos */}
			<motion.div
				className="absolute sm:left-0 flex flex-col justify-center sm:items-center items-start bottom-32 sm:bottom-36 w-full"
				initial={{ opacity: 0, y: 20 }} // Start slightly lower
				animate={{ opacity: 1, y: 0 }} // Animate to normal position
				transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
			>
				<motion.p
					className="text-left text-sm opacity-70 mb-6"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
				>
					Our clients are backed by:
				</motion.p>
				<motion.div
					className="flex flex-row justify-center items-center space-x-4 sm:space-x-8 opacity-80"
					initial={{ opacity: 0, scale: 0.9 }} // Start slightly smaller and transparent
					animate={{ opacity: 1, scale: 1 }} // Animate to full size and opacity
					transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
				>
					<img
						src="/assets/images/client1.png"
						alt="Y Combinator"
						className="h-6 sm:h-8"
					/>
					<img
						src="/assets/images/client2.png"
						alt="Coinbase"
						className="h-6 sm:h-8"
					/>
					<img
						src="/assets/images/client3.png"
						alt="BlockChange"
						className="h-6 sm:h-8"
					/>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default HeroSection;
