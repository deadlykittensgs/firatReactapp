import { useState } from 'react'
import './App.css'
import Greeting from './Greeting'
import Header from './Header'
import Footer from './Footer'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
    <>
     <Header/>
     <Counter/>
     <Greeting/>
     <Footer/>
    </>
    </section>
  )

}

export default App
