import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/layouts/main/footer'
import MainNavbar from '@/layouts/main/navbar'

export const metadata: Metadata = {
  title: 'Guardamelo blog',
  description: 'Encuentra una lista de recursos donde aprendemos temas releacionados a la programcion',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
      <html lang="en">
      <body className="antialiased">
      <MainNavbar/>
      <main className="mt-[60px] min-h-screen">
        {children}
      </main>
      <Footer/>
      </body>
      </html>
  )
}
