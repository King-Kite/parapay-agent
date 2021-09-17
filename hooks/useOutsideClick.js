import React, { useCallback, useEffect, useRef, useState } from "react";

const useOutsideClick = (initValue) => {
	const [visible, setVisible] = useState(initValue || false);
	const ref = useRef(null);
	const eventType = "click";

	const handleMouseClick = useCallback(({ target }) => {
		!ref?.current?.contains(target) && setVisible(false);
	}, []);

	const handleKeyPress = useCallback((event) => {
		event.key === "Escape" && setVisible(false);
	}, []);

	useEffect(() => {
		document.addEventListener(eventType, handleMouseClick, true);
		document.addEventListener(eventType, handleKeyPress, true);

		return () => {
			document.removeEventListener(eventType, handleMouseClick, true);
			document.removeEventListener(eventType, handleKeyPress, true);
		};
	}, []);

	return {
		handleMouseClick,
		ref,
		setVisible,
		visible,
	};
};

export default useOutsideClick;
