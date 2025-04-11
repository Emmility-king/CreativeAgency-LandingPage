import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { NumberTicker } from "@/components/magicui/number-ticker";

const About = () => {
	const slides = [
		"/carousel1.webp",
		"/carousel2.webp",
		"/carousel3.png",
		"/carousel4.png",
		"/carousel2.webp",
		"/carousel1.webp",
	];
	return (
		<div className="w-full py-32">
			{/* section 1 */}
			<div className="w-full flex justify-center gap-32 items-center cointainer">
				{/* Image */}
				<div className="w-full max-w-[600px]">
					<img src="/about.png" alt="about image" />
				</div>
				{/* Text */}
				<div className="flex flex-col gap-6 w-full max-w-[600px] text-text">
					<p className="tag">creative agency</p>
					<span className="heading">
						We help your <br />
						business grow
					</span>
					<p>
						Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
						voluptas sit aspernatur aut odit aut fugit, sed quia.
					</p>

					{/* Items Div */}
					<div className="flex flex-col gap-5">
						{/* Item 1 */}
						<div className="flex items-start gap-3 ">
							<div className=" py-3 flex items-start justify-center ">
								<img
									src="/icon1.svg"
									alt="icon"
									className="w-[45px]"
								/>
							</div>
							<div>
								<span className="heading2">
									Creative design
								</span>
								<p>
									Natus error sit voluptatem accus antium
									doloremque.
								</p>
							</div>
						</div>
						{/* Item 2 */}
						<div className="flex items-start gap-3 ">
							<div className="py-3 flex items-start justify-center ">
								<img
									src="/icon2.svg"
									alt="icon"
									className="w-[45px]"
								/>
							</div>
							<div>
								<span className="heading2">
									Endless Possibilities
								</span>
								<p>
									Natus error sit voluptatem accus antium
									doloremque.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* section 2 */}
			<div className="w-full bgGradient flex justify-center py-32">
				<div className="w-full grid grid-cols-4 gap-8  container">
					<div className="relative flex items-center justify-center ">
						<NumberTicker
							value={98}
							className="whitespace-pre-wrap text-[200px] font-bold tracking-tighter text-white"
						/>
						<span className="absolute text-2xl">Projects</span>
					</div>
					<div className="relative flex items-center justify-center ">
						<NumberTicker
							value={65}
							className="whitespace-pre-wrap text-[200px] font-bold tracking-tighter text-white"
						/>
						<span className="absolute text-2xl">People</span>
					</div>
					<div className="relative flex items-center justify-center ">
						<NumberTicker
							value={10}
							className="whitespace-pre-wrap text-[200px] font-bold tracking-tighter text-white"
						/>
						<span className="absolute text-2xl">Years</span>
					</div>
					<div className="relative flex items-center justify-center ">
						<NumberTicker
							value={15}
							className="whitespace-pre-wrap text-[200px] font-bold tracking-tighter text-white"
						/>
						<span className="absolute text-2xl">Offices</span>
					</div>
				</div>
			</div>

			{/* section 3*/}
			<div>
				<div className="w-full flex justify-center gap-32 items-start py-32 cointainer">
					<div className="flex flex-col gap-6 w-full max-w-[600px]">
						<p className="tag">creative solutions</p>
						<span className="heading">
							We make unique &<br /> memorable brands
						</span>
					</div>
					{/* Text */}
					<div className="flex flex-col gap-6 w-full max-w-[600px] text-text">
						<p>
							At vero eos et accusamus et iusto odio dignissimos
							ducimus qui blanditiis praesentium voluptatum
							deleniti atque lorem in voluptate velit iusto odio
							dignissimos duci esse.
						</p>
						<p>
							Sed ut perspiciatis unde omnis iste natus error sit
							voluptatem accusantium doloremque laudantium, totam
							rem aperiam, eaque ipsa quae.
						</p>
						{/* CTA */}

						<div className=" group text-primary w-fit font-bold">
							Read More
							<div className="w-full h-[2px] bg-primary rounded-full transition-all duration-500 group-hover:w-0" />
						</div>
					</div>
				</div>
			</div>

			{/* Carousel Section */}
			<div className=" w-full flex justify-center ">
				<Carousel
					plugins={[
						Autoplay({
							delay: 2000,
						}),
					]}
					className="w-full container cursor-grab active:cursor-grabbing"
				>
					<CarouselContent>
						{slides.map((item, index) => (
							<CarouselItem
								key={index}
								className="md:basis-1/2 lg:basis-1/3"
							>
								<div className="p-1">
									<Card>
										<CardContent
											className="flex w-full h-[400px] bg-center bg-cover "
											style={{
												backgroundImage: `url(${item})`,
											}}
										></CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</div>
	);
};

export default About;
