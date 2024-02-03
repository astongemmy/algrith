import { PersistGate } from 'redux-persist/integration/react';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { SessionProvider } from 'next-auth/react'
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { useEffect } from 'react';

import GlobalStyles from '../styled/global';
import { store, persistor } from '../store';
import '../public/styles/animate.css';
import '../public/styles/fonts.css';
import '../public/styles/Icons.css';
import '../public/styles/App.css';
import '../public/styles/aos.css';

// Add a request interceptor
// window.axios.interceptors.request.use(function (config) {
//   const token = store.state.access_token ? store.state.access_token : '';
//   config.headers.Authorization =  `Bearer ${token}`;
//   return config;
// });


const App = ({ Component, pageProps: { session, pageProps }, }) => {
	const router = useRouter();

	useEffect(() => {
		window.axios = require('axios');
		window.axios.defaults.headers.common = {
			'X-Requested-With': 'XMLHttpRequest',
		};

		window.axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	}, [])
	
	return (
		<SessionProvider session={session}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<GlobalStyles />
					<Component key={router.asPath} {...pageProps} />
				</PersistGate>
			</Provider>
		</SessionProvider>
	)
};

export default App;