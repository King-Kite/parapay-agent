import React from "react";
import Image from "next/image";

const content = [
	{
		title: "Easy Registration",
		image: "/assets/images/TV-phone.svg",
		content:
			'Becoming a ParaPay Agent is easy. Just click on "Get Started" and register using your correct credentials. You will be contacted by an assigned ParaPay officer in 24hrs.',
	},
	{
		title: "Better Commission",
		image: "/assets/images/pen.svg",
		content:
			"ParaPay has deployed structures and strategies that allow for cheap and very affordable banking services. With ParaPay, agents can genuinely build wealth.",
	},
	{
		title: "Quick Support",
		image: "/assets/images/clock.svg",
		content:
			"We take your enterprise very seriously. As a result, we pay very close attention to supporting our agents. You can reach us through our in-app live chat or send us an email.",
	},
];

const brandStyle = "font-bold my-5 md:my-8 text-3xl md:text-4xl text-blue-900 text-center";
const contentContainerStyle =
	"container mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3 pb-5 px-2 md:px-4";
const sectionBrandStyle = "font-semibold my-2 text-lg text-gray-700 text-left";
const sectionStyle =
	"bg-gray-100 flex flex-col justify-center items-center md:items-start rounded-lg mx-4 sm:mx-8 md:mx-4 my-2 p-4";
const sectionContentContainerStyle =
	"flex flex-col items-center md:items-start my-1 md:ml-8";
const sectionContentStyle = "text-left text-base text-gray-500 w-3/4";

const ParaAgent = () => (
	<section className="bg-white py-5">
		<h1 className={brandStyle}>Why Become A ParaPay Agent?</h1>
		<div className={contentContainerStyle}>
			{content?.map(({ content, image, title }) => (
				<section key={title} className={sectionStyle}>
					<div className="mt-1 mb-4 md:ml-8">
						<Image height={50} width={50} src={image} alt={title} />
					</div>
					<div className={sectionContentContainerStyle}>
						<h5 className={sectionBrandStyle}>{title}</h5>
						<p className={sectionContentStyle}>{content}</p>
					</div>
				</section>
			))}
		</div>
	</section>
);

export default ParaAgent;
