import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
	const [visible, setVisible] = useState(false);

	return (
		<header className="md:container mx-auto relative z-50">
			<nav className="bg-white flex justify-between items-center px-8 sm:px-2 py-2 md:py-0 lg:px-6">
				<div className="md:w-1/4">
					<Image width={158} height={39} src="/assets/images/logo_primary.png" alt="header-logo" />
				</div>
				<div className="md:w-3/4">
					<div 
						className={`
							${!visible && "hidden"} absolute bg-gray-100 md:bg-white md:flex md:relative md:justify-center lg:justify-end lg:pr-24 md:h-auto h-screen mt-16 md:mt-0 top-0 left-0 w-full
						`}>
						<ul className="text-xl mt-12 md:flex md:justify-center md:items-center md:mt-0 p-4 md:p-1">
							<li className="hover:font-semibold m-5 lg:mx-8 hover:font-bold text-blue-900"><a href="#">Home</a></li>
							<li className="hover:font-semibold m-5 lg:mx-8 hover:font-bold text-blue-900"><a href="#">Services</a></li>
							<li className="hover:font-semibold m-5 lg:mx-8 hover:font-bold text-blue-900"><a href="#">FAQ</a></li>
						</ul>
					</div>
					<div 
						onClick={() => setVisible(!visible)}
						className="cursor-pointer h-9 w-9 mt-3 rounded-md md:hidden"
					>
						<div className={`bg-blue-900 duration-300 h-1 w-8 m-1 rounded-lg transform transition-all ${visible && "rotate-45 translate-y-2 w-7"}`} />
						<div className={`bg-blue-900 duration-300 h-1 w-8 m-1 rounded-lg transform transition-all ${visible && "opacity-0 invisible"}`} />
						<div className={`bg-blue-900 duration-300 h-1 w-8 m-1 rounded-lg transform transition-all ${visible && "-rotate-45 -translate-y-2"}`} />
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header;