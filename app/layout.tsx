import Navbar from '@/components/navbar'
import './globals.css'

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
        <div className='relative top-[110px] h-screen px-4 xl:px-[165px] md:px-[100px] pb-[150px] overflow-y-auto overflow-x-hidden'>
          {children}
        </div>
      </body>
    </html >
  )
}
