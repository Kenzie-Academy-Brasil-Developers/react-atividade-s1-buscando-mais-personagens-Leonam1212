import './App.css';
import Characters from './components/Characters'
import {useState, useEffect} from "react"
function App() {

  const [isFlip, setIsFlip] = useState(false)

  const [characterList, setCharacterList] = useState([])
  const [next, setNext] = useState(1)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${next}`)
    .then((response) => response.json())
    .then((response) => setCharacterList(response.results))
    .catch((e) => console.log(e))
    
  },[next])

const previousPage = () => {
  if(next > 1) {
    setNext(next - 1)
  }
}  
const nextPage = () => {
  if(next !== 33)
  setNext(next + 1)
}




  return (
    <div className="App">
      <Characters characterList={characterList}/>
        <button onClick={previousPage}>Voltar</button>
        <button onClick={nextPage}>Próximo</button>
    </div>
  );
}

export default App;
