import React from "react";

const containerStyle = `
	bg-gray-200 border border-gray-100 bottom-0 fixed
	h-screen top-0 w-full
`;

const footerStyle = `
	bg-gray-300 fixed flex justify-center items-center h-12 w-full 
	relative bottom-0 font-semibold
	text-center text-lg text-gray-800
`

const headerStyle = `
	border-0 bg-purple-900 fixed flex font-thin justify-end items-center
	h-20 w-full relative top-0 text-gray-100 text-3xl px-7
`

const mainStyle = `
	h-5/6 border-0 w-full overflow-y-scroll mb-1
`

const sectionStyle = `
	container mx-auto
`

const sectionBrandStyle = `
	leading-normal text-center text-2xl text-gray-100
`

const sectionBrandContainerStyle = `
	bg-purple-900 p-3 pt-8 pb-16
`

const formContainerStyle = `
	relative bottom-10 rounded-md w-full max-w-sm mx-auto px-2
`

const formStyle = `
	bg-white border-l-4 border-purple-900 shadow-md rounded-md 
	mb-4 px-4 pt-6 pb-8
`

const inputStyle = `
	appearance-none border-2 border-gray-300 rounded-sm w-full px-4 py-5 
	placeholder-gray-600 text-gray-700 leading-tight text-xl
	focus:border-gray-400 focus:outline-none focus:shadow-outline shadow 
`

const buttonStyle = `
	bg-purple-900 cursor-pointer py-3 rounded-md
	text-2xl text-gray-100 text-center w-full
`

const ChatContainer = ({ setVisible }) => (
	<section className={containerStyle}>
		<header className={headerStyle}>
			<div className="border-0" onClick={() => setVisible(false)}><i className="fas fa-times" /> </div>
		</header>
		<main className={mainStyle}>
			<section className={sectionStyle}>
				<div className={sectionBrandContainerStyle}>
					<h3 className={sectionBrandStyle}>
						Please fill out the form below to start chatting with the next available agent.
					</h3>
				</div>

				<section className={formContainerStyle}>
					<form className={formStyle}>
						<div className="mb-6">
							<input className={inputStyle} placeholder="Name" />
						</div>
						<div className="mb-6">
							<input className={inputStyle} placeholder="Phone" />
							{/*<p className="text-red-500 text-xs italic my-1">Please choose a password</p>*/}
						</div>
						<div className="mb-6">
							<input className={inputStyle} placeholder="Email" />
						</div>
						<div className="mb-6">
							<textarea className={inputStyle} placeholder="Question" />
						</div>
						<div className="mb-1 rounded-md">
							<button className={buttonStyle}>
								<i className="" />
								<span>Start Chat</span>
							</button>
						</div>
					</form>
				</section>
			</section>
		</main>
		<footer className={footerStyle}>
			<p>Chat by <span className="font-extrabold">tawk.to</span></p>
		</footer>
	</section>
)

export default ChatContainer;