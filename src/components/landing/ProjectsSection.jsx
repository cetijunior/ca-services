// src/pages/landing/ProjectsSection.jsx
import React from "react";
import { motion } from "framer-motion"; // Importing framer-motion for animations
import ShootingStars from "../layout/ShootingStars";

const projectData = [
	{
		id: 1,
		imageSrc: "/assets/images/project1.png",
		title: "Our portfolio",
		description: "Showcasing our best works and projects.",
		bgColor: "bg-green-500",
		glowColor: "rgba(34, 197, 94, 0.8)", // Stronger green glow color
	},
	{
		id: 2,
		imageSrc: "/assets/images/project2.png",
		title: "Web3 Product Design",
		description: "Creating modern and intuitive web3 interfaces.",
		bgColor: "bg-purple-200",
		glowColor: "rgba(192, 132, 252, 0.8)", // Stronger purple glow color
	},
	{
		id: 3,
		imageSrc: "/assets/images/project3.png",
		title: "Crypto Dashboard",
		description: "Manage and analyze crypto portfolios effortlessly.",
		bgColor: "bg-blue-300",
		glowColor: "rgba(96, 165, 250, 0.8)", // Stronger blue glow color
	},
	{
		id: 4,
		imageSrc: "/assets/images/project4.png",
		title: "AudiencePlus",
		description: "Engage with your audience like never before.",
		bgColor: "bg-purple-600",
		glowColor: "rgba(139, 92, 246, 0.8)", // Stronger dark purple glow color
	},
];

// Animation container settings for stagger effect
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3, // Slower stagger each child animation
			delayChildren: 0.3,
		},
	},
};

// Individual card animation settings
const cardVariants = {
	hidden: { opacity: 0, y: 70 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 1.2, ease: "easeOut" }, // Slower transition duration
	},
};

const ProjectsSection = () => {
	return (
		<section id="projects" className="relative text-white py-16 px-6 md:px-20">
			<ShootingStars />
			<div className="max-w-7xl max-h-7xl mx-auto">
				<motion.h2
					initial="hidden"
					variants={containerVariants} // Applying container variants
					whileInView="visible"
					viewport={{ once: true }}
					className="text-3xl md:text-5xl font-bold mb-12"
				>
					Projects
				</motion.h2>
				<motion.div
					className="flex flex-wrap gap-8"
					variants={containerVariants} // Applying container variants
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }} // Trigger only once when in view
				>
					{projectData.map((project) => (
						<motion.div
							key={project.id}
							className={`relative flex-grow overflow-hidden rounded-lg shadow-lg ${project.bgColor} p-6 min-w-[280px] min-h-[280px] md:min-w-[300px] lg:min-w-[350px] lg:min-h-[350px] flex flex-col justify-end`}
							variants={cardVariants} // Applying card variants for animation
							whileHover={{
								scale: 1.05, // Subtle zoom on hover
								boxShadow: `0px 0px 100px ${project.glowColor}`, // Stronger glow effect on hover
							}}
						>
							{/* Background Image */}
							<div className="absolute inset-0">
								<img
									src={project.imageSrc}
									alt={project.title}
									className="w-full h-full object-cover opacity-80"
								/>
							</div>

							{/* Overlay for Text */}
							<div
								className={`relative z-10 flex flex-col justify-end h-full transition-opacity  ${
									// Conditional classes for hover behavior on lg screens and always visible on sm screens
									"lg:opacity-0 lg:hover:opacity-100 sm:opacity-100"
									}`}
							>
								<div className="mt-auto bg-black bg-opacity-60 p-4 rounded-lg backdrop-blur-sm">
									{/* Title */}
									<h3 className="text-lg md:text-xl font-semibold mb-2">
										{project.title}
									</h3>
									{/* Placeholder Description */}
									<p className="text-sm opacity-80">{project.description}</p>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default ProjectsSection;
