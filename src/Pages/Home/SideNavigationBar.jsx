import { useLocation, useNavigate } from "react-router-dom";
import { registerSideNavbarToggle } from "../../redux/navbarSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function SideNavigationBar() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { sideNavbarOpen } = useSelector((state) => state.navbar);
  const handleNavbar = () => {
    if (!sideNavbarOpen) {
      navigate("/navigate");
    } else {
      navigate("/");
    }
    dispatch(registerSideNavbarToggle(!sideNavbarOpen));
  };

  useEffect(() => {
    if (location.pathname === "/navigate") {
      dispatch(registerSideNavbarToggle(true));
    } else {
      dispatch(registerSideNavbarToggle(false));
    }
  }, [location?.pathname]);

  return (
    <button className="navigation" onClick={handleNavbar}>
      <label className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
    </button>
  );
}

//  <input
//         type="checkbox"
//         className="navigation__checkbox"
//         id="navi-toggle"
//       />
// <nav className="navigation__nav">
//   <ul className="navigation__list">
//     <li className="navigation__item">
//       <Link to="/" className="navigation__link">
//         <span>01</span>Home
//       </Link>
//     </li>
//     <li className="navigation__item">
//       <Link to="/" className="navigation__link">
//         <span>02</span>Gallery
//       </Link>
//     </li>
//     <li className="navigation__item">
//      <Link to="/" className="navigation__link">
//        <span>03</span>Popular tours
//      </Link>
//     </li>
//     <li className="navigation__item">
//      <Link to="/" className="navigation__link">
//        <span>04</span>Stories
//      </Link>
//     </li>
//     <li className="navigation__item">
//      <Link to="/" className="navigation__link">
//        <span>05</span>Book now
//      </Link>
//     </li>
//   </ul>
// </nav>
