import '../styles/globals.css'
import GlobalStyle from '../styles/globals'
import type { AppProps } from 'next/app'
import EthereumProvider from '../src/services/ethereum/EthereumProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return <> 
          <GlobalStyle/>
          <EthereumProvider>
            <Component {...pageProps} />
          </EthereumProvider>
         </>
}

export default MyApp
