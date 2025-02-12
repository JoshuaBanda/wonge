import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LoginPage from './LoginPage'
import HomePage from './HomePage';
import LandingPage from './LandingPAge';

export default function Home() {
  return (
    <div>
      <LandingPage/>
    </div>
  )
}
