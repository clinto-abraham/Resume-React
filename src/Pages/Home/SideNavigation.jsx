import { useNavigate } from "react-router-dom";

export default function SideNavigation() {
  let navigate = useNavigate();
  return (
    <div className="navigation" onClick={() => navigate("/navigate")}>
      <label className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
    </div>
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
