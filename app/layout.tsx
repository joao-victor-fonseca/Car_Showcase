import { Footer, Navbar } from '@/components'
import './globals.css'


export const metadata = {
  title: 'Car Hub',
  description: 'descubra os melhores carros do mundo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
          <Navbar />
          {children}
          <Footer />

        </body>
    </html>
  )
}
