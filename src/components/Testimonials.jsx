import React from "react";

const Testimonials = () => {
	const brands = [
		"/odan.webp",
		"/playwright.webp",
		"/orca.webp",
		"/mina.webp",
		"/br.webp",
		"/arquivar.webp",
	];
	return (
		<div className="w-full padding py-32 ">
			{/* who we are*/}
			<div className="w-full flex justify-center gap-32 items-center cointainer">
				{/* Text */}
				<div className="flex flex-col gap-6 w-full max-w-[600px] text-text">
					<p className="tag">Who we are</p>
					<span className="heading">
						We provide best <br /> digital services
					</span>
					<p>
						Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
						voluptas sit aspernatur aut odit aut fugit, sed quia.
					</p>

					<button className="secondarybtn max-w-[160px] text-white">
						Dicover Now
					</button>
				</div>
				{/* Image */}
				<div className="w-full max-w-[600px]">
					<img src="/about2.png" alt="about image" />
				</div>
			</div>

			{/* brands */}
			<div className="container flex justify-center gap-8 py-32">
				{brands.map((item, index) => (
					<div className="relative group" key={index}>
						<img src={item} alt="logo" className="w-[180px]" />
						<div className="bg-bgLight/70 top-0 left-0 w-full h-full absolute group-hover:bg-transparent transition duration-300 ease-in-out" />
					</div>
				))}
			</div>
		</div>
	);
};

export default Testimonials;
