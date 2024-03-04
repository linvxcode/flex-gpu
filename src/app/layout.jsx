import {  Plus_Jakarta_Sans } from 'next/font/google'
import '../common/style/globals.css'
import Navbar from '@/common/component/navbar/Navbar'
import Footer from '@/common/module/Footer'
import { Providers } from '@/common/component/element/Providers'


const plus_Jakarta_Sans = Plus_Jakarta_Sans({subsets: ['latin']});

export const metadata = {
  title: 'Teaser',
  description: 'SaaS and Startup Landing Page',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plus_Jakarta_Sans.className} dark:bg-black`}>
        <Providers>
        <div className='flex justify-center items-center'>
          <Navbar />
        </div>
        {children}
        <div className='flex justify-center items-center'>
          <Footer />
        </div>
        </Providers>
        </body>
    </html>
  )
}
