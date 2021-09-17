import React from "react";

const formContainerStyle = `
	bottom-10 rounded-lg w-full max-w-sm mx-auto px-2 relative
`;

const formStyle = `
	bg-white border-l-4 border-purple-900 shadow-md relative rounded-md 
	mb-4 px-4 py-12
`;

const inputStyle = `
	appearance-none border-2 border-gray-200 rounded-sm w-full p-4 
	placeholder-gray-600 text-gray-700 leading-tight text-xl
	focus:border-gray-400 focus:outline-none focus:shadow-outline shadow 
`;

const selectStyle = `
	appearance-none bg-white border border-gray-200 
	hover:border-gray-400 hover:shadow-outline
	focus:border-gray-400 focus:outline-none focus:shadow-outline 
	rounded shadow leading-tight p-4 w-full text-xl text-gray-700
`;

const selectIconStyle = `
	pointer-events-none absolute inset-y-0 right-0 
	flex items-center px-2 mx-1 text-gray-600
`;

const selectOptionStyle = `
	focus:bg-gray-100 focus:text-gray-700 
	hover:text-gray-700 hover:bg-gray-100 
	text-gray-600 text-lg tracking-wide my-2 p-2
`;

const buttonStyle = `
	bg-purple-900 cursor-pointer py-3 rounded-md
	text-2xl text-gray-100 text-center w-full mb-2
`;

const ChatForm = () => (
	<section className={formContainerStyle}>
		<form className={formStyle}>
			<div className="mb-6">
				<input className={inputStyle} placeholder="Name" />
			</div>
			<div className="mb-6">
				<input className={inputStyle} placeholder="Phone" />
				<p className="text-red-500 text-sm italic my-2">
					Please choose a password
				</p>
			</div>
			<div className="mb-6">
				<input className={inputStyle} placeholder="Email" />
			</div>
			<div className="mb-6 relative bg-green-400">
				<div className="relative">
					<div className={selectStyle}>Department</div>
					<div className={selectIconStyle}>
						<i className="fas fa-chevron-down" />
					</div>
				</div>
				<div className="absolute top-12 w-full bg-white m-1 mt-3 shadow-lg">
					<p className={selectOptionStyle}>Agent Support (Online)</p>
					<p className={selectOptionStyle}>User Support (Online)</p>
				</div>
			</div>
			<div className="mb-6">
				<textarea className={inputStyle} placeholder="Question" />
			</div>
			<div className="mb-1 rounded-md">
				<button className={buttonStyle}>
					<i className="fas fa-paper-plane mr-2" />
					<span>Start Chat</span>
				</button>
			</div>
		</form>
	</section>
);

export default ChatForm;
