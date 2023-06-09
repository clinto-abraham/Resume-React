import * as React from "react";
import {
  Routes,
  Route,
  Outlet,
  Link,
  useLocation,
  useNavigate,
  useParams,
  Navigate,
} from "react-router-dom";

import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

let IMAGES = [
  {
    id: 0,
    title: "Enjoying a cup of coffee",
    src: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMzM2Mzg4Ng&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: 1,
    title: "Magical winter sunrise",
    src: "https://images.unsplash.com/photo-1618824834718-92f8469a4dd1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMzM2NDAzMw&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: 2,
    title: "Dalmatian and pumpkins",
    src: "https://images.unsplash.com/photo-1633289944756-6295be214e16?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMzM2NDA3Nw&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: 3,
    title: "Fall into Autumn 🍂🐶",
    src: "https://images.unsplash.com/photo-1633172905740-2eb6730c95b4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMzM2NDEwMg&ixlib=rb-1.2.1&q=80&w=400",
  },
];

function getImageById(id) {
  return IMAGES.find((image) => image.id === id);
}

export default function App() {
  let location = useLocation();
  console.log(location, "location at app");

  // The `backgroundLocation` state is the location that we were at when one of
  // the gallery links was clicked. If it's there, use it as the location for
  // the <Routes> so we show the gallery in the background, behind the modal.
  let state = location.state;

  return (
    <div>
      <h1>Modal Example</h1>

      <p>
        {`This is an example of how to create a contextual modal navigation with
        React Router where the navigation path the user takes determines if the
        page is rendered in the modal or not (popularized by pinterest,
        instagram, and others in the 2010s). This type of modal is typically
        used as a kind of "detail" view to focus on a particular object in a
        collection (like a pinterest board) while not taking you completely out
        of context of the parent page. But, when the same URL is visited
        directly (rather than from the collection page) it renders as it's own
        full page instead of in a modal.`}
      </p>

      <p>
        {`In this example, notice how the URL updates when the modal opens (if you
        are viewing the example in StackBlitz you may need to open in a new
        browser window). Even though the URL is updated to the specific item in
        the modal, the background page is still showing behind it.`}
      </p>

      <p>
        {`Next, copy and paste the URL to a new browser tab and notice that it
        shows that specific item not in a modal, but directly on the page. This
        is the view that someone would see if they clicked on a link that you
        sent them when you had the modal open. They don't have the context you
        did when you opened the modal, so they don't see it in the context of
        the background page.`}
      </p>

      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="/img/:id" element={<ImageView />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>

      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<PublicPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/protected"
              element={
                <RequireAuth>
                  <ProtectedPage />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>

      {/* Show the modal when a `backgroundLocation` is set */}
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/img/:id" element={<Modal />} />
        </Routes>
      )}
    </div>
  );
}

function Layout() {
  return (
    <div>
      <AuthStatus />
      <hr />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>

      <h3>Featured Images</h3>
      <ul>
        <li>
          <Link to="/img/1">Image 1</Link>
        </li>
        <li>
          <Link to="/img/2">Image 2</Link>
        </li>
      </ul>
    </div>
  );
}

function Gallery() {
  let location = useLocation();
  console.log(location, "location");
  return (
    <div style={{ padding: "0 24px" }}>
      <h2>Gallery</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "24px",
        }}
      >
        {IMAGES.map((image) => (
          <Link
            key={image.id}
            to={`/img/${image.id}`}
            // This is the trick! Set the `backgroundLocation` in location state
            // so that when we open the modal we still see the current page in
            // the background.
            state={{ backgroundLocation: location }}
          >
            <img
              width={200}
              height={200}
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                height: "auto",
                borderRadius: "8px",
              }}
              src={image.src}
              alt={image.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

function ImageView() {
  let { id } = useParams();
  let image = getImageById(Number(id));

  if (!image) return <div>Image not found</div>;

  return (
    <div>
      <h1>{image.title}</h1>
      <img width={400} height={400} src={image.src} alt="" />
    </div>
  );
}

function Modal() {
  let navigate = useNavigate();
  let { id } = useParams();
  let image = getImageById(Number(id));
  let buttonRef = React.useRef(null);

  function onDismiss() {
    navigate(-1);
  }

  if (!image) return null;

  return (
    <Dialog
      aria-labelledby="label"
      onDismiss={onDismiss}
      initialFocusRef={buttonRef}
    >
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          padding: "8px 8px",
        }}
      >
        <h1 id="label" style={{ margin: 0 }}>
          {image.title}
        </h1>
        <img
          style={{
            margin: "16px 0",
            borderRadius: "8px",
            width: "100%",
            height: "auto",
          }}
          width={400}
          height={400}
          src={image.src}
          alt=""
        />
        <button
          style={{ display: "block" }}
          ref={buttonRef}
          onClick={onDismiss}
        >
          Close X
        </button>
      </div>
    </Dialog>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

// export default function App() {
//   return (
//     <AuthProvider>
//       <h1>Auth Example</h1>

//       <p>
//         This example demonstrates a simple login flow with three pages: a public
//         page, a protected page, and a login page. In order to see the protected
//         page, you must first login. Pretty standard stuff.
//       </p>

//       <p>
//         First, visit the public page. Then, visit the protected page. You're not
//         yet logged in, so you are redirected to the login page. After you login,
//         you are redirected back to the protected page.
//       </p>

//       <p>
//         Notice the URL change each time. If you click the back button at this
//         point, would you expect to go back to the login page? No! You're already
//         logged in. Try it out, and you'll see you go back to the page you
//         visited just *before* logging in, the public page.
//       </p>

//     </AuthProvider>
//   );
// }

// function Layout() {
//   return (
//     <div>

//       <Outlet />
//     </div>
//   );
// }

let AuthContext = React.createContext(null);

const fakeAuthProvider = {
  isAuthenticated: false,
  signin(callback) {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signout(callback) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

function AuthProvider({ children }) {
  let [user, setUser] = React.useState(null);

  let signin = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return React.useContext(AuthContext);
}

function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth?.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {auth.user}!{" "}
      <button
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </p>
  );
}

function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/";

  function handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username");

    auth.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  }

  return (
    <div>
      <p>You must log in to view the page at {from}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>{" "}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}

// // import "./styles/App.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home, { Introduction } from "./pages/Home";
// import EmailSubscription from "./pages/EmailSubscription";
// import LongPage from "./pages/LongPage";
// import getArrayLoader from "./api/getArrayLoader";
// import RouterErrorPage from "./error/routerHandler";
// import NotFoundPage from "./pages/NotFoundPage";

// let router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <RouterErrorPage />,
//     children: [
//       {
//         index: true,
//         loader: getArrayLoader,
//         element: <Introduction />,
//         handle: { scrollMode: "pathname" },
//       },
//       {
//         path: "restore-by-key",
//         loader: getArrayLoader,
//         element: <LongPage />,
//       },
//       {
//         path: "restore-by-pathname",
//         loader: getArrayLoader,
//         element: <LongPage />,
//         handle: { scrollMode: "pathname" },
//       },
//       {
//         path: "subscribe",
//         loader: getArrayLoader,
//         element: <EmailSubscription />,
//       },
//       {
//         path: "popup",
//         loader: getArrayLoader,
//         handle: { scrollMode: "pathname" },
//         // element: <EmailSubscription />,
//       },
//     ],
//   },
//   {
//     path: "*",
//     element: <NotFoundPage />,
//   },
// ]);

// if (import.meta.hot) {
//   import.meta.hot.dispose(() => router.dispose());
// }

// export default function App() {
//   return (
//     <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>} />
//   );
// }

// function App() {
//   return (

//     <div>
//       <a href='https://public-personal-data.s3.ap-south-1.amazonaws.com/progamming+files/removedBackground.png'>
//         <img src='https://public-personal-data.s3.ap-south-1.amazonaws.com/progamming+files/removedBackground.png' className="logo" alt="Clinto logo" />
//       </a>
//     </div>
//   )
// }

// export default App

// import Navbar from './components/Navbar';
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'

// import './styles/navbar.css'
// import TopNavbar from './components/TopNavbar'
// import TopContainer from './components/TopContainer'
// // import TabSwitchBar from './components/TabSwitchBar'
// import WordOfGod from './components/WordOfGod'
// import FooterNavbar from './components/FooterNavbar'
// // import Animation from './components/Animation';
// // import TopNavbar from './components/TopNavbar'

{
  /* <Animation /> */
}
// <Navbar />
// <TopNavbar />
//   {/* <Typing content='I am Clinto Abraham' /> */}
// < TopContainer />
//     <WordOfGod color='black' size='2rem 1rem' />
//     <FooterNavbar />

//       {/* <h2 className='black'>I am Clinto Abraham </h2> */}
// {/* <TabSwitchBar /> */ }
// {/* <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p> */}

// {/* <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
// {/* <a href="https://react.dev">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a> */}
