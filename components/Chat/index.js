import React from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import ChatContainer from "./ChatContainer";
import ChatIcon from "./ChatIcon";

const Chat = () => {
	const { ref, visible, setVisible } = useOutsideClick(false);

	return (
		<div className="relative z-50">
			{visible && (
				<div ref={ref}>
					<ChatContainer setVisible={setVisible} />
				</div>
			)}

			{!visible && (
				<div
					onClick={() => setVisible(true)}
					className="fixed right-10 bottom-10 rounded-full my-2"
				>
					<ChatIcon visible={visible} />
				</div>
			)}
		</div>
	);
};

export default Chat;
