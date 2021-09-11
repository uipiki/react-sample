import styles from './layout.module.css'
import Image from 'next/image'
import styless from '../styles/Home.module.css'
import ButtonAppBar from './header'

export default function Layout({ children }) {
  return <div className={styles.container}>
  <ButtonAppBar />
  {children}
  <footer className={styless.footer}>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{' '}
      <span className={styless.logo}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
    </a>
  </footer>
  </div>
}
