import React from "react";

const Hero = () => {
	return (
		<div
			className="w-full bg-top bg-cover bg-no-repeat h-screen flex flex-col justify-center items-center gap-8 text-white text-center"
			style={{
				backgroundImage: `url("/hero.webp")`,
			}}
		>
			<span className="text-6xl">
				Turning Creative ideas <br /> into Success
			</span>
			<p className="w-full max-w-[600px]">
				Consectetur adipiscing elit, sed do eiusmod tempor incididunt
				dolore magna aliqua quis nostrud exerc.
			</p>
			<button className="secondarybtn">Discover Now</button>
		</div>
	);
};

export default Hero;
