import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Provider } from 'react-redux';
import { useState } from './Utils/exports'
import TopContainer from './components/Top-Container';
import { CreateSkillCards } from './components/Skills/CreateSkillCards';
import { MySkills } from './components/Skills';
import { MiddleContainer } from './components/Middle-Container';
import { Contact } from './components/Contact';
import FooterNavbar from './components/Footer';
import WordOfGod from './components/QuotesWordOfGod';
import { SnackbarProvider } from 'notistack';
import { store } from './redux/store';
import './Styles/App.css';


function App() {
    const [queryClient] = useState(() => new QueryClient())
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
      
      <TopContainer />
      <MiddleContainer />
      <MySkills CreateSkillCards={CreateSkillCards} />
      <Contact />
      <WordOfGod color='white' size='2rem 1rem' />
      <FooterNavbar />

      </SnackbarProvider>
      </Provider>
    </QueryClientProvider>
    </div>
  );
}

export default App;



// import '@/styles/globals.css'
// import '@/styles/NotFound.css'

// import TopNavbar from '@/components/Navbar';



// import NavigateMe from '@/components/NavigateButton';

// function MyApp({ Component, pageProps }) {
//   const [queryClient] = useState(() => new QueryClient())
//   return (
//     <QueryClientProvider client={queryClient}>
//       <Provider store={store}>
//         <SnackbarProvider maxSnack={3}>
//           <TopNavbar />
//           <WordOfGod color='white' size='2rem 1rem' />
//           <NavigateMe />
//           <Component {...pageProps} />
//           <FooterNavbar />
//         </SnackbarProvider>
//       </Provider>
//     </QueryClientProvider>
//   )
// }

// export default MyApp;
