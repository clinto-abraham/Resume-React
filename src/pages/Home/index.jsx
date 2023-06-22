import ServiceConnect from "../../components/Pages/Home/ServiceConnect";
import ServiceTestimony from "../../components/Pages/Home/ServiceTestimony";
import ServiceSubscriptions from "../../components/Pages/Home/ServiceSubscriptions";
import ServiceFeatures from "../../components/Pages/Home/ServiceFeatures";
import AboutService from "../../components/Pages/Home/AboutService";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { routerTOC } from "../../utils/helpers/router.helper";
import { useNavigate } from "react-router-dom";
import SideBar from "../../components/Layout/Navbar/SideBar";
// import IntroHeader from "../../components/Pages/Home/IntroHeader";
// import ZoomCard from "../../components/Fragments/ZoomCard";
// import FlipCard from "../../components/Fragments/FlipCard";
// import IconsTOC from "../../components/Fragments/IconsTOC";
// import GranularGrid from "../../components/Fragments/GranularGrid";
// import ExtraGrid from "../../components/Home/ExtraGrid";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    routerTOC(location, navigate);
  }, []);

  return (
    <main>
      <SideBar />
      {/* <ZoomCard />

      <FlipCard className="vertical" />
      <FlipCard className="horizontal" /> */}
      <AboutService />
      <ServiceFeatures />
      <ServiceSubscriptions />
      <ServiceTestimony />
      <ServiceConnect />
      {/* <GranularGrid /> */}
    </main>
  );
};

//
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Link,
//   Outlet,
//   ScrollRestoration,
//   useNavigation,
// } from "react-router-dom";
// import { registerModalToggle } from "../../redux/subscribeSlice";
// import EmailSubscription from "../EmailSubscription";
// import { Link } from "../../utils/commons";

// function Home() {
//   // let navigation = useNavigation();
//   // const dispatch = useDispatch();
//   // const { showModal } = useSelector((state) => state.subscribe);
//   // const handleSubscribe = () => {
//   //   dispatch(registerModalToggle(true));
//   // };

//   // let getKey = React.useCallback((location, matches) => {
//   //   let match = matches.find((m) => m.handle?.scrollMode);
//   //   if (match?.handle?.scrollMode === "pathname") {
//   //     return location.pathname;
//   //   }

//   //   return location.key;
//   // }, []);

//   return (
//     <>
//       <Portfolio />
//     </>
//   );
// }

export const Introduction = () => {
  return (
    <>
      <h1>Introduction</h1>
      <p>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit
        ligula vel diam volutpat, sollicitudin ultrices mauris dignissim.
        Praesent ligula lacus, tincidunt a viverra ut, mattis vel arcu. Maecenas
        vulputate tristique sem, id consequat nulla mattis a. Praesent finibus
        viverra laoreet. Ut convallis pulvinar neque. Donec tortor est, rhoncus
        viverra malesuada non, rhoncus a libero. Vivamus gravida, neque quis
        interdum venenatis, massa tellus maximus libero, ut facilisis orci elit
        in mi. Cras cursus nibh et nisi iaculis egestas. Quisque luctus massa ut
        ex auctor, et feugiat augue ultricies. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Pellentesque imperdiet orci nec imperdiet
        congue. Donec a efficitur erat, nec tristique quam. Pellentesque
        fringilla velit in ultricies laoreet. Nam in augue mattis, pharetra
        libero facilisis, lacinia nisl. Integer erat diam, porta vel luctus ac,
        faucibus faucibus erat. Duis ut diam nec risus pulvinar laoreet quis
        eget dolor. Sed sapien nulla, placerat eu molestie eget, dictum sit amet
        quam. Morbi varius dui a erat suscipit, tempus efficitur nulla tempor.
        In nec vulputate nisl. Etiam pharetra fermentum est eget dapibus. Cras
        egestas nibh nec enim malesuada, nec egestas odio faucibus. Praesent
        venenatis interdum aliquet. Phasellus erat turpis, volutpat ac gravida
        a, vestibulum eu orci. Donec suscipit fringilla diam, quis efficitur
        velit cursus non. Ut quis facilisis massa. Mauris eleifend ipsum eros,
        ut auctor massa rutrum in. Aenean fermentum, erat sit amet efficitur
        tincidunt, tortor est euismod justo, sit amet placerat elit nibh non
        orci. Praesent in accumsan leo. Curabitur id auctor urna. Ut in ultrices
        quam, ut iaculis sapien. Nullam et varius dolor. Morbi quis dapibus
        erat. Donec ut sem vitae nibh venenatis molestie ut id augue. Nam et
        ligula laoreet, sodales tortor vitae, porta dolor. Etiam lobortis ex
        tellus, vitae vulputate nibh vehicula id. Class aptent taciti sociosqu
        ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla
        nibh sapien, dignissim sit amet mattis a, sollicitudin id dolor. Nunc in
        neque blandit, luctus ligula quis, ornare velit. Nunc elit sapien,
        ultrices sed tempor a, efficitur sed lacus. Aliquam cursus ipsum arcu,
        id fermentum mauris ultrices at. Sed dapibus ipsum quis arcu efficitur
        placerat. Vestibulum lacinia aliquet metus, vitae efficitur felis
        tristique ut. Vivamus tempor odio eu est egestas, et dignissim ipsum
        egestas. Nulla a ipsum malesuada, elementum augue a, porta odio.
        Phasellus tempus ligula eu urna dapibus pharetra. Phasellus congue nisl
        quis ex consectetur, id condimentum erat convallis. Nullam non pharetra
        est, id ornare diam. Nunc nibh nulla, fermentum a quam non, accumsan
        ullamcorper risus. Praesent nec sagittis quam. Sed aliquet, neque sit
        amet sodales varius, urna mi dignissim nisl, sed posuere quam lorem sit
        amet tellus. In hac habitasse platea dictumst. In hac habitasse platea
        dictumst. Sed neque nulla, dapibus rhoncus lacinia ac, euismod id nibh.
        Suspendisse ante erat, semper vitae tempor sed, suscipit eget ex. Nam
        placerat mi nec vestibulum vehicula. Duis eu ligula at metus condimentum
        tincidunt nec nec diam. Nullam ac tellus iaculis, imperdiet sapien
        vitae, scelerisque lorem. Morbi posuere arcu ut eros consequat, id
        rhoncus est luctus. Fusce interdum augue sit amet sollicitudin volutpat.
        Ut fermentum fermentum fringilla. Phasellus finibus porta orci quis
        eleifend. Nullam pellentesque iaculis nulla sed varius. Sed pharetra
        ante ex, eget posuere dui volutpat vulputate. Vivamus at suscipit nisl,
        eu efficitur nisl. Ut aliquet condimentum dui, id iaculis elit.
        Suspendisse potenti. Fusce tellus lacus, tincidunt sit amet vulputate
        sit amet, vehicula sed elit. Sed vitae sem in dolor condimentum dapibus.
        Nullam convallis mattis lectus, et elementum elit rutrum non. Praesent
        ac quam sed felis eleifend iaculis. Curabitur id purus eu turpis
        vestibulum rutrum. Donec dui mi, consequat vitae molestie ac, tincidunt
        et neque. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Phasellus iaculis viverra tellus, a dapibus orci luctus eu. Sed
        tincidunt id est ac tempor. Mauris varius imperdiet sapien ac
        pellentesque. Nunc varius ut magna eu vehicula. In consequat accumsan
        erat id congue. Integer id malesuada orci. Integer vestibulum enim eu
        diam malesuada, non maximus orci feugiat. Aliquam erat volutpat. Quisque
        dapibus vitae urna et faucibus. Vestibulum nulla dui, tristique egestas
        lacus nec, condimentum auctor tortor. Ut interdum feugiat eros non
        sodales. Fusce quis urna dui. Aenean eu nisl auctor, tristique justo
        eget, faucibus sem. Nullam nec semper augue. Fusce pulvinar mollis
        tortor et luctus. Cras dapibus, libero ac ultricies ultrices, orci nunc
        volutpat neque, et porttitor justo arcu ut quam. Aliquam scelerisque
        volutpat lacus. Donec sit amet elit consectetur, tempus tortor ac,
        dictum odio. Aenean luctus ut sem ut vehicula. In malesuada tincidunt
        velit ac luctus. Praesent fermentum vehicula orci, in suscipit dui
        porttitor consectetur. Curabitur nunc erat, feugiat vel est eu,
        fringilla aliquam odio. Pellentesque commodo fermentum vehicula. Nunc
        eget sollicitudin enim. In varius at libero ut efficitur. Nunc et sem
        turpis. Donec commodo enim fringilla rhoncus gravida. Pellentesque
        ornare vitae est sed bibendum. Praesent ligula risus, rutrum non lorem
        id, ultrices luctus enim. Cras ac sem vulputate, porttitor leo nec,
        euismod velit. Aliquam bibendum sem diam, vitae tincidunt dui dapibus
        et. Etiam lacinia mi quis est vehicula laoreet. Etiam scelerisque
        imperdiet volutpat. Nam efficitur, metus ut fermentum pellentesque,
        ligula ligula tempor diam, vitae malesuada ex leo in magna. Morbi
        pretium tellus auctor facilisis pretium. Ut vehicula felis sit amet
        accumsan finibus. Aenean laoreet quis est ut convallis. Maecenas
        vulputate sapien ex, in suscipit nibh consequat et. Aenean nec
        condimentum erat. Quisque ac pellentesque libero, sit amet hendrerit
        enim. Quisque venenatis arcu eu elit pharetra egestas. Sed ultrices
        tincidunt ipsum, vel sollicitudin massa laoreet vel. In mollis ipsum id
        venenatis faucibus. Proin tincidunt eu magna ut mattis. Donec lacinia
        lectus sit amet tortor porta condimentum. Curabitur turpis libero,
        ornare et lacus nec, ultrices euismod magna. Donec eu pellentesque mi.
        Maecenas eget volutpat felis, vel vehicula sem. Phasellus ut turpis at
        ante scelerisque condimentum. Donec ullamcorper, odio a congue suscipit,
        nunc mauris hendrerit turpis, non pellentesque mi dui a libero. Nulla
        molestie risus quis mauris sodales congue. Curabitur aliquet, eros
        imperdiet hendrerit euismod, urna lectus faucibus mauris, ut pharetra
        nibh libero sed diam. Integer felis est, interdum sollicitudin nunc et,
        accumsan dapibus ex. Curabitur euismod tortor tincidunt, maximus ipsum
        eu, pulvinar erat. Aenean suscipit vehicula egestas. Curabitur dapibus
        est ut orci fermentum, ut varius lorem dictum. Integer ullamcorper eu
        purus vel ornare. Sed rhoncus arcu vitae tortor rhoncus pharetra.
        Aliquam finibus nunc erat, vel faucibus purus cursus in. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Etiam id sem iaculis, molestie metus in, aliquet diam. Sed
        tincidunt, nibh a ornare tincidunt, dolor sem aliquet urna, scelerisque
        hendrerit turpis mi ac eros. Praesent nec venenatis turpis. Nunc nec
        rutrum elit. Maecenas tempus libero sit amet scelerisque pulvinar.
        Aenean malesuada commodo lobortis. Aenean dui nulla, pharetra eu
        accumsan eget, ornare eget neque. Aliquam magna eros, pharetra nec
        lectus ut, euismod hendrerit est. Sed molestie velit ligula, id
        tincidunt mi vehicula vel. Cras at consequat ex. Nulla eu venenatis
        turpis. Morbi semper ullamcorper ex eu ornare. Vivamus convallis at
        neque vitae posuere. Integer molestie pretium massa, at euismod mi.
        Curabitur urna tellus, consectetur in nulla eget, fermentum tristique
        elit. Integer mollis faucibus ipsum. Mauris eget purus sapien. Cras
        auctor nulla lacus, et faucibus ante scelerisque sit amet. Ut lectus
        magna, sollicitudin non tempus ut, egestas non ante. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Nunc quis blandit neque, vitae placerat mi. Nulla sed velit auctor,
        rhoncus nunc eget, scelerisque odio. Vivamus semper leo placerat nulla
        luctus, ac laoreet libero ornare. Praesent feugiat elit feugiat nunc
        dignissim mattis vitae ut lectus. Sed et orci id turpis egestas
        vulputate sit amet id magna. Fusce in ex posuere mi rutrum vehicula.
        Maecenas dignissim vulputate augue in rutrum. Curabitur mattis, purus
        vitae vulputate euismod, dolor nulla ultrices neque, eu iaculis felis
        erat ut urna. Sed id pellentesque turpis. Etiam fermentum vel justo
        rutrum dictum. Nulla sagittis arcu vel leo porttitor, vitae posuere
        massa feugiat. Maecenas in nisl orci. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Fusce in finibus
        erat. Nunc non consectetur metus, sed tristique nibh. Curabitur feugiat
        tortor sed pulvinar commodo. Aliquam ornare tincidunt urna vel pulvinar.
        Proin viverra sapien eget maximus feugiat. Vestibulum congue ante in
        ante laoreet, dapibus interdum quam semper. Fusce lobortis accumsan nisi
        ac tincidunt. Etiam interdum neque id imperdiet consectetur. Quisque
        suscipit a ipsum sed aliquet. Praesent quis fermentum felis.
        Pellentesque ultrices dapibus lacus, vel ullamcorper justo aliquet et.
        Praesent volutpat sapien elit, a commodo lorem lobortis quis. Donec
        mollis maximus sem consectetur sagittis. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Morbi
        maximus sed lectus quis congue. Phasellus sollicitudin ultrices lectus
        quis auctor. Fusce vestibulum tellus dolor, eu blandit ex vestibulum ut.
        Praesent maximus dapibus felis. Aliquam sodales arcu eget libero semper,
        nec maximus erat faucibus. Proin molestie dolor nec venenatis dignissim.
        Integer non eros luctus, ultrices felis eget, posuere metus.{" "}
      </p>
    </>
  );
};

export default Home;

//
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Link,
//   Outlet,
//   ScrollRestoration,
//   useNavigation,
// } from "react-router-dom";
// import { registerModalToggle } from "../../redux/subscribeSlice";
// import EmailSubscription from "../EmailSubscription";

// function Home() {
//   let navigation = useNavigation();
//   const dispatch = useDispatch();
//   const { showModal } = useSelector((state) => state.subscribe);
//   const handleSubscribe = () => {
//     dispatch(registerModalToggle(true));
//   };

//   let getKey = React.useCallback((location, matches) => {
//     let match = matches.find((m) => m.handle?.scrollMode);
//     if (match?.handle?.scrollMode === "pathname") {
//       return location.pathname;
//     }

//     return location.key;
//   }, []);

//   return (
//     <>
//       <div
//         className="spinner"
//         style={{
//           display: navigation.state === "idle" ? "none" : "block",
//         }}
//       >
//         Navigating...
//       </div>
//       <div className="wrapper">
//         <div className="left">
//           <div className="fixed">
//             <nav>
//               <ul>
//                 <li className="navitem">
//                   <Link to="/">Home</Link>
//                 </li>
//                 <li className="navitem">
//                   <Link to="/restore-by-key" preventScrollReset>
//                     This page restores by location.key (This link will not
//                     scroll to the top)
//                   </Link>
//                 </li>
//                 <li className="navitem">
//                   <Link to="/restore-by-pathname">
//                     {" "}
//                     This page restores by location.pathname
//                   </Link>
//                 </li>
//                 <li className="navitem">
//                   <button onClick={handleSubscribe}>Email Subscribe</button>
//                   <Link to="/subscribe" onClick={handleSubscribe}>
//                     Email Subscribe
//                   </Link>
//                 </li>
//                 <li className="navitem">
//                   <Link to="/strange" preventScrollReset>
//                     Strange Page
//                   </Link>
//                 </li>

//                 <li className="navitem">
//                   <a href="https://www.google.com">
//                     This links to an external site (google)
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>

//         <div className="right">
//           {showModal ? <EmailSubscription /> : null}
//           <Outlet />
//           {/* {showModal ? <EmailSubscription /> : <Outlet />} */}
//         </div>
//       </div>
//       {/*
//         Including this component inside a data router component tree is what
//         enables restoration
//       */}
//       <ScrollRestoration getKey={getKey} />
//     </>
//   );
// }

// export const Introduction = () => {
//   return (
//     <>
//       <h1>Introduction</h1>
//       <p>
//         {" "}
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit
//         ligula vel diam volutpat, sollicitudin ultrices mauris dignissim.
//         Praesent ligula lacus, tincidunt a viverra ut, mattis vel arcu. Maecenas
//         vulputate tristique sem, id consequat nulla mattis a. Praesent finibus
//         viverra laoreet. Ut convallis pulvinar neque. Donec tortor est, rhoncus
//         viverra malesuada non, rhoncus a libero. Vivamus gravida, neque quis
//         interdum venenatis, massa tellus maximus libero, ut facilisis orci elit
//         in mi. Cras cursus nibh et nisi iaculis egestas. Quisque luctus massa ut
//         ex auctor, et feugiat augue ultricies. Interdum et malesuada fames ac
//         ante ipsum primis in faucibus. Pellentesque imperdiet orci nec imperdiet
//         congue. Donec a efficitur erat, nec tristique quam. Pellentesque
//         fringilla velit in ultricies laoreet. Nam in augue mattis, pharetra
//         libero facilisis, lacinia nisl. Integer erat diam, porta vel luctus ac,
//         faucibus faucibus erat. Duis ut diam nec risus pulvinar laoreet quis
//         eget dolor. Sed sapien nulla, placerat eu molestie eget, dictum sit amet
//         quam. Morbi varius dui a erat suscipit, tempus efficitur nulla tempor.
//         In nec vulputate nisl. Etiam pharetra fermentum est eget dapibus. Cras
//         egestas nibh nec enim malesuada, nec egestas odio faucibus. Praesent
//         venenatis interdum aliquet. Phasellus erat turpis, volutpat ac gravida
//         a, vestibulum eu orci. Donec suscipit fringilla diam, quis efficitur
//         velit cursus non. Ut quis facilisis massa. Mauris eleifend ipsum eros,
//         ut auctor massa rutrum in. Aenean fermentum, erat sit amet efficitur
//         tincidunt, tortor est euismod justo, sit amet placerat elit nibh non
//         orci. Praesent in accumsan leo. Curabitur id auctor urna. Ut in ultrices
//         quam, ut iaculis sapien. Nullam et varius dolor. Morbi quis dapibus
//         erat. Donec ut sem vitae nibh venenatis molestie ut id augue. Nam et
//         ligula laoreet, sodales tortor vitae, porta dolor. Etiam lobortis ex
//         tellus, vitae vulputate nibh vehicula id. Class aptent taciti sociosqu
//         ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla
//         nibh sapien, dignissim sit amet mattis a, sollicitudin id dolor. Nunc in
//         neque blandit, luctus ligula quis, ornare velit. Nunc elit sapien,
//         ultrices sed tempor a, efficitur sed lacus. Aliquam cursus ipsum arcu,
//         id fermentum mauris ultrices at. Sed dapibus ipsum quis arcu efficitur
//         placerat. Vestibulum lacinia aliquet metus, vitae efficitur felis
//         tristique ut. Vivamus tempor odio eu est egestas, et dignissim ipsum
//         egestas. Nulla a ipsum malesuada, elementum augue a, porta odio.
//         Phasellus tempus ligula eu urna dapibus pharetra. Phasellus congue nisl
//         quis ex consectetur, id condimentum erat convallis. Nullam non pharetra
//         est, id ornare diam. Nunc nibh nulla, fermentum a quam non, accumsan
//         ullamcorper risus. Praesent nec sagittis quam. Sed aliquet, neque sit
//         amet sodales varius, urna mi dignissim nisl, sed posuere quam lorem sit
//         amet tellus. In hac habitasse platea dictumst. In hac habitasse platea
//         dictumst. Sed neque nulla, dapibus rhoncus lacinia ac, euismod id nibh.
//         Suspendisse ante erat, semper vitae tempor sed, suscipit eget ex. Nam
//         placerat mi nec vestibulum vehicula. Duis eu ligula at metus condimentum
//         tincidunt nec nec diam. Nullam ac tellus iaculis, imperdiet sapien
//         vitae, scelerisque lorem. Morbi posuere arcu ut eros consequat, id
//         rhoncus est luctus. Fusce interdum augue sit amet sollicitudin volutpat.
//         Ut fermentum fermentum fringilla. Phasellus finibus porta orci quis
//         eleifend. Nullam pellentesque iaculis nulla sed varius. Sed pharetra
//         ante ex, eget posuere dui volutpat vulputate. Vivamus at suscipit nisl,
//         eu efficitur nisl. Ut aliquet condimentum dui, id iaculis elit.
//         Suspendisse potenti. Fusce tellus lacus, tincidunt sit amet vulputate
//         sit amet, vehicula sed elit. Sed vitae sem in dolor condimentum dapibus.
//         Nullam convallis mattis lectus, et elementum elit rutrum non. Praesent
//         ac quam sed felis eleifend iaculis. Curabitur id purus eu turpis
//         vestibulum rutrum. Donec dui mi, consequat vitae molestie ac, tincidunt
//         et neque. Interdum et malesuada fames ac ante ipsum primis in faucibus.
//         Phasellus iaculis viverra tellus, a dapibus orci luctus eu. Sed
//         tincidunt id est ac tempor. Mauris varius imperdiet sapien ac
//         pellentesque. Nunc varius ut magna eu vehicula. In consequat accumsan
//         erat id congue. Integer id malesuada orci. Integer vestibulum enim eu
//         diam malesuada, non maximus orci feugiat. Aliquam erat volutpat. Quisque
//         dapibus vitae urna et faucibus. Vestibulum nulla dui, tristique egestas
//         lacus nec, condimentum auctor tortor. Ut interdum feugiat eros non
//         sodales. Fusce quis urna dui. Aenean eu nisl auctor, tristique justo
//         eget, faucibus sem. Nullam nec semper augue. Fusce pulvinar mollis
//         tortor et luctus. Cras dapibus, libero ac ultricies ultrices, orci nunc
//         volutpat neque, et porttitor justo arcu ut quam. Aliquam scelerisque
//         volutpat lacus. Donec sit amet elit consectetur, tempus tortor ac,
//         dictum odio. Aenean luctus ut sem ut vehicula. In malesuada tincidunt
//         velit ac luctus. Praesent fermentum vehicula orci, in suscipit dui
//         porttitor consectetur. Curabitur nunc erat, feugiat vel est eu,
//         fringilla aliquam odio. Pellentesque commodo fermentum vehicula. Nunc
//         eget sollicitudin enim. In varius at libero ut efficitur. Nunc et sem
//         turpis. Donec commodo enim fringilla rhoncus gravida. Pellentesque
//         ornare vitae est sed bibendum. Praesent ligula risus, rutrum non lorem
//         id, ultrices luctus enim. Cras ac sem vulputate, porttitor leo nec,
//         euismod velit. Aliquam bibendum sem diam, vitae tincidunt dui dapibus
//         et. Etiam lacinia mi quis est vehicula laoreet. Etiam scelerisque
//         imperdiet volutpat. Nam efficitur, metus ut fermentum pellentesque,
//         ligula ligula tempor diam, vitae malesuada ex leo in magna. Morbi
//         pretium tellus auctor facilisis pretium. Ut vehicula felis sit amet
//         accumsan finibus. Aenean laoreet quis est ut convallis. Maecenas
//         vulputate sapien ex, in suscipit nibh consequat et. Aenean nec
//         condimentum erat. Quisque ac pellentesque libero, sit amet hendrerit
//         enim. Quisque venenatis arcu eu elit pharetra egestas. Sed ultrices
//         tincidunt ipsum, vel sollicitudin massa laoreet vel. In mollis ipsum id
//         venenatis faucibus. Proin tincidunt eu magna ut mattis. Donec lacinia
//         lectus sit amet tortor porta condimentum. Curabitur turpis libero,
//         ornare et lacus nec, ultrices euismod magna. Donec eu pellentesque mi.
//         Maecenas eget volutpat felis, vel vehicula sem. Phasellus ut turpis at
//         ante scelerisque condimentum. Donec ullamcorper, odio a congue suscipit,
//         nunc mauris hendrerit turpis, non pellentesque mi dui a libero. Nulla
//         molestie risus quis mauris sodales congue. Curabitur aliquet, eros
//         imperdiet hendrerit euismod, urna lectus faucibus mauris, ut pharetra
//         nibh libero sed diam. Integer felis est, interdum sollicitudin nunc et,
//         accumsan dapibus ex. Curabitur euismod tortor tincidunt, maximus ipsum
//         eu, pulvinar erat. Aenean suscipit vehicula egestas. Curabitur dapibus
//         est ut orci fermentum, ut varius lorem dictum. Integer ullamcorper eu
//         purus vel ornare. Sed rhoncus arcu vitae tortor rhoncus pharetra.
//         Aliquam finibus nunc erat, vel faucibus purus cursus in. Pellentesque
//         habitant morbi tristique senectus et netus et malesuada fames ac turpis
//         egestas. Etiam id sem iaculis, molestie metus in, aliquet diam. Sed
//         tincidunt, nibh a ornare tincidunt, dolor sem aliquet urna, scelerisque
//         hendrerit turpis mi ac eros. Praesent nec venenatis turpis. Nunc nec
//         rutrum elit. Maecenas tempus libero sit amet scelerisque pulvinar.
//         Aenean malesuada commodo lobortis. Aenean dui nulla, pharetra eu
//         accumsan eget, ornare eget neque. Aliquam magna eros, pharetra nec
//         lectus ut, euismod hendrerit est. Sed molestie velit ligula, id
//         tincidunt mi vehicula vel. Cras at consequat ex. Nulla eu venenatis
//         turpis. Morbi semper ullamcorper ex eu ornare. Vivamus convallis at
//         neque vitae posuere. Integer molestie pretium massa, at euismod mi.
//         Curabitur urna tellus, consectetur in nulla eget, fermentum tristique
//         elit. Integer mollis faucibus ipsum. Mauris eget purus sapien. Cras
//         auctor nulla lacus, et faucibus ante scelerisque sit amet. Ut lectus
//         magna, sollicitudin non tempus ut, egestas non ante. Vestibulum ante
//         ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
//         Nunc quis blandit neque, vitae placerat mi. Nulla sed velit auctor,
//         rhoncus nunc eget, scelerisque odio. Vivamus semper leo placerat nulla
//         luctus, ac laoreet libero ornare. Praesent feugiat elit feugiat nunc
//         dignissim mattis vitae ut lectus. Sed et orci id turpis egestas
//         vulputate sit amet id magna. Fusce in ex posuere mi rutrum vehicula.
//         Maecenas dignissim vulputate augue in rutrum. Curabitur mattis, purus
//         vitae vulputate euismod, dolor nulla ultrices neque, eu iaculis felis
//         erat ut urna. Sed id pellentesque turpis. Etiam fermentum vel justo
//         rutrum dictum. Nulla sagittis arcu vel leo porttitor, vitae posuere
//         massa feugiat. Maecenas in nisl orci. Orci varius natoque penatibus et
//         magnis dis parturient montes, nascetur ridiculus mus. Fusce in finibus
//         erat. Nunc non consectetur metus, sed tristique nibh. Curabitur feugiat
//         tortor sed pulvinar commodo. Aliquam ornare tincidunt urna vel pulvinar.
//         Proin viverra sapien eget maximus feugiat. Vestibulum congue ante in
//         ante laoreet, dapibus interdum quam semper. Fusce lobortis accumsan nisi
//         ac tincidunt. Etiam interdum neque id imperdiet consectetur. Quisque
//         suscipit a ipsum sed aliquet. Praesent quis fermentum felis.
//         Pellentesque ultrices dapibus lacus, vel ullamcorper justo aliquet et.
//         Praesent volutpat sapien elit, a commodo lorem lobortis quis. Donec
//         mollis maximus sem consectetur sagittis. Pellentesque habitant morbi
//         tristique senectus et netus et malesuada fames ac turpis egestas. Morbi
//         maximus sed lectus quis congue. Phasellus sollicitudin ultrices lectus
//         quis auctor. Fusce vestibulum tellus dolor, eu blandit ex vestibulum ut.
//         Praesent maximus dapibus felis. Aliquam sodales arcu eget libero semper,
//         nec maximus erat faucibus. Proin molestie dolor nec venenatis dignissim.
//         Integer non eros luctus, ultrices felis eget, posuere metus.{" "}
//       </p>
//     </>
//   );
// };

// export default Home;

// // You can provide a custom implementation of what "key" should be used to
// // cache scroll positions for a given location.  Using the location.key will
// // provide standard browser behavior and only restore on back/forward
// // navigations.  Using location.pathname will provide more aggressive
// // restoration and will also restore on normal link navigations to a
// // previously-accessed path.  Or - go nuts and lump many pages into a
// // single key (i.e., anything /wizard/* uses the same key)!
