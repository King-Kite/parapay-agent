import React from "react";
import Image from "next/image";
import FadeInSection from "../common/FadeInSection";

const content = [
	{
		content: "Click on GET STARTED to register and become a paraPay agent.",
		image: "/assets/images/register.png",
		title: "Register",
	},
	{
		content:
			"Submit all KYC documentation, fund your wallet and start transacting.",
		image: "/assets/images/verify.png",
		title: "Verify Details",
	},
	{
		content:
			"Earn commissions by providing financial services to the community.",
		image: "/assets/images/start.png",
		title: "Start Earning",
	},
];

const brandStyle = "font-bold my-5 md:my-8 text-3xl text-white text-center";
const containerStyle = "bg-purple-900 py-6 relative z-20";
const sectionContainerStyle =
	"z-50 container mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3 pb-5";
const sectionStyle = "flex flex-col justify-center items-center";
const sectionBrandStyle = "my-2 text-lg text-yellow-500 text-center";
const sectionContentStyle =
	"mx-20 md:mx-12 px-8 text-center text-sm text-gray-200 tracking-wide";

const HowItWorks = () => (
	<section className={containerStyle}>
		<h2 className={brandStyle}>How it works</h2>
		<div className={sectionContainerStyle}>
			{content?.map(({ content, image, title }) => (
				<FadeInSection key={title}>
					<section className={sectionStyle}>
						<div>
							<Image height={230} width={230} src={image} alt={title} />
						</div>
						<div>
							<h5 className={sectionBrandStyle}>{title}</h5>
							<p className={sectionContentStyle}>{content}</p>
						</div>
					</section>
				</FadeInSection>
			))}
		</div>
	</section>
);

export default HowItWorks;
