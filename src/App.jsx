// import "./styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { Introduction } from "./pages/Home";
import EmailSubscription from "./pages/EmailSubscription";
import LongPage from "./pages/LongPage";
import getArrayLoader from "./api/getArrayLoader";
import RouterErrorPage from "./error/routerHandler";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <RouterErrorPage />,
    children: [
      {
        index: true,
        loader: getArrayLoader,
        element: <Introduction />,
        handle: { scrollMode: "pathname" },
      },
      {
        path: "restore-by-key",
        loader: getArrayLoader,
        element: <LongPage />,
      },
      {
        path: "restore-by-pathname",
        loader: getArrayLoader,
        element: <LongPage />,
        handle: { scrollMode: "pathname" },
      },
      {
        path: "subscribe",
        loader: getArrayLoader,
        element: <EmailSubscription />,
      },
    ],
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default function App() {
  return (
    <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>} />
  );
}

// function App() {
//   return (

//     <div>
//       <a href='https://public-personal-data.s3.ap-south-1.amazonaws.com/progamming+files/removedBackground.png'>
//         <img src='https://public-personal-data.s3.ap-south-1.amazonaws.com/progamming+files/removedBackground.png' className="logo" alt="Clinto logo" />
//       </a>
//     </div>
//   )
// }

// export default App

// import Navbar from './components/Navbar';
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'

// import './styles/navbar.css'
// import TopNavbar from './components/TopNavbar'
// import TopContainer from './components/TopContainer'
// // import TabSwitchBar from './components/TabSwitchBar'
// import WordOfGod from './components/WordOfGod'
// import FooterNavbar from './components/FooterNavbar'
// // import Animation from './components/Animation';
// // import TopNavbar from './components/TopNavbar'

{
  /* <Animation /> */
}
// <Navbar />
// <TopNavbar />
//   {/* <Typing content='I am Clinto Abraham' /> */}
// < TopContainer />
//     <WordOfGod color='black' size='2rem 1rem' />
//     <FooterNavbar />

//       {/* <h2 className='black'>I am Clinto Abraham </h2> */}
// {/* <TabSwitchBar /> */ }
// {/* <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p> */}

// {/* <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
// {/* <a href="https://react.dev">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a> */}
