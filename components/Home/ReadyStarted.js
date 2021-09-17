import React from "react";

const brandStyle =
	"font-bold text-blue-900 text-center text-4xl lg:text-5xl my-5 mb-3";
const containerStyle =
	"bg-gray-100 flex flex-col justify-around items-center py-12 relative z-20";
const contentStyle = "text-gray-500 text-base text-center my-3";
const downloadStyle =
	"bg-blue-900 border border-blue-900 hover:bg-gray-200 hover:text-blue-900 text-center text-gray-100 outline-none px-8 py-3 rounded-full my-6";

const ReadyStarted = () => (
	<section className={containerStyle}>
		<h1 className={brandStyle}>Ready to get started?</h1>
		<p className={contentStyle}>Sign up in minutes to get started.</p>
		<a className={downloadStyle} href="#">
			Get Started
		</a>
	</section>
);

export default ReadyStarted;
