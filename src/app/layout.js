import { ThemeContext, ThemeContextProvider } from '@/context/ThemeContext'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          {/* <ThemeContext> */}
            <div className='container'>
              <div className='wrapper'>
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          {/* </ThemeContext> */}
        </ThemeContextProvider>
      </body>
    </html>
  )
}
