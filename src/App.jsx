import { Routes, Route, useLocation, useSelector } from "./utils/commons";

// import "@reach/dialog/styles.css";
import Modal from "./components/Fragments/Modal";
import RequireAuth from "./components/Pages/Login/RequireAuth";

import Home from "./pages/Home";
import SideModal from "./components/Fragments/Modal/SideModal";
// import AuthStatus from "./components/Login/AuthStatus";
// import Navbar from "./components/Navbar";
import DarkMode from "./components/Fragments/DarkMode";

import Stacks from "./pages/Stacks";
import SideBar from "./components/Fragments/Navigation/SideBar";
import ServiceFooter from "./components/Pages/Home/ServiceFooter";
import IntroHeader from "./components/Pages/Home/IntroHeader";
import Test from "./pages/Test";
import NoMatch from "./pages/404/NoMatch";
import ComingSoon from "./pages/ComingSoon";
import Projects from "./pages/Projects";

export default function App() {
  let location = useLocation();
  let state = location.state;
  const { darkMode } = useSelector((state) => state.navbar);
  return (
    <div className={darkMode ? "dark-mode" : null}>
      <DarkMode />
      <IntroHeader />

      <SideBar />
      <Routes location={state?.backgroundLocation || location}>
        <Route path="*" element={<Home />} />
        <Route path="/not-found" element={<NoMatch />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/navigate" element={<SideModal />} />
        <Route path="/stacks" element={<Stacks />} />
        <Route path="/test" element={<Test />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route
          path="/authorized"
          element={
            <RequireAuth>
              <ProtectedPage />
            </RequireAuth>
          }
        />
      </Routes>

      {/* Show the modal when a `backgroundLocation` is set */}
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/img/:id" element={<Modal />} />
        </Routes>
      )}

      <ServiceFooter />
    </div>
  );
}

// function Layout() {
//   return (
//     <div>
//       <Home />
//       <AuthStatus />
//       <Navbar />
//       {/* <Outlet /> */}
//     </div>
//   );
// }

// import Gallery from "./components/Gallery";
// import ImageView from "./components/ImageView";
// import LoginPage from "./components/Login/LoginPage";
// import SideNavigationBar from "./pages/Home/SideNavigationBar";
// import IntroHeader from "./pages/Home/IntroHeader";
// import ServiceFooter from "./pages/Home/ServiceFooter";
// import NoMatch from "./pages/404/NoMatch";

/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="/img/:id" element={<ImageView />} />
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/authenticated"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
          <Route path="/navigate" element={<SideModal />} />
          <Route path="*" element={<NoMatch />} />
        </Route> */

// function Layout() {
//   return (
//     <div>
//       <IntroHeader />
//       <SideNavigationBar />
//       <AuthStatus />

//       <Outlet />
//       <ServiceFooter />
//     </div>
//   );
// }

// function PublicPage() {
//   return <h3>Public</h3>;
// }

function ProtectedPage() {
  return <h3>Protected</h3>;
}

// // import "./styles/App.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home, { Introduction } from "./pages/Home";
// import EmailSubscription from "./pages/EmailSubscription";
// import LongPage from "./pages/LongPage";
// import getArrayLoader from "./api/getArrayLoader";
// import RouterErrorPage from "./error/routerHandler";
// import NotFoundPage from "./pages/NotFoundPage";

// let router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <RouterErrorPage />,
//     children: [
//       {
//         index: true,
//         loader: getArrayLoader,
//         element: <Introduction />,
//         handle: { scrollMode: "pathname" },
//       },
//       {
//         path: "restore-by-key",
//         loader: getArrayLoader,
//         element: <LongPage />,
//       },
//       {
//         path: "restore-by-pathname",
//         loader: getArrayLoader,
//         element: <LongPage />,
//         handle: { scrollMode: "pathname" },
//       },
//       {
//         path: "subscribe",
//         loader: getArrayLoader,
//         element: <EmailSubscription />,
//       },
//       {
//         path: "popup",
//         loader: getArrayLoader,
//         handle: { scrollMode: "pathname" },
//         // element: <EmailSubscription />,
//       },
//     ],
//   },
//   {
//     path: "*",
//     element: <NotFoundPage />,
//   },
// ]);

// if (import.meta.hot) {
//   import.meta.hot.dispose(() => router.dispose());
// }

// export default function App() {
//   return (
//     <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>} />
//   );
// }

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

// <Animation />

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
