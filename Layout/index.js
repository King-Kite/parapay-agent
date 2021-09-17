import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Chat from "../components/Chat";

const Layout = ({ children }) => (
	<div className="relative h-screen overflow-auto w-screen">
		<Header />
		<main className="bg-gray-100">
			{ children }
		</main>
		<Footer />
		<Chat />
	</div>
)

export default Layout;