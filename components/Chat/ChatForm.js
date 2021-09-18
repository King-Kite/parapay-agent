import React from "react";
import Input from "../common/Input";
import Select from "../common/Select";

const formContainerStyle = `
	bottom-10 rounded-lg w-full max-w-sm mx-auto px-2 relative
`;

const formStyle = `
	bg-white border-l-4 border-purple-900 shadow-md relative rounded-md 
	mb-4 px-4 py-12
`;

const loadingStyle = `
	animate-spin duration-500 w-12 h-12 
	border-4 border-t-0 border-b-0 border-dashed border-green-500 
	bg-gray-100 rounded-full
`

const buttonStyle = `
	bg-purple-900 cursor-pointer py-3 rounded-md
	hover:text-purple-900 hover:bg-purple-300
	text-2xl text-gray-100 text-center w-full mb-2
`;

const options = [
	{ id: 1, title: "Agent Support (Online)" },
	{ id: 2, title: "User Support (Online)" },
];

const ChatForm = ({
	errors,
	form: { department, email, name, phone, question },
	loading,
	handleChange,
	handleSelect,
	handleSubmit,
}) => (
	<section className={formContainerStyle}>
		<form onSubmit={handleSubmit} className={formStyle}>
			<div className="mb-6">
				<Input
					error={errors?.name}
					name="name"
					onChange={handleChange}
					placeholder="Name"
					type="text"
					value={name || ""}
				/>
			</div>
			<div className="mb-6">
				<Input
					error={errors?.password}
					name="phone"
					onChange={handleChange}
					placeholder="Phone"
					type="text"
					value={phone || ""}
				/>
			</div>
			<div className="mb-6">
				<Input
					error={errors?.email}
					name="email"
					onChange={handleChange}
					placeholder="Email"
					type="email"
					value={email || ""}
				/>
			</div>
			<div className="mb-6">
				<Select
					error={errors?.department}
					label="Department"
					handleSelect={handleSelect}
					options={options}
					value={department}
				/>
			</div>
			<div className="mb-6">
				<Input
					name="question"
					onChange={handleChange}
					placeholder="Question"
					type="textarea"
					value={question || ""}
				/>
			</div>
			{loading && (
				<div className="flex justify-center items-center mb-4">
					<div className={loadingStyle} />
				</div>
			)}
			<div className="mb-1 rounded-md">
				<button className={buttonStyle + ` ${loading && "cursor-not-allowed disabled"}`}>
					<i className="fas fa-paper-plane mr-2" />
					<span>Start Chat</span>
				</button>
			</div>
		</form>
	</section>
);

export default ChatForm;
