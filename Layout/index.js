import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => (
	<div className="relative h-screen overflow-y-scroll overflow-x-hidden w-screen">
		<Header />
		<main className="bg-gray-100">
			{ children }
		</main>
		<Footer />
	</div>
)

export default Layout;