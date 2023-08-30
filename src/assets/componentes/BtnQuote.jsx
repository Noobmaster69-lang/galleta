import getRandom from "../../utils/getRandom"

const BtnQuote = ({ setQuote, phrases, setNumberBg }) => {

  const pressRandomPhrase = () =>{
    setQuote(getRandom(phrases))
    setNumberBg(getRandom([1, 2, 3, 4]))
  }

  return (
    <button className="container__btn"    onClick={pressRandomPhrase} >Prueba tu suerte</button>
  )
}

export default BtnQuote