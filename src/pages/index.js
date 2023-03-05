import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Template from 'src/pages/App.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Template/>
    </>
  )
}
// {/* <link rel="icon" href="images/favicon.ico" /> */}
