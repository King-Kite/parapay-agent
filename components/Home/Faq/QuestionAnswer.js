import React from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";

const questionStyle =
	"bg-blue-900 cursor-pointer duration-300 hover:font-bold flex justify-between items-center text-lg text-white transition-all transform p-3";

const QuestionAnswer = ({
	answer,
	answer2,
	index,
	initValue,
	last,
	question,
}) => {
	const { visible, setVisible } = useOutsideClick(initValue);

	return (
		<section className="mb-3">
			<div
				onClick={() => setVisible(!visible)}
				className={`${questionStyle} ${
					!visible && "hover:bg-yellow-500 hover:text-blue-900"
				} ${index === 0 && "rounded-t-lg"} ${last && "rounded-b-lg"}`}
			>
				<h1 className="capitalize">
					{index + 1}. {question}
				</h1>
				<i className={`fas fa-chevron-${visible ? "down" : "right"}`} />
			</div>
			<div
				className={`${!visible && "hidden"} bg-white ${
					last && "rounded-b-lg"
				} my-2 p-3 sm:p-5 text-lg text-gray-500`}
			>
				{typeof answer !== "string" ? (
					<ul className={`${answer.listType} list-inside`}>
						{answer.list?.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				) : (
					<p className="m-1">{answer}</p>
				)}
				{answer2 && typeof answer2 !== "string" ? (
					<ul className={`${answer2.listType} list-inside`}>
						{answer2.list?.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				) : (
					<p className="m-1">{answer2}</p>
				)}
			</div>
		</section>
	);
};


export default QuestionAnswer;