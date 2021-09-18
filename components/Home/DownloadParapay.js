import React from "react";
import Image from "next/image";
import useFadeInOnView from "../../hooks/useFadeInOnView";

const containerStyle = "bg-white flex lg:h-screen lg:w-screen relative";
const bgImageStyle =
	"absolute hidden h-screen w-5/6 lg:block left-0 bottom-24 z-0 duration-1000 transform transition-all";
const contentStyle =
	"w-full lg:w-1/2 flex flex-col justify-around items-start md:items-center lg:justify-center lg:items-start px-6 py-12 z-20";
const contentBrandStyle = "font-bold text-blue-900 text-4xl m-5 px-1 mb-3";
const contentDownloadStyle =
	"bg-blue-900 border border-blue-900 flex hover:bg-gray-200 hover:text-blue-900 text-left text-gray-100 outline-none px-8 py-3 rounded-full m-6";
const contentTextStyle = "text-gray-700 text-base text-left mx-6 my-3";

const DownloadParapay = () => {
	const image = useFadeInOnView();

	return (
		<section className={containerStyle}>
			<div
				ref={image.ref}
				className={`
					${bgImageStyle} ${
					image.visible
						? "translate-x-0 opacity-100"
						: "-translate-x-64 opacity-0"
				}
				`}
			>
				<Image
					height={1400}
					width={1200}
					src="/assets/images/threephone.png"
					alt="threephone"
				/>
			</div>
			<div className="w-1/2 hidden lg:block" />
			<div className={contentStyle}>
				<h1 className={contentBrandStyle}>
					Download Para<span className="text-yellow-500">Pay</span> Agent App
				</h1>
				<p className={contentTextStyle}>
					Get started immediately! Download the ParaPay Agent App today and
					start earning money.
				</p>
				<a href="#" className={contentDownloadStyle} href="#">
					<div>
						<Image
							height={40}
							width={40}
							src="/assets/images/flat-ui_google.svg"
							alt="playstore"
						/>
					</div>
					<div className="flex flex-col ml-3">
						<span>Download on</span>
						<span className="font-semibold">PLAYSTORE</span>
					</div>
				</a>
			</div>
		</section>
	);
};

export default DownloadParapay;
