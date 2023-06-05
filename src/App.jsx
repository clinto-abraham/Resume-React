import Navbar from './components/Navbar';
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './styles/App.css'
import './styles/navbar.css'
import TopNavbar from './components/TopNavbar'
import TopContainer from './components/TopContainer'
// import TabSwitchBar from './components/TabSwitchBar'
import WordOfGod from './components/WordOfGod'
import FooterNavbar from './components/FooterNavbar'
// import TopNavbar from './components/TopNavbar'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <TopNavbar />
      <div>
        <a href='https://public-personal-data.s3.ap-south-1.amazonaws.com/progamming+files/removedBackground.png'>
          <img src='https://public-personal-data.s3.ap-south-1.amazonaws.com/progamming+files/removedBackground.png' className="logo" alt="Clinto logo" />
        </a>
      </div>
      {/* <Typing content='I am Clinto Abraham' /> */}
      <TopContainer />
      <WordOfGod color='black' size='2rem 1rem' />
      <FooterNavbar />

      {/* <h2 className='black'>I am Clinto Abraham </h2> */}
      {/* <TabSwitchBar /> */}
      {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}

      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <a href="https://react.dev">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
    </>
  )
}

export default App
