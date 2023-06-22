// import { useLocation, useNavigate } from "react-router-dom";
import { registerSideNavbarToggle } from "../../../redux/navbarSlice";
import { useDispatch, useSelector } from "react-redux";
import SideModal from "../../Fragments/Modal/SideModal";
// import { useEffect } from "react";

export default function SideBar() {
  // let navigate = useNavigate();
  const dispatch = useDispatch();
  // const location = useLocation();
  const { sideNavbarOpen } = useSelector((state) => state.navbar);
  const handleNavbar = () => {
    // if (!sideNavbarOpen) {
    //   // navigate("/navigate");
    // } else {
    //   // navigate("/");
    // }
    dispatch(registerSideNavbarToggle(!sideNavbarOpen));
  };
  console.log(sideNavbarOpen);

  // useEffect(() => {
  //   if (location.pathname === "/navigate") {
  //     dispatch(registerSideNavbarToggle(true));
  //   } else {
  //     dispatch(registerSideNavbarToggle(false));
  //   }
  // }, [location?.pathname]);

  return (
    <>
      <button className="navigation" onClick={handleNavbar}>
        <label className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>
      </button>
      <SideModal />
    </>
  );
}
