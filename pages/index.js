import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeadComponent from '../components/head'
import HeroComponent from '../components/hero'
import FeatureComponent from '../components/feature'
import Component from '../components/ component'
import CtaComponent from '../components/cta'
import FooterComponent from '../components/footer'

export default function Home() {
  return (
    <main>
      <HeadComponent/>
      <HeroComponent />
      <Component />
      <FeatureComponent />
      <CtaComponent />
      <FooterComponent />
    </main>
  )
}
