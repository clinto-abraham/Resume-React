import './Styles/App.css'
import TopContainer from './components/TopContainer'
import { MiddleContainer } from './components/MidContainer'
import { Contact } from './components/Contact'
import { CreateSkillCards, MySkills } from './components/Skills'
import WordOfGod from './components/QuotesWordOfGod'
import FooterNavbar from './components/Footer'
import SignIn from './components/SignInGoogle'
// import Portfolio from './components/Portfolio'    <Portfolio />
// import { Typography, useState } from './Utils/exports'

function App() {

  return (
    <div className="App">
      <TopContainer />
      <SignIn />
      <MiddleContainer />
      <MySkills CreateSkillCards={CreateSkillCards} />
      <Contact />
      <WordOfGod color='black' size='2rem 1rem' />
      <FooterNavbar />
      {/* <NavigateMe /> */}
      {/* <WebsiteTile /> */}

    </div>
  )
}

export default App


// import {
//   QueryClient,
//   QueryClientProvider
// } from '@tanstack/react-query'












