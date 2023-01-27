import { useState } from 'react'
import './reset.css'
import './App.css'

import { Header } from './components/Header'
import { Form } from './components/Form'
import { Landing } from './components/Landing'
import { List } from './components/List'
import { Totalmoney } from './components/Totalmoney'

function App() {
  const [page, setPage] = useState(true)

  const [cards, setCards] = useState([])

  return (
    <main>
      {
        page ? <Landing setPage={setPage}/>
        :
        <div className='container__homePage'>
            <Header setPage={setPage}/>

            <div className='container__form'>
              <Form setCards={setCards}/>

              <div>
              <Totalmoney cards={cards}/>

              </div>
              
            </div>
    
            <div className='container__list'>
              <List cards={cards} setCards={setCards}/>
            </div>
        </div> 
      }


    </main>
  )
}

export default App
