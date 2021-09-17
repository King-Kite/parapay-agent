import React from "react";

const iconContainerStyle = `
	cursor-pointer duration-300 flex justify-center items-center
	hover:bg-purple-200 hover:text-purple-900 m-1 px-3 py-2 relative rounded-full
	text-center transition-all transform z-50
`;

const ChatIcon = ({ visible }) => (
	<section
		className={`${iconContainerStyle} ${
			visible
				? "bg-purple-200 text-purple-900"
				: "bg-purple-900 text-purple-200"
		}`}
	>
		<span className="rounded-full text-3xl">
			<i className="fas fa-comment" />
		</span>
	</section>
)

export default ChatIcon;