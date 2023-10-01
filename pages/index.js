import Head from 'next/head'
import Image from 'next/image'
import Heroe from '@/components/heroe/heroe'
import About from '@/components/about/about'
import Founders from '@/components/founnders/founders'
import Event from '@/components/events/event'
import Footer from '@/components/footer/footer'
import { amp } from '@/next.config'

export default function Home() {
  return (
    <>
      <Heroe />
      <About/>
      <Founders />
      <Event />
      <Footer />
    </>
  )
}
