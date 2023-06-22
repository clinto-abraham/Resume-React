import { RouterProvider } from "./utils/commons";

import router from "./router";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import AuthProvider from "./context/AuthProvider";
// import { SnackbarProvider } from 'notistack';

import Hero from "./components/Layout/Hero";
import IntroHeader from "./components/Pages/Home/IntroHeader";

import FooterNavbar from "./components/Layout/Navbar/BottomBar";
import IconBar from "./components/Layout/Navbar/IconBar";
import UserRatings from "./components/Fragments/UserRatings";
import TimeLine from "./components/Pages/Profile/TimeLine";

export default function App() {
  // const { darkMode } = useSelector((state) => state.navbar);
  return (
    <>
      <Provider store={store}>
        <Hero />
        <IntroHeader />
        <IconBar />
        <AuthProvider>
          {/* <SnackbarProvider maxSnack={3}> */}
          <RouterProvider router={router} />;
        </AuthProvider>
        <UserRatings />
        <TimeLine />
        <FooterNavbar />
      </Provider>
    </>
  );
}

// <div className={darkMode ? "dark-mode" : null}>
// </div>

// export default function App() {
//   let location = useLocation();
//   let state = location.state;
//   const { darkMode } = useSelector((state) => state.navbar);
//   return (
//     <div className={darkMode ? "dark-mode" : null}>
//       <Hero />
//       <IntroHeader />
//       <IconBar />

//       <SideBar />
//       <Routes location={state?.backgroundLocation || location}>
//         <Route path="*" element={<Home />} />
//         <Route path="/not-found" element={<NoMatch />} />
//         <Route path="/projects" element={<Projects />} />

//         <Route path="/navigate" element={<SideModal />} />
//         <Route path="/stacks" element={<Stacks />} />
//         <Route path="/test" element={<Test />} />
//         <Route path="/coming-soon" element={<ComingSoon />} />
//         <Route
//           path="/authorized"
//           element={
//             <RequireAuth>
//               <ProtectedPage />
//             </RequireAuth>
//           }
//         />
//       </Routes>

//       {/* Show the modal when a `backgroundLocation` is set */}
//       {state?.backgroundLocation && (
//         <Routes>
//           <Route path="/img/:id" element={<Modal />} />
//           <Route path="/subscribe" element={<EmailSubscription />} />
//         </Routes>
//       )}

//       {/* <ServiceFooter /> */}
//       <UserRatings />
//       <TimeLine />
//       <FooterNavbar />
//     </div>
//   );
// }

// function ProtectedPage() {
//   return <h3>Protected</h3>;
// }
