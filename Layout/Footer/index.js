import React from "react";
import Image from "next/image";

const sectionStyle = `m-2`;
const sectionTitleStyle = `font-bold text-2xl text-white my-3`;

const Footer = () => (
	<footer className="bg-blue-900">
		<div className="container mx-auto grid gap-2 lg:gap-1 md:grid-cols-2 lg:grid-cols-4 p-2 sm:p-4">
			<section className="my-2 p-2 sm:p-4 lg:px-0">
				<div className="my-2">
					<Image width={158} height={39} src="/assets/images/footer_logo.svg" alt="footer_logo" />
				</div>
				<p className="text-gray-300 text-lg">
					ParaPay is an innovative agent-banking system. 
					ParaPay driving force is providing financial 
					inclusion in traditionally underbanked and under serve 
					locations in Nigeria.
				</p>
				<br />
				<p className="text-gray-300 text-lg">
					Powered By 3Line Card Management Limited.
				</p>
			</section>
			<section className="my-2 p-2 sm:p-4 lg:px-0">
				<h3 className="font-bold mb-2 text-white text-2xl">About</h3>
				<ul>
					<li className="my-1 text-gray-300 text-lg hover:text-gray-500"><a href="#">ParaPay</a></li>
					<li className="my-1 text-gray-300 text-lg hover:text-gray-500"><a href="#">FAQ</a></li>
				</ul>
			</section>
			<section className="my-2 p-2 sm:p-4 lg:px-0">
				<h3 className="font-bold mb-2 text-white text-2xl">Legal</h3>
				<ul>
					<li className="my-1 text-gray-300 text-lg hover:text-gray-500"><a href="#">Terms and Conditions</a></li>
					<li className="my-1 text-gray-300 text-lg hover:text-gray-500"><a href="#">Privacy</a></li>
				</ul>
			</section>
			<section className="my-2 p-2 sm:p-4 lg:px-0">
				<h3 className="font-bold mb-2 text-white text-2xl">Stay connected</h3>
				<p className="text-gray-300 text-lg">Receive promotional updates straight to your inbox</p>
				<form className="my-3" onSubmit={(e) => e.preventDefault()}>
					<input 
						className="border form-input p-2 outline-none rounded-l-md rounded-r-none w-3/4 lg:rounded-r-md lg:w-full lg:my-1" 
						placeholder="Enter e-mail address" 
					/>
					<button 
						className="bg-yellow-600 border font-semibold hover:text-gray-100 hover:bg-gray-700 outline-none rounded-md rounded-l-none text-blue-900 p-2 lg:rounded-l-md lg:my-1"
					>
						Sign up
					</button>
				</form>
				<div className="flex my-5">
					<a className="bg-blue-800 hover:border hover:bg-purple-200 hover:text-blue-800 hover:border-blue-900 flex justify-center items-center text-2xl text-purple-200 w-11 h-11 rounded-full mr-2 p-1" href="#"><i className="fab fa-facebook-f" /></a>
					<a className="bg-blue-800 hover:border hover:bg-purple-200 hover:text-yellow-500 hover:border-yellow-500 flex justify-center items-center text-2xl text-purple-200 w-11 h-11 rounded-full mr-2 p-1" href="#"><i className="fab fa-linkedin-in" /></a>
					<a className="bg-blue-800 hover:border hover:bg-purple-200 hover:text-pink-600 hover:border-pink-600 flex justify-center items-center text-2xl text-purple-200 w-11 h-11 rounded-full mr-2 p-1" href="#"><i className="fab fa-instagram" /></a>
					<a className="bg-blue-800 hover:border hover:bg-purple-200 hover:text-blue-700 hover:border-blue-900 flex justify-center items-center text-2xl text-purple-200 w-11 h-11 rounded-full mr-2 p-1" href="#"><i className="fab fa-twitter" /></a>
				</div>
			</section>
		</div>
	</footer>
)

export default Footer
