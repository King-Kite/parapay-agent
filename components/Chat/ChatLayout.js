import React from "react";

const containerStyle = `
	bg-gray-200 border border-gray-100 bottom-0 fixed
	h-screen top-0 w-full
`;

const footerStyle = `
	bg-gray-300 fixed flex justify-center items-center h-12 w-full 
	relative bottom-0 font-semibold
	text-center text-lg text-gray-800
`;

const headerStyle = `
	border-0 bg-purple-900 fixed flex font-thin justify-end items-center
	h-20 w-full relative top-0 text-gray-100 text-3xl px-7
`;

const mainStyle = `
	h-5/6 border-0 w-full mb-1 overflow-y-auto
`;

const ChatLayout = ({ children, handleClick }) => (
	<section className={containerStyle}>
		<header className={headerStyle}>
			<div className="border-0" onClick={handleClick}>
				<i className="fas fa-times" />{" "}
			</div>
		</header>

		<main className={mainStyle}>{children}</main>

		<footer className={footerStyle}>
			<p>
				Chat <i className="fas fa-bolt mr-2 text-yellow-500" />
				by <span className="font-extrabold">tawk.to</span>
			</p>
		</footer>
	</section>
);

export default ChatLayout;
