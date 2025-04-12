import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
const Navbar = () => {
	const navLinks = ["Home", "Pages", "Portfolio", "Blog", "Contacts"];
	const [toggle, setToggle] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > window.innerHeight) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<div
			className={`w-full fixed  top-0 padding   flex items-center justify-center text-white z-[200] transition duration-500 ease-in-out ${
				isScrolled ? "shadow-lg bg-accent py-3" : "bg-transparent pt-8"
			}`}
		>
			<div className="flex items-center justify-between w-full ">
				<div className="flex gap-12 items-end">
					<img src="/logo.webp" alt="logo" />
					<div className="flex items-center md:hidden">
						{navLinks.map((item, index) => (
							<p key={index} className="px-5 group w-fit ">
								{item}
								<div className="w-0 h-[2px] bg-white rounded-full transition-all duration-500  ease-in-out group-hover:w-full" />
							</p>
						))}
					</div>
					<FiSearch size={32} className="md:hidden" />
				</div>

				<div className="md:hidden">
					<div className="flex gap-3 items-center">
						<div className="bg-accent p-2 rounded-full">
							<LuPhoneCall size={18} className="" />
						</div>
						<p className="text-white text-lg font-semibold">
							+1 840 841 25 69
						</p>
						<button
							className={`ml-5 px-8 py-3 rounded-xl font-bold flex items-center justify-center  hover:bg-hover transition duration-500 ease-in-out cursor-pointer  text-sm  ${
								isScrolled
									? "bg-white text-accent"
									: "bg-accent"
							}`}
						>
							Let's Talk
						</button>
					</div>
				</div>

				{/* Mobile menu */}
				<div className="xl:hidden">
					<HiOutlineMenuAlt3 size={40} />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
