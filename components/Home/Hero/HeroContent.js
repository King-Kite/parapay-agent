import React from "react";
import Image from "next/image";

const brandStyle =
	"font-normal text-purple-900 text-4xl lg:text-5xl m-5 px-1 mb-3 lg:mt-0 md:mx-3 leading-tight";
const contentStyle =
	"text-gray-600 text-lg lg:text-xl text-left mx-6 my-3 w-3/4 md:ml-16 lg:ml-4 lg:pr-16 md:w-full";
const downloadStyle = 
	"bg-purple-900 border border-purple-900 flex hover:bg-gray-200 hover:text-purple-900 text-left text-gray-100 outline-none px-8 py-2 rounded-full m-6 md:mx-0";

const HeroContent = () => (
	<>
		<h1 className={brandStyle}>
			Welcome to Agent <span className="text-yellow-500">Banking</span>
		</h1>
		<p className={contentStyle}>
			Become a mobile bank as a ParaPay Agent by providing regular banking
			services to the people in your immediate community. Earn good money in the
			process.
		</p>
		<div className="md:flex md:w-full md:px-5 lg:px-4">
			<a href="#" className={downloadStyle}>
				<div>
					<img
						src="/assets/images/flat-ui_google.svg"
						alt="playstore"
						style={{ width: "40", height: "40"}}
					/>
				</div>
				<div className="flex flex-col ml-3">
					<span>Download on</span>
					<span className="font-semibold">PLAYSTORE</span>
				</div>
			</a>
		</div>
	</>
);

export default HeroContent;
