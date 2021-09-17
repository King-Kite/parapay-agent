import React from "react";
import Head from "next/head";
import ChatSection from "./ChatSection";
import DownloadParapay from "./DownloadParapay";
import Faq from "./Faq";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import ParaAgent from "./ParaAgent";
import ReadyStarted from "./ReadyStarted";
import Services from "./Services";

const Home = ({ title }) => (
	<>
		<Head>
			<title>{title}</title>
		</Head>
		<Hero />
		<Services />
		<ParaAgent />
		<HowItWorks />
		<DownloadParapay />
		<ReadyStarted />
		<Faq />
		{/*<ChatSection />*/}
	</>
)

export default Home;