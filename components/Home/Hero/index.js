import React from "react";
import HeroContent from "./HeroContent";
import ImageContent from "./ImageContent";

const contentStyle =
	"w-full md:col-span-1 lg:col-span-2 flex flex-col items-start md:items-center justify-center lg:items-start lg:justify-start px-3 md:px-6 py-12 lg:pt-0";

const Hero = () => (
	<section className="bg-gray-100 md:h-screen w-full lg:mb-36 px-6">
		<div className="grid md:grid-cols-2 lg:grid-cols-4 lg:pt-28 lg:mb-20">
			<div className={contentStyle}>
				<HeroContent />
			</div>
			<div className="hidden md:col-span-1 lg:col-span-2 md:flex relative">
				<ImageContent />
			</div>
		</div>
	</section>
);

export default Hero;
