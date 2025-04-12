import React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";

const Blog = () => {
	const slides = [
		{
			title: "fresh startup ideas for your digital business",
			image: "/article1.jpg",
			comments: "2",
		},
		{
			title: "top 5 targeting techniques to attract customers",
			image: "/article2.jpg",
			comments: "8",
		},
		{
			title: "why do project managers need to focus on strategy",
			image: "/article3.jpg",
			comments: "1",
		},
		{
			title: "what trending on designers charts this spring",
			image: "/article4.jpg",
			comments: "24",
		},
	];
	return (
		<div className="w-full padding pb-32">
			<div className="container  flex flex-col items-center gap-4">
				<p className="tag">our blog</p>
				<span className="heading">Our Latest Articles</span>

				{/* Carousel Section */}
				<div className=" w-full flex justify-center ">
					<Carousel
						plugins={[
							Autoplay({
								delay: 3000,
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
											<CardContent className="flex flex-col gap-8">
												<div
													className="flex w-full
													h-[300px] bg-center bg-cover
													bg-no-repeat rounded-2xl"
													style={{
														backgroundImage: `url(${item.image})`,
													}}
												/>
												<div className="flex flex-col gap-1">
													<p className="tag">
														media seo
													</p>
													<span className="heading2 capitalize">
														{item.title}
													</span>
													<p className="text-text text-sm">
														Apr 12, 2025 |{" "}
														{item.comments}
														Comments
													</p>
												</div>
											</CardContent>
										</Card>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default Blog;
