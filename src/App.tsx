import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Expertise from './components/Expertise'
import Footer from './components/Footer'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Hero />
        <Services />
        <Expertise />
      </main>
      <Footer />
    </div>
  )
}

export default App
