import { NavLink } from "react-router-dom";
import Modal from "./index";
import { SideBarIcons } from "../../../utils/Icons";
import { useDispatch, useSelector, useNavigate } from "../../../utils/commons";
import { registerSideNavbarToggle } from "../../../redux/navbarSlice";

const links = [
  {
    route: "/",
    name: "Home",
  },
  {
    route: "/about",
    name: "About",
  },
  {
    route: "/blogs",
    name: "Blogs",
  },
  {
    route: "/connect",
    name: "Contact",
  },
  {
    route: "/dashboard",
    name: "Dashboard",
  },
  {
    route: "/projects",
    name: "Explore Projects",
  },
  {
    route: "/login",
    name: "Login",
  },
];

export default function SideModal() {
  const { sideNavbarOpen } = useSelector((state) => state.navbar);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleNavbar = (link) => {
    console.log(link, "link");
    navigate(link);

    dispatch(registerSideNavbarToggle(!sideNavbarOpen));
  };
  // let buttonRef = React.useRef(null);
  function onDismiss() {
    navigate(-1);
  }
  // if (!sideNavbarOpen) {
  //   // navigate("/navigate");
  // } else {
  //   // navigate("/");
  // }

  return (
    <section>
      <Modal toggleModal={onDismiss} modalOpen={sideNavbarOpen}>
        <section>
          <ul className="navigation__list">
            {links.map((data, index) => (
              <NavLink key={data.route + index} className="navigation__item">
                <div
                  onClick={() => handleNavbar(data.route)}
                  className="navigation__link"
                >
                  <span>{SideBarIcons[index]}</span> {data.name}
                </div>
              </NavLink>
            ))}
          </ul>
        </section>
      </Modal>
    </section>
  );
}

// import { Link } from "react-router-dom";
// import { Dialog } from "@reach/dialog";
// {/* <Link to={data.route} className="navigation__link"> */}

// {/* </Link> */}

// const links = [
//   {
//     route: "/",
//     name: "Home",
//   },
//   {
//     route: "/about",
//     name: "About",
//   },
//   {
//     route: "/service",
//     name: "Services",
//   },
//   {
//     route: "/testimony",
//     name: "Testimony",
//   },
//   {
//     route: "/connect",
//     name: "Connect with me!",
//   },
//   {
//     route: "/coming-soon",
//     name: "Coming Soon",
//   },
//   {
//     route: "/projects",
//     name: "Projects",
//   },
//   {
//     route: "/img/2",
//     name: "Image 2",
//   },
// ];

// export default function SideModal() {
//   // let navigate = useNavigate();
//   let buttonRef = React.useRef(null);
//   // function onDismiss() {
//   //   navigate(-1);
//   // }

//   return (
//     <section>
//       <Dialog
//         aria-labelledby="label"
//         initialFocusRef={buttonRef}
//         style={{
//           backgroundColor: "transparent",
//         }}
//       >
//         <section>
//           <ul className="navigation__list">
//             {links.map((data, index) => (
//               <li key={data.route + index} className="navigation__item">
//                 <Link to={data.route} className="navigation__link">
//                   <span>{index + 1}</span> {data.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </section>
//       </Dialog>
//     </section>
//   );
// }

// <li className="navigation__item">
//               <Link to="/gallery" className="navigation__link">
//                 <span>02</span>Gallery
//               </Link>
//             </li>
//             <li className="navigation__item">
//               <Link to="/stacks" className="navigation__link">
//                 <span>03</span>Stacks
//               </Link>
//             </li>
//             <li className="navigation__item">
//               <Link to="/authorized" className="navigation__link">
//                 <span>04</span>Protected Page
//               </Link>
//             </li>
//             <li className="navigation__item">
//               <Link to="/img/1" className="navigation__link">
//                 <span>05</span>Image 1
//               </Link>
//             </li>
//             <li className="navigation__item">
//               <Link to="/img/2" className="navigation__link">
//                 <span>06</span>Image 1
//               </Link>
//             </li>

//  <h1
//    id="label"
//    style={{
//      margin: 0,
//      display: "grid",
//      justifyContent: "left",
//      backgroundColor: "grey",
//      padding: "200px 10px",
//      color: "black",
//      textAlign: "center",
//      fontSize: "90px",
//      fontWeight: "bold",
//      position: "fixed",
//      top: "0",
//      width: "100%",
//      transition: "0.9s",
//    }}
//  >
//    Do something
//  </h1>;

{
  /* <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="/" className="navigation__link">
              <span>01</span>About Natous
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/" className="navigation__link">
              <span>02</span>Your benfits
            </Link>
          </li>
          <li className="navigation__item">
           <Link to="/" className="navigation__link">
             <span>03</span>Popular tours
           </Link>
          </li>
          <li className="navigation__item">
           <Link to="/" className="navigation__link">
             <span>04</span>Stories
           </Link>
          </li>
          <li className="navigation__item">
           <Link to="/" className="navigation__link">
             <span>05</span>Book now
           </Link>
          </li>
        </ul>
      </nav>  */
}

// <div className="popup" id="popup">
//     <div className="popup__content">
//       <div className="popup__left">
//         <img src="nat-8.jpg" alt="Tour photo" className="popup__img" />
//         <img src="nat-9.jpg" alt="Tour photo" className="popup__img" />
//       </div>
//       <div className="popup__right">
//         <Link to="/section-tours" className="popup__close">
//           &times;
//         </Link>
//         <h2 className="heading-secondary u-margin-bottom-small">
//           Start booking now
//         </h2>
//         <h3 className="heading-tertiary u-margin-bottom-small">
//           Important &ndash; Please read these terms before booking
//         </h3>
//         <p className="popup__text">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
//           sed risus pretium quam. Aliquam sem et tortor consequat id.
//           Volutpat odio facilisis mauris sit amet massa vitae. Mi bibendum
//           neque egestas congue. Placerat orci nulla pellentesque dignissim
//           enim sit. Vitae semper quis lectus nulla at volutpat diam ut
//           venenatis. Malesuada pellentesque elit eget gravida cum sociis
//           natoque penatibus et. Proin fermentum leo vel orci porta non
//           pulvinar neque laoreet. Gravida neque convallis a cras semper.
//           Molestie at elementum eu facilisis sed odio morbi quis. Faucibus
//           vitae aliquet nec ullamcorper sit amet risus nullam eget. Nam
//           libero justo laoreet sit. Amet massa vitae tortor condimentum
//           lacinia quis vel eros donec. Sit amet facilisis magna etiam.
//           Imperdiet sed euismod nisi porta.
//         </p>
//         <Link to="/" className="btn btn--green">
//           Book now
//         </Link>
//       </div>
//     </div>
//   </div>
