import '../styles/globals.css'
import '../i18n';
import {Provider} from 'react-redux';
import store from '../redux/store'
// require('dotenv').config()

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
          <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
