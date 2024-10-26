import React from "react";
import HeroSection from "../components/landing/HeroSection";
import AboutSection from "../components/landing/AboutUsSection";
import ProjectsSection from "../components/landing/ProjectsSection";
import ContactSection from "../components/landing/ContactSection";
import ShootingStars from "../components/layout/ShootingStars";

function LandingPage() {
	return (
		<div style={{ background: "#000000" }}>
			<ShootingStars />
			<div>
				<HeroSection />
				<AboutSection />
				<ProjectsSection />
				<ContactSection />
			</div>
		</div>
	);
}

export default LandingPage;
