import React from "react";
import { About, Blog, Footer, Hero, Navbar, Testimonials } from "./components";

const App = () => {
	return (
		<div className=" bg-bgLight flex flex-col items-center justify-start w-full ">
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
