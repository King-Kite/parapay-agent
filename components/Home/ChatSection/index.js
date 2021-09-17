import React, { useState } from "react";
import Portal from "./Portal";
import useOutsideClick from "../../../hooks/useOutsideClick";

const chatContainerStyle = `
	bg-gray-800 h-2/3 my-auto mx-auto bottom-50 w-full
`

const iconContainerStyle = `
	cursor-pointer duration-300 flex justify-center items-center
	hover:bg-gray-500 hover:text-gray-200 m-1 px-3 py-2 relative rounded-full
	text-center transition-all transform z-50
`;


const ChatSection = () => {
	const { ref, visible, setVisible } = useOutsideClick(false);

	console.log(visible)

	return (
		<Portal>
			{/*<section
				ref={ref}
				className={`${!visible && "hidden"} ${chatContainerStyle}`}
			>
				Welcome to ParaPay, if you need help simply reply to this message, we are online and ready to help.
			</section>

			<section
					onClick={() => {
						console.log("GOT CALLED AGAIN")
						setVisible(!visible)}
					}
				className="fixed right-5 bottom-10 rounded-full my-2"
			>
				<section
					className={`${iconContainerStyle} ${
						visible ? "bg-gray-500 text-gray-200" : "bg-gray-200 text-gray-500"
					}`}
				>
					<span className="rounded-full text-4xl">
						<i className="fas fa-comment" />
					</span>
				</section>
			</section>*/}
		</Portal>
	);
};

export default ChatSection;
