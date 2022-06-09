import '../ui/styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from '@mui/material'
import theme from '../ui/themes/theme'
import Footer from '../ui/components/Footer/Footer'
import HeaderAdmin from '../ui/components/HeaderAdmin/HeaderAdmin'
import { useRouter } from 'next/router'
import Header from '../ui/components/Header/Header'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ThemeProvider theme={theme}>
      {router.pathname === '/' ? <Header /> : <HeaderAdmin />}
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
