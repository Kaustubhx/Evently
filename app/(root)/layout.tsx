import '../globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='flex h-screen flex-col'>
      <div className='flex-1'>
        <Header />
        {children}
        <Footer />
      </div>
    </main>
  )
}
