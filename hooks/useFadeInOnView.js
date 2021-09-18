import React, { useEffect, useRef, useState } from "react";

const useFadeInOnView = (persist) => {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (persist) {
					entry.isIntersecting && setVisible(true);
				} else {
					setVisible(entry.isIntersecting);
				}
			});
		});

		ref?.current && observer.observe(ref.current);

		return () => {
			ref?.current && observer.unobserve(ref.current);
		};
	}, []);

	return {
		ref,
		visible,
	};
};

export default useFadeInOnView;
