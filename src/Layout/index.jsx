/* eslint-disable react/prop-types */
import Hero from "../components/Layout/Hero";
import IntroHeader from "../components/Pages/Home/IntroHeader";

import FooterNavbar from "../components/Layout/Navbar/BottomBar";
import IconBar from "../components/Layout/Navbar/IconBar";
import UserRatings from "../components/Fragments/UserRatings";
import TimeLine from "../components/Pages/Profile/TimeLine";
import ScrollSlider from "../components/Layout/ScrollSlider";

const Layout = (props) => {
  return (
    <div className="container">
      <Hero />
      <IntroHeader />
      <IconBar />
      <ScrollSlider />
      {props.children}
      <UserRatings />
      <TimeLine />
      <FooterNavbar />
    </div>
  );
};

export default Layout;
