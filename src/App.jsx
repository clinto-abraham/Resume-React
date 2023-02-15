import { useState } from './Utils/exports'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

import TopContainer from './Components/TopContainer'
import { MiddleContainer } from './Components/MidContainer'
import { Contact } from './Components/Contact'
import { CreateSkillCards, MySkills } from './Components/Skills'
import WordOfGod from './Components/QuotesWordOfGod'
import FooterNavbar from './Components/Footer'
import './Styles/App.css'

function App() {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <TopContainer />
      <MiddleContainer />
      {/* <NavigateMe /> */}
      {/* <WebsiteTile /> */}
      <MySkills CreateSkillCards={CreateSkillCards} />
      <Contact />
      <WordOfGod color='white' size='2rem 1rem' />
      <FooterNavbar />
    </QueryClientProvider>
  )
}

export default App

// import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {

//   return (
//     <div className="App">

//     </div>
//   )
// }

// export default App

