import Head from 'next/head'
import Image from 'next/image'
import Heroe from '@/components/hero/hero'
import About from '@/components/about/about'
import Founders from '@/components/founnders/founders'
import Event from '@/components/events/event'
import Footer from '@/components/footer/footer'
import Choir from '@/components/choir/choir'
import President from '@/components/president/president'
import Map from '@/components/map/map'


export default function Landing() {
  return (
    <>
      <Heroe />
      <About/>
      <Choir />
      <President />
      {/* <Founders /> */}
      <Event />
      <Map />
      <Footer />
    </>
  )
}