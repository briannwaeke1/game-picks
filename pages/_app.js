import '../styles/globals.css';
import { AuthProvider } from '../lib/auth';
import { supabase } from '../lib/client';
import { Provider } from 'react-redux';
import { wrapper } from '../redux/store';

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider supabase={supabase}>
			<Component {...pageProps} />
		</AuthProvider>
	);
}

export default MyApp;
