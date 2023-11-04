import Navbar from '@/components/navbar'
import './globals.css'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Xero Codee',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="px-0 py-0 overflow-hidden">
        <div className="fixed top-4 right-4 left-4 xl:left-[165px] xl:right-[165px] md:left-[100px] md:right-[100px] z-10">
          <Navbar />
        </div>
        <div className='relative top-[110px] h-screen overflow-y-auto overflow-x-hidden pb-[200px]'>
          <div className='px-4 xl:px-[165px] md:px-[100px]'>
            {children}
          </div>
          <div className='mt-[100px]'>
            <Footer />
          </div>
        </div>
      </body>
    </html >
  )
}
