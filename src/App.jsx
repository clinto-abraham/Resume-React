import { useState } from './Utils/exports'
// import TopContainer from './components/Top-Container';
// import { CreateSkillCards } from './components/Skills/CreateSkillCards';
// import { MySkills } from './components/Skills';
// import { MiddleContainer } from './components/Middle-Container';
// import { Contact } from './components/Contact';
// import FooterNavbar from './components/Footer';
// import WordOfGod from './components/QuotesWordOfGod';
// import WebsiteTile from './components/WebsiteTile';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import './Styles/App.css'
import TopContainer from './Components/TopContainer'
import { MiddleContainer } from './Components/MidContainer'
// import WebsiteTile from './Components/WebTiles'
import { Contact } from './Components/Contact'
import { CreateSkillCards, MySkills } from './Components/Skills'
import WordOfGod from './Components/QuotesWordOfGod'
import FooterNavbar from './Components/Footer'

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

// import reactLogo from './assets/react.svg'
// import { useState } from './Utils/exports'
// import TopContainer from './components/Top-Container';
// import { CreateSkillCards } from './components/Skills/CreateSkillCards';
// import { MySkills } from './components/Skills';
// import { MiddleContainer } from './components/Middle-Container';
// import { Contact } from './components/Contact';
// import FooterNavbar from './components/Footer';
// import WordOfGod from './components/QuotesWordOfGod';
// import WebsiteTile from './components/WebsiteTile';

// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App