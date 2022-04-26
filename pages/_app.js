import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { supabase } from '../lib/client';
import { Auth } from '@supabase/ui';

function MyApp({ Component, pageProps }) {
	let persistor = persistStore(store);
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Auth.UserContextProvider supabaseClient={supabase}>
					<Component {...pageProps} />
				</Auth.UserContextProvider>
			</PersistGate>
		</Provider>
	);
}

export default MyApp;
