import '../styles/globals.css';
import Nav from '../Components/Nav';

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Nav />
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
