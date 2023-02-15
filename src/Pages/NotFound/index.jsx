// import {
//   useEffect,
//   useDispatch, useSelector,
//   Link, useNavigate,
// } from '../../Utils/exports'
// import { useRouteError } from "react-router-dom";
// import { registerPushURL, registerSeconds } from "../../Redux/footerSlice";
// import '../../Styles/NotFound.css'

// export default function NotFoundPage() {
//   const dispatch = useDispatch();
//   const router = useNavigate();
//   const { seconds, pushURL } = useSelector(state => state.footer);
//   const error = useRouteError();
//   console.error(error);
//   useEffect(() => {
//     const interval = setInterval(() => dispatch(registerSeconds(seconds - 1)), 1000);
//     return () => {
//       clearInterval(interval);
//     };
//   }, [seconds]);

//   const handleBack = () => {
//     router('-1')
//   }

//   useEffect(() => {
//     if (pushURL) {
//       router('/')
//     }
//     const pushInterval = setInterval(() => dispatch(registerPushURL(true)), 19000)
//     return () => {
//       clearInterval(pushInterval);
//     };
//   }, [pushURL]);
//   return (
//     <div className='not-found'>
//       <section>
//         <div id="error-page">
//           <h1>Oops!</h1>
//           <p>Sorry, an unexpected error has occurred.</p>
//           <p>
//             <i>{error.statusText || error.message}</i>
//           </p>
//         </div>
//       </section>
//       <header className="top-header">

//       </header>

//       <div>
//         <div className="starsec"></div>
//         <div className="starthird"></div>
//         <div className="starfourth"></div>
//         <div className="starfifth"></div>
//       </div>

//       <div className="lamp__wrap">
//         <div className="lamp">
//           <div className="cable"></div>
//           <div className="cover"></div>
//           <div className="in-cover">
//             <div className="bulb"></div>
//           </div>
//           <div className="light"></div>
//         </div>
//       </div>
//       <section className="error">
//         <div className="error__content">
//           <div className="error__message message">
//             <h1 className="message__title">Page Not Found</h1>
//             <p className="message__text">We're sorry, the page you were looking for isn't found here. The link you followed may either be broken or no longer exists. Don't worry! sit back, we will take you back to homepage in {seconds} seconds.</p>
//           </div>
//           <div className="error__nav e-nav">
//             <Link onClick={() => handleBack()} className="e-nav__link" />
//           </div>
//         </div>
//       </section>

//     </div>
//   )
// }

// import {
//     useRouter,
//     useEffect,
//     useDispatch, useSelector,
//     Link,
// } from '@/Utils/export'


// import { useRouteError } from "react-router-dom";

export default function NotFoundPage() {
  // const error = useRouteError();
  // console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* <i>{error.statusText || error.message}</i> */}
      </p>
    </div>
  );
}