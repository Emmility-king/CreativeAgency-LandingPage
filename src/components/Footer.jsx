import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
	const date = new Date().getFullYear();
	return (
		<div className="padding pt-16 xl:pt-32 bg-bgDark w-full text-text relative">
			{/* Wave SVG at the top */}
			<svg
				className="absolute -top-[3%] xl:-top-[15%] left-0 w-full"
				viewBox="0 0 1440 190"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					style={{ transform: "translate(0, 0px)", opacity: 1 }}
					fill="#060e18"
					d="M0,76L60,82.3C120,89,240,101,360,101.3C480,101,600,89,720,76C840,63,960,51,1080,63.3C1200,76,1320,114,1440,120.3C1560,127,1680,101,1800,79.2C1920,57,2040,38,2160,47.5C2280,57,2400,95,2520,107.7C2640,120,2760,108,2880,107.7C3000,108,3120,120,3240,120.3C3360,120,3480,108,3600,107.7C3720,108,3840,120,3960,133C4080,146,4200,158,4320,161.5C4440,165,4560,158,4680,152C4800,146,4920,139,5040,120.3C5160,101,5280,70,5400,76C5520,82,5640,127,5760,133C5880,139,6000,108,6120,101.3C6240,95,6360,114,6480,104.5C6600,95,6720,57,6840,38C6960,19,7080,19,7200,31.7C7320,44,7440,70,7560,95C7680,120,7800,146,7920,148.8C8040,152,8160,133,8280,123.5C8400,114,8520,114,8580,114L8640,114L8640,190L8580,190C8520,190,8400,190,8280,190C8160,190,8040,190,7920,190C7800,190,7680,190,7560,190C7440,190,7320,190,7200,190C7080,190,6960,190,6840,190C6720,190,6600,190,6480,190C6360,190,6240,190,6120,190C6000,190,5880,190,5760,190C5640,190,5520,190,5400,190C5280,190,5160,190,5040,190C4920,190,4800,190,4680,190C4560,190,4440,190,4320,190C4200,190,4080,190,3960,190C3840,190,3720,190,3600,190C3480,190,3360,190,3240,190C3120,190,3000,190,2880,190C2760,190,2640,190,2520,190C2400,190,2280,190,2160,190C2040,190,1920,190,1800,190C1680,190,1560,190,1440,190C1320,190,1200,190,1080,190C960,190,840,190,720,190C600,190,480,190,360,190C240,190,120,190,60,190L0,190Z"
				></path>
			</svg>

			{/* Content */}
			<div className="container grid md:grid-cols-2 gap-8 xl:grid-cols-4  ">
				<div className="flex flex-col gap-5">
					<p className="text-white text-xl font-bold">Office</p>
					<p>
						Germany — 785 15h Street, <br />
						Office 478 Berlin, De 81566
					</p>

					<p className=" group w-fit">
						info@email.com
						<div className="w-0 h-[2px] bg-text rounded-full transition-all duration-500 group-hover:w-full" />
					</p>
					<p className="text-white text-lg font-bold">
						+1 840 841 25 69
					</p>
				</div>
				<div className="flex flex-col gap-3">
					<p className="text-white text-xl font-bold">Links</p>
					<p>Home</p>
					<p>Services</p>
					<p>About Us</p>
					<p>Our Team</p>
					<p>Contacts</p>
				</div>
				<div className="flex flex-col gap-5">
					<p className="text-white text-xl font-bold">Socials</p>
					<p>Facebook</p>
					<p>Twitter</p>
					<p>Dribbble</p>
					<p>Instagram</p>
				</div>

				<div className="flex flex-col gap-5">
					<p className="text-white text-xl font-bold">Newsletter</p>
					<div className="flex items-center gap-3">
						<input
							type="text"
							className=" w-[280px] rounded-3xl bg-gray-900 px-4 py-3"
							placeholder="Enter your Email"
						/>{" "}
						<div className="h-12 primarybtn">
							<FaArrowRightLong className="text-xl fill-white" />
						</div>
					</div>
					<div className="flex items-center gap-1">
						<input type="checkbox" name="" id="" />{" "}
						<p>
							I agree to the <u>Privacy Policy</u>
						</p>
					</div>
				</div>
			</div>
			<div className="container py-8 border-t border-gray-600 mt-8">
				<p className="text-sm">
					AxiomThemes © {date}. All Rights Reserved.{" "}
				</p>{" "}
			</div>
		</div>
	);
};

export default Footer;
