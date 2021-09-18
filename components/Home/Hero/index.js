import React from "react";
import HeroContent from "./HeroContent";
import ImageContent from "./ImageContent";
import useFadeInOnView from "../../../hooks/useFadeInOnView";

const contentStyle =	`
	w-full md:col-span-1 lg:col-span-2 flex flex-col 
	items-start md:items-center justify-center lg:items-start lg:justify-start 
	md:px-6 py-12 lg:pt-0
`;

const Hero = () => {
	const image = useFadeInOnView();

	return (
		<section className="bg-gray-100 md:h-screen w-full lg:mb-36 px-3 md:px-6">
			<div className="grid md:grid-cols-2 lg:grid-cols-4 lg:pt-28 lg:mb-20">
				<div className={contentStyle}>
					<HeroContent />
				</div>
				<div 
					ref={image.ref} 
					className={`
						duration-500 hidden md:col-span-1 lg:col-span-2 md:flex relative transform transition-all
						${image.visible ? "translate-x-0" : "translate-x-64"}
					`}
				>
					<ImageContent />
				</div>
			</div>
		</section>
	);
}

export default Hero;
