import React from "react";

const inputStyle = `
	appearance-none border-2 border-gray-200 rounded-sm w-full p-4 
	placeholder-gray-600 text-gray-700 leading-tight text-xl
	focus:border-gray-400 focus:outline-none focus:shadow-outline shadow 
`;

const Input = ({ className, error, type, ...props }) => (
	<>
		{type === "textarea" ? (
			<textarea className={`${inputStyle} ${className}`} {...props} />
		) : (
			<input className={`${inputStyle} ${className}`} type={type} {...props} />
		)}
		{error && <p className="text-red-500 text-sm italic my-2">{error}</p>}
	</>
);

export default Input;
