import React from "react";
import ChatForm from "./ChatForm";
import ChatLayout from "./ChatLayout";

const sectionStyle = `
	container mx-auto
`

const sectionBrandStyle = `
	leading-normal text-center text-2xl text-gray-100
`

const sectionBrandContainerStyle = `
	bg-purple-900 p-3 pt-8 pb-16
`

const formErrorContainerStyle = `
	container fixed bottom-12 mx-auto
`

const formErrorStyle = `
	bg-white border-l-4 border-red-700 font-semibold flex items-center 
	shadow-md rounded-b-md text-xl text-red-700 w-full py-6 px-4 z-20
`

const ChatContainer = ({ setVisible }) => (
	<ChatLayout handleClick={() => setVisible(false)}>
		<section className={sectionStyle}>
			<div className={sectionBrandContainerStyle}>
				<h3 className={sectionBrandStyle}>
					Please fill out the form below to start chatting with the next available agent.
				</h3>
			</div>

			<ChatForm />
		</section>

		<section className={formErrorContainerStyle} style={{ padding: "0 15.5px" }}>
			<div className={"flex " + formErrorStyle}>
			<i className="fas fa-exclamation-triangle text-lg mx-2" />
			<p className="mx-4">Reconnecting</p>
			</div>
		</section>
	</ChatLayout>
)

export default ChatContainer;