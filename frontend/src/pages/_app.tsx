import '../ui/styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from '@mui/material'
import theme from '../ui/themes/theme'
import Footer from '../ui/components/Footer/Footer'
import HeaderAdmin from '../ui/components/HeaderAdmin/HeaderAdmin'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <HeaderAdmin />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
