export const metadata = {
  title: 'Fabrica de Software - UNIVILLE',
  description: 'Conheça a Fabrica de Software',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Testimonials2 from '@/components/testimonials2'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials2 />
      <Testimonials />
      <Newsletter />
    </>
  )
}
