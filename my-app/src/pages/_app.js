import '@component/styles/globals.css'
import { Montserrat } from 'next/font/google';
const { config, library } = require('@fortawesome/fontawesome-svg-core');
import { fab } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'

library.add(fab);
config.autoAddCss = false

const montserrat = Montserrat({
  weight: '400', 
  style: ['normal'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  )
}
