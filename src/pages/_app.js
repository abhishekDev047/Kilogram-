import '@/styles/globals.css'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import Contact from './components/Contact'

export default function App({ Component, pageProps }) {
 
      return (
        <>
        <Provider store={store}>
      <div className='flex flex-col'>
    <div className=' px-2  w-full h-14 sm:h-20 '> 
    <Navbar />
    </div> 
    <div className='w-full'>
  <Component {...pageProps} />
    </div>

    <div>
<Contact/>
    </div>
  </div>
  </Provider>
  </>
  )
}
