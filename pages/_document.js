import Document, { Html, Head, Main, NextScript } from "next/document";

class RootDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head />
				<body className="overflow-hidden">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default RootDocument;
