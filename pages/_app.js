import { Provider } from 'next-auth/client'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

function DisneyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default DisneyApp
