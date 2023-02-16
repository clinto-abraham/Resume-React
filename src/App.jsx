import './Styles/App.css'
import TopContainer from './components/TopContainer'
import WordOfGod from './components/QuotesWordOfGod'
import FooterNavbar from './components/Footer'
import TopNavbar from './components/Navbar'
import TabSwitchBar from './components/Tabs'

function App() {

  return (
    <>
      <TopNavbar />
      <div className="App">
        <TopContainer />
        <TabSwitchBar />
        {/* <WebsiteTile /> */}
        <WordOfGod color='black' size='2rem 1rem' />
        <FooterNavbar />
        {/* <NavigateMe /> */}
      </div>
    </>
  )
}

export default App


// import {
//   QueryClient,
//   QueryClientProvider
// } from '@tanstack/react-query'












