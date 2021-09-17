import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => (
	<>
		<Header />
		<main className="bg-gray-100">
			{ children }
		</main>
		<Footer />
	</>
)

export default Layout;