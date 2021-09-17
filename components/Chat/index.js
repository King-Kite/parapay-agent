import React, { useCallback, useEffect, useRef, useState } from "react";

const chatContainerStyle = `
	bg-gray-800 h-2/3 my-auto mx-auto bottom-0 w-full top-0 fixed
`;

const iconContainerStyle = `
	cursor-pointer duration-300 flex justify-center items-center
	hover:bg-purple-200 hover:text-purple-500 m-1 px-3 py-2 relative rounded-full
	text-center transition-all transform z-50
`;

const ChatIcon = ({ visible }) => (
	<section
		className={`${iconContainerStyle} ${
			visible
				? "bg-purple-200 text-purple-500"
				: "bg-purple-500 text-purple-200"
		}`}
	>
		<span className="rounded-full text-4xl">
			<i className="fas fa-comment" />
		</span>
	</section>
);

const ChatContainer = ({ setVisible }) => {
	const ref = useRef(null);

	const handleMouseClick = useCallback(({ target }) => {
		if (!ref?.current?.contains(target)) setVisible(false);
	}, []);

	useEffect(() => {
		document.addEventListener("click", handleMouseClick);

		return () => {
			document.removeEventListener("click", handleMouseClick);
		};
	}, []);

	return (
		<section className={chatContainerStyle} ref={ref}>
			Welcome to ParaPay, if you need help simply reply to this message, we are
			online and ready to help.
		</section>
	);
};

const Chat = () => {
	const [visible, setVisible] = useState(false);

	return (
		<div className="relative z-50">
			{visible && <ChatContainer setVisible={setVisible} />}

			<div
				onClick={() => {
					setVisible(!visible);
				}}
				className="fixed right-10 bottom-10 rounded-full my-2"
			>
				<ChatIcon visible={visible} />
			</div>
		</div>
	);
};

export default Chat;
