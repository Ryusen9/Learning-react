import Card from './Card.jsx'
import Greetings from './Greetings.jsx'
function App() {
  return(
    <>
      <Card/>
      <Greetings isLoggedIn={true} userName="Ryusen"/>
    </>
  )
}

export default App
