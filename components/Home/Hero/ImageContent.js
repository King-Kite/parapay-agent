import React, { Fragment } from "react";
import Image from "next/image";

const ImageContent = () => (
	<Fragment>
		<div className="relative z-10 w-full h-full">
			<Image
				height={700}
				width={500}
				src="/assets/images/showcase-img-man.png"
				alt="showcase-man"
			/>
		</div>
		<div className="absolute z-0 w-full h-full">
			<Image
				height={2000}
				width={1500}
				src="/assets/images/showcase-img-abstract.png"
				alt="showcase-abstract"
			/>
		</div>

		<div className="hidden lg:block absolute top-0 left-0 z-20">
			<Image
				height={100}
				width={300}
				src="/assets/images/successful-payment.png"
				alt="successful-payment"
			/>
		</div>
		<div className="hidden lg:block absolute top-8 right-20 z-20">
			<Image 
				height={78}
				width={84}
				src="/assets/images/message.png" 
				alt="message" 
			/>
		</div>
		<div className="hidden lg:block absolute bottom-28 left-0 z-20">
			<Image 
				height={100}
				width={300}
				src="/assets/images/successful-bill.png" 
				alt="successful-bill" 
			/>
		</div>
		<div className="hidden lg:block absolute bottom-60 right-4 z-20">
			<Image 
				height={137}
				width={220}
				src="/assets/images/print-receipt.png" 
				alt="print-receipt" 
			/>
		</div>
	</Fragment>
)

export default ImageContent;