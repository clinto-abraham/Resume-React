import { Routes, Route, useLocation, useSelector } from "./utils/commons";

import Modal from "./components/Fragments/Modal";
import RequireAuth from "./components/Pages/Login/RequireAuth";
import SideModal from "./components/Fragments/Modal/SideModal";
import Hero from "./components/Layout/Hero";
import SideBar from "./components/Layout/Navbar/SideBar";
import IntroHeader from "./components/Pages/Home/IntroHeader";

import Home from "./pages/Home";
import Stacks from "./pages/Stacks";
import Test from "./pages/Test";
import NoMatch from "./pages/404/NoMatch";
import ComingSoon from "./pages/ComingSoon";
import Projects from "./pages/Projects";
import FooterNavbar from "./components/Layout/Navbar/BottomBar";

export default function App() {
  let location = useLocation();
  let state = location.state;
  const { darkMode } = useSelector((state) => state.navbar);
  return (
    <div className={darkMode ? "dark-mode" : null}>
      <Hero />
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

      {/* <ServiceFooter /> */}
      <FooterNavbar />
    </div>
  );
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}
