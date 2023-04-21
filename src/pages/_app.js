import '@/styles/globals.css'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

export default function App({ Component, pageProps }) {
 
      return (
        <>
        <Provider store={store}>
      <div className='flex flex-col sm:flex-row   '>
    <div className=' px-2  sm:w-1/12 w-full h-10 sm:h-screen'> 
    <Navbar />
    </div> 

    <div className=' px-2  sm:w-11/12'>
  <Component {...pageProps} />
    </div>
  </div>
  </Provider>
  </>
  )
}
