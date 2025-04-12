import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<div
			className="w-full bg-top bg-cover bg-no-repeat h-screen flex flex-col justify-center items-center gap-8 text-white text-center"
			style={{
				backgroundImage: `url("/hero.webp")`,
			}}
		>
			<motion.span
				className="text-6xl"
				initial="hidden"
				whileInView="visible"
				transition={{
					duration: 1,
					ease: "easeInOut",
				}}
				variants={{
					visible: { opacity: 1, y: 0 },
					hidden: { opacity: 0, y: 30 },
				}}
			>
				Turning Creative ideas <br /> into Success
			</motion.span>
			<motion.p
				className="w-full max-w-[600px]"
				initial="hidden"
				whileInView="visible"
				transition={{
					duration: 1,
					ease: "easeInOut",
				}}
				variants={{
					visible: { opacity: 1, y: 0 },
					hidden: { opacity: 0, y: 40 },
				}}
			>
				Consectetur adipiscing elit, sed do eiusmod tempor incididunt
				dolore magna aliqua quis nostrud exerc.
			</motion.p>
			<motion.button
				className="secondarybtn"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{
					duration: 1,

					ease: "easeIn",
				}}
				variants={{
					visible: { opacity: 1, y: 0 },
					hidden: { opacity: 0, y: 20 },
				}}
			>
				Discover Now
			</motion.button>
		</div>
	);
};

export default Hero;
