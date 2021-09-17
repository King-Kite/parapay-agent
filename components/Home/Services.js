import React from "react";
import Image from "next/image";

const content = [
	{
		content:
			"Offer customers the convenience of withdrawing money from their phone number or bank account.",
		image: "/assets/images/business.svg",
		title: "Withdraw Money",
	},
	{
		content:
			"Deposit money into any phone number in Nigeria. You can also deposit money to any bank account in Nigeria.",
		image: "/assets/images/saving.svg",
		title: "Deposit Money",
	},
	{
		content:
			"Help customers pay their electricity, internet, and cable TV subscriptions conveniently and securely.",
		image: "/assets/images/funds.svg",
		title: "Pay Bills",
	},
	{
		content:
			"Make some money when you virtually top-up a customer’s phone with airtime or data.",
		image: "/assets/images/customer.svg",
		title: "Sell Airtime",
	},
	{
		content:
			"Earn money by providing financial services (withdrawals and deposits), bill payments, airtime or data bundles purchases. You also make money from the transactions of each customer you bring onboard.",
		image: "/assets/images/business.svg",
		title: "Earn Money",
	},
];

const brandStyle =
	"container mx-auto my-5 md:my-8 text-3xl md:text-4xl text-white text-center";
const containerStyle = "bg-purple-900 relative z-20 py-5";
const sectionBrandStyle = "font-semibold my-2 text-xl text-gray-300 text-left";
const sectionContainerStyle =
	"container mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3 pb-5 px-2 md:px-4";
const sectionContentContainerStyle =
	"flex flex-col items-center md:items-start my-1 md:ml-8 lg:mx-auto";
const sectionContentStyle = "text-left text-lg text-gray-400 w-3/4 lg:w-full";
const sectionStyle =
	"bg-purple-800 flex flex-col justify-center md:justify-start items-center md:items-start rounded mx-4 sm:mx-8 md:mx-4 my-2 px-4 py-6";

const Services = () => (
	<section className={containerStyle}>
		<h1 className={brandStyle}>Services you can do as a ParaPay Agent?</h1>
		<div className={sectionContainerStyle}>
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

export default Services;
