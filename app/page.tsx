import Clients from '@/components/clients'
import Features from '@/components/features'
import Intro from '@/components/intro'
import Subscribe from '@/components/subscribe'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <main>
      <Intro />
      <Clients />
      <Features />
      <Testimonials />
      <Subscribe />
    </main >
  )
}
