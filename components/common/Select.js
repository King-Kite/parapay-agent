import React from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

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

const Select = ({ className, error, handleSelect, label, options, value }) => {
	const { ref, setVisible, visible } = useOutsideClick(false);

	return (
		<>
			<div ref={ref} className={`relative ${className}`}>
				<div onClick={() => setVisible(!visible)} className="relative">
					<div className={selectStyle}>{ value?.title || label || options[0]?.title || "" }</div>
					<div className={selectIconStyle}>
						<i className="fas fa-chevron-down" />
					</div>
				</div>
				<div className={`${!visible && "hidden"} absolute top-12 w-full bg-white m-1 mt-3 shadow-lg`}>
					{options?.map(({ id, title }) => (
						<p
							onClick={() => {
								setVisible(false)
								handleSelect("department", { id, title })
							}} 
							key={id} className={selectOptionStyle}
						>
							{title}
						</p>
					))}
				</div>
			</div>
			{error && <p className="text-red-500 text-sm italic my-2">{error}</p>}
		</>
	)
}

export default Select;