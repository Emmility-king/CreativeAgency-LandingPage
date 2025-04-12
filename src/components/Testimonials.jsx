import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { ImQuotesLeft } from "react-icons/im";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const Testimonials = () => {
	const brands = [
		"/odan.webp",
		"/playwright.webp",
		"/orca.webp",
		"/mina.webp",
		"/br.webp",
		"/arquivar.webp",
	];

	const slides = [
		{
			name: "Paul Freeman",
			image: "/customer1.jpg",
			comment:
				"Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.",
			job: "Expert",
		},
		{
			name: "John Dou",
			image: "/customer3.jpg",
			comment:
				"Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.",
			job: "CEO",
		},
		{
			name: "Lindsay Wiliams",
			image: "/customer2.jpg",
			comment:
				"Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.",
			job: "Marketer",
		},
	];
	return (
		<div className="w-full padding  ">
			{/* Testimonials */}
			{/* Carousel Section */}
			<div className=" w-full flex justify-center pb-32">
				<Carousel
					loop={true}
					plugins={[
						Autoplay({
							delay: 3000,
						}),
					]}
					className="w-full container cursor-grab active:cursor-grabbing "
				>
					<CarouselPrevious />
					<CarouselContent className="w-full ">
						{slides.map((item, index) => (
							<CarouselItem key={index} className="w-full ">
								<div className="p-1">
									<Card>
										<CardContent className="flex flex-col gap-8 items-center">
											<div
												className="flex w-[90px]
																h-[90px] bg-center bg-cover
																bg-no-repeat rounded-full"
												style={{
													backgroundImage: `url(${item.image})`,
												}}
											/>

											<span className="text-3xl font-normal w-full max-w-[800px] text-primary">
												{item.comment}
											</span>

											<div className="flex flex-col items-center">
												<ImQuotesLeft className="text-3xl fill-blue mb-2" />
												<span>{item.name}</span>
												<p>{item.job}</p>
											</div>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>

					<CarouselNext />
				</Carousel>
			</div>
			{/* who we are*/}
			<motion.div
				className="w-full flex justify-center gap-32 items-center cointainer"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{
					duration: 1,
					ease: "easeOut",
				}}
				variants={{
					visible: { opacity: 1, y: 0 },
					hidden: { opacity: 0, y: 100 },
				}}
			>
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
			</motion.div>

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
