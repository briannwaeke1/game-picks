import '../styles/globals.css';
import { AuthProvider } from '../lib/auth';
import { supabase } from '../lib/client';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

function MyApp({ Component, pageProps }) {
	let persistor = persistStore(store);
	return (
		<AuthProvider supabase={supabase}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Component {...pageProps} />
				</PersistGate>
			</Provider>
		</AuthProvider>
	);
}

export default MyApp;
