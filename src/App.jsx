import { useState } from 'react'
import './App.css'
import BtnQuote from './assets/componentes/BtnQuote'
import Quote from './assets/componentes/Quote'
import phrases from './utils/phrases.json'
import getRandomElemArray from './utils/getRandom'

function App() {

  const phraseRandom = getRandomElemArray(phrases)
  const numberRandom = getRandomElemArray([1, 2, 3, 4])

  const [quote, setQuote] = useState(phraseRandom)
  const [numberBg, setNumberBg] = useState(numberRandom)

  const bgStyle = {
    backgroundImage:  `url(/fondo${numberBg}.jpg)`
  }

  return (
    <div  className='container'    style={bgStyle} >
      <h1 className='container__tittle'>Galleta de la fortuna</h1>
      <Quote phrase={quote} />
      <BtnQuote  
      setQuote={setQuote} 
      phrases={phrases}
      setNumberBg={setNumberBg}
      />
    </div>
  )
}

export default App
