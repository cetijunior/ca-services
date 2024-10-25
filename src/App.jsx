// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage"; // Example additional pages
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import CustomBackground from "./components/layout/CustomBackground";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const App = () => {
	return (
		<Router>
			<CustomBackground> {/* Moved CustomBackground to wrap around Navbar and Footer */}
				<Navbar />
				{/* Make sure the CustomBackground wraps around Routes */}
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/projects" element={<ProjectsPage />} />
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
				<Footer />
			</CustomBackground>
		</Router>
	);
};

export default App;
