import React from "react";
import useFadeInOnView from "../../hooks/useFadeInOnView";

const FadeInSection = ({ children }) => {
	const { ref, visible } = useFadeInOnView();
	const style = "duration-500 transform transition-all";

	return (
		<div
			ref={ref}
			className={`${style} ${
				visible
					? "translate-y-0 opacity-100"
					: "translate-y-32 opacity-0"
			}`}
		>
			{children}
		</div>
	);
};

export default FadeInSection;
