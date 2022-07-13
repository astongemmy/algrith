import { useEffect } from 'react'
import { useRouter } from 'next/router'
import '../public/styles/fonts.css'
import '../public/styles/App.css'
import '../public/styles/Icons.css'
import '../public/styles/aos.css'
import '../public/styles/animate.css'
import "react-image-gallery/styles/css/image-gallery.css";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../store'

// Add a request interceptor
// window.axios.interceptors.request.use(function (config) {
//   const token = store.state.access_token ? store.state.access_token : '';
//   config.headers.Authorization =  `Bearer ${token}`;
//   return config;
// });


export default function MyApp({ Component, pageProps }) {
	useEffect(() => {
		window.axios = require('axios');
		window.axios.defaults.headers.common = {
			'X-Requested-With': 'XMLHttpRequest',
		};
		window.axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	}, [])
	
	const router = useRouter()
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Component key={router.asPath} {...pageProps} />
			</PersistGate>
		</Provider>
	)
}