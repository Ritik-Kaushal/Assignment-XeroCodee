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
        <div className="fixed top-4 left-[165px] right-[165px] z-10">
          <Navbar />
        </div>
        <div className='relative top-[110px] h-screen px-[165px] overflow-y-auto'>
          {children}
        </div>
      </body>
    </html >
  )
}
