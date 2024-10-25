// src/components/layout/CustomBackground.jsx
import React from "react";
import { motion } from "framer-motion"; // For animations

const imageVariant = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 1, ease: "easeOut" },
	},
};

const CustomBackground = ({ children }) => {
	return (
		<div className="relative min-h-screen overflow-hidden"> {/* Removed temporary background color */}
			{/* Decorative Circles - Ensure they are not covered by other layers */}
			<motion.div
				className="absolute -top-12 -left-16 w-40 h-40 rounded-full bg-purple-500 opacity-50 blur-2xl z-0"
				variants={imageVariant}
				initial="hidden"
				animate="visible"
			></motion.div>
			<motion.div
				className="absolute -bottom-16 -right-12 w-32 h-32 rounded-full bg-teal-400 opacity-50 blur-2xl z-0"
				variants={imageVariant}
				initial="hidden"
				animate="visible"
			></motion.div>
			{/* Content - Ensure content is layered above the background */}
			<div className="relative z-10 bg-black min-h-screen">{children}</div> {/* Ensure this has a background color if needed */}
		</div>
	);
};

export default CustomBackground;
