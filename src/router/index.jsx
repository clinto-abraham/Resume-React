import { createBrowserRouter } from "../utils/commons";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Blogs from "../Pages/Blogs";
import Contact from "../Pages/Contact";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
// import NotFound from "../pages/NotFound";
import Projects from "../Pages/Projects";
import RouterBoundary from "../error/RouterBoundary";
import ErrorBoundary from "../error/ErrorBoundary";
import RootBoundary from "../error/RootBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary name="<Home />">
        <Home />,
      </ErrorBoundary>
    ),
    errorElement: <RootBoundary />,
    children: [
      {
        path: "about",
        element: <About />,
        errorElement: <RouterBoundary />,
        children: [
          {
            path: "projects",
            element: <Projects />,
          },
        ],
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        // loader: ({ request }) =>
        //   fetch("/api/dashboard.json", {
        //     signal: request.signal,
        //   }),
      },
      {
        element: <Login />,
        path: "optimistic",
        children: [
          {
            path: "sign-up",
            // element: <SignUp />,
            // loader: redirectIfUser,
          },
          {
            path: "logout",
            // action: logoutUser,
          },
        ],
      },
    ],
  },
]);

export default router;

// import Hero from "../components/Layout/Hero";
// import SideBar from "../components/Layout/Navbar/SideBar";
// import IntroHeader from "../components/Pages/Home/IntroHeader";

// import FooterNavbar from "../components/Layout/Navbar/BottomBar";
// import IconBar from "../components/Layout/Navbar/IconBar";
// import UserRatings from "../components/Fragments/UserRatings";
// import TimeLine from "../components/Pages/Profile/TimeLine";

// import Modal from "../components/Fragments/Modal";
// import RequireAuth from "../components/Pages/Login/RequireAuth";
// import SideModal from "../components/Fragments/Modal/SideModal";

// import Stacks from "../pages/Blogs";
// import NoMatch from "../pages/NotFound/NoMatch";
// import ComingSoon from "../pages/Dashboard";

// import EmailSubscription from "../components/Pages/Login/EmailSubscription";

// const Router = createBrowserRouter(
//   createRoutesFromElements(
//     <Routes>
//       {/* <Route path="*" element={<Home />} />
//       <Route path="/not-found" element={<NoMatch />} />
//       <Route path="/projects" element={<Projects />} />

//       <Route path="/navigate" element={<SideModal />} />
//       <Route path="/stacks" element={<Stacks />} />
//       <Route path="/test" element={<Test />} />
//       <Route path="/coming-soon" element={<ComingSoon />} />
//       <Route
//         path="/authorized"
//         element={
//           <RequireAuth>
//             <ProtectedPage />
//           </RequireAuth>
//         }
//       />

//       <Route path="/img/:id" element={<Modal />} /> */}
//       <Route path="/subscribe" element={<EmailSubscription />} />
//     </Routes>
//   )
// );

// function ProtectedPage() {
//   return <h3>Protected</h3>;
// }

//   {
//     /* Show the modal when a `backgroundLocation` is set */
//   }

//   {
// /* <Route path="/" element={<Root />}>
// <Route path="contact" element={<Contact />} />
// <Route
//   path="dashboard"
//   element={<Dashboard />}
//   loader={({ request }) =>
//     fetch("/api/dashboard.json", {
//       signal: request.signal,
//     })
//   }
// />
// <Route element={<AuthLayout />}>
//   <Route path="login" element={<Login />} loader={redirectIfUser} />
//   <Route path="logout" action={logoutUser} />
// </Route>
//   </Route> */
//   }
//   <React.Fragment>
//     {/* <Hero />
//     <IntroHeader />
//     <IconBar />
//     <SideBar /> */}
//     {/* <UserRatings />
//     <TimeLine />
//     <FooterNavbar /> */}
//   </React.Fragment>;
