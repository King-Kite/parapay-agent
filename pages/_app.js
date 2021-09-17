import "../styles/globals.css";
import Layout from "../Layout";

const KiteFolio = ({ Component, pageProps }) => (
	<Layout>
		<Component {...pageProps} />
	</Layout>
)

export default KiteFolio;
