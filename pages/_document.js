import Document, { Html, Head, Main, NextScript } from "next/document";

const chatContainerStyle = 
	"absolute bg-transparent h-screen right-0 top-0 w-full md:w-1/2 lg:w-1/3"

class RootDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head />
				<body className="lg:overflow-x-hidden">
					<Main />
					{/*<div id="chat-section" className={chatContainerStyle} />*/}
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default RootDocument;
