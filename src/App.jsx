import React from "react";
import { About, Blog, Footer, Hero, Navbar, Testimonials } from "./components";

const App = () => {
	return (
		<div className="w-full flex flex-col items-center justify-start">
			<Navbar />
			<Hero />
			<About />
			<Testimonials />
			<Blog />
			<Footer />
		</div>
	);
};

export default App;
