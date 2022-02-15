import Footer from '../components/Footer'
import Header from '../components/Header'
import { RoversProvider } from '../context/Rovers'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <RoversProvider>
        <div className='flex flex-col h-screen'>
          <Header />
          <div className='flex-grow mt-6'>
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </RoversProvider>
    </>
  )
}

export default MyApp
