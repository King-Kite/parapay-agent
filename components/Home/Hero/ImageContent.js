import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import useFadeInOnView from "../../../hooks/useFadeInOnView";

const adStyle = `
	hidden lg:block absolute duration-1000 transition-all transform
`;

const ImageContent = () => {
	const [mounted, setMounted] = useState(false);

	const payment = useFadeInOnView();
	const message = useFadeInOnView();
	const bill = useFadeInOnView();
	const receipt = useFadeInOnView();

	useEffect(() => {
		setTimeout(() => setMounted(true), 3000);
		return () => setMounted(false);
	}, [])

	return (
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

			<div
				ref={payment.ref}
				className={`top-0 left-0 z-20 ${adStyle} ${
					payment.visible && mounted ? "opacity-100" : "opacity-0"
				}`}
			>
				<Image
					height={100}
					width={300}
					src="/assets/images/successful-payment.png"
					alt="successful-payment"
				/>
			</div>
			<div
				ref={message.ref}
				className={`top-8 right-20 z-20 ${adStyle} ${
					message.visible && mounted ? "opacity-100" : "opacity-0"
				}`}
			>
				<Image
					height={78}
					width={84}
					src="/assets/images/message.png"
					alt="message"
				/>
			</div>
			<div
				ref={bill.ref}
				className={`bottom-28 left-0 z-20 ${adStyle} ${
					bill.visible && mounted ? "opacity-100" : "opacity-0"
				}`}
			>
				<Image
					height={100}
					width={300}
					src="/assets/images/successful-bill.png"
					alt="successful-bill"
				/>
			</div>
			<div
				ref={receipt.ref}
				className={`bottom-60 right-4 z-20 ${adStyle} ${
					receipt.visible && mounted ? "opacity-100" : "opacity-0"
				}`}
			>
				<Image
					height={137}
					width={220}
					src="/assets/images/print-receipt.png"
					alt="print-receipt"
				/>
			</div>
		</Fragment>
	);
};

export default ImageContent;
