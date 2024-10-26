// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ShootingStars from "./components/layout/ShootingStars"; // Importing ShootingStars component

const App = () => {
	return (
		<Router>

			<ShootingStars />
			<Navbar />
			{/* Main Content Wrapper */}
			<div className="pt-16">
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/projects" element={<ProjectsPage />} />
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	);
};

export default App;
