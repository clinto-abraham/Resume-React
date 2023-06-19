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

function ProtectedPage() {
  return <h3>Protected</h3>;
}
// import { useState } from "react";
// import "./App.scss";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev"></a>
//         <a href="https://react.dev"></a>
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
//     </>
//   );
// }

// export default App;
