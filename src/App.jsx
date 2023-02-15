import { Typography, useState } from './Utils/exports'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

import TopContainer from './components/TopContainer'
import { MiddleContainer } from './components/MidContainer'
import { Contact } from './components/Contact'
import { CreateSkillCards, MySkills } from './components/Skills'
import WordOfGod from './components/QuotesWordOfGod'
import FooterNavbar from './components/Footer'
import './Styles/App.css'

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'


// function App() {
//   const [queryClient] = useState(() => new QueryClient())

//   return (
//     <QueryClientProvider client={queryClient}>
//       <TopContainer />
//       <MiddleContainer />
//       {/* <NavigateMe /> */}
//       {/* <WebsiteTile /> */}
//       <MySkills CreateSkillCards={CreateSkillCards} />
//       <Contact />
//       <WordOfGod color='white' size='2rem 1rem' />
//       <FooterNavbar />
//     </QueryClientProvider>
//   )
// }

// export default App







function App() {

  return (
    <div className="App">
      <TopContainer />
      <MiddleContainer />
      <MySkills CreateSkillCards={CreateSkillCards} />
      <Contact />
      <WordOfGod color='black' size='2rem 1rem' />
      {/* <TopContainer />
      <MiddleContainer /> */}
      {/* <NavigateMe /> */}
      {/* <WebsiteTile /> */}
      {/* <MySkills CreateSkillCards={CreateSkillCards} /> */}
      {/* <Contact /> */}
      {/* <WordOfGod color='white' size='2rem 1rem' /> */}
      {/* <FooterNavbar /> */}
    </div>
  )
}

export default App

