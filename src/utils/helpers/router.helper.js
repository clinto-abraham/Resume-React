export const routerTOC = (location, navigate) => {
  switch (location.pathname) {
    case "/":
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      break;
    case "/gallery":
      window.scrollTo({
        top: 1040,
        behavior: "smooth",
      });
      break;

    case "/about":
      window.scrollTo({
        top: 700,
        behavior: "smooth",
      });
      break;

    case "/service":
      window.scrollTo({
        top: 2240,
        behavior: "smooth",
      });
      break;

    case "/testimony":
      window.scrollTo({
        top: 3240,
        behavior: "smooth",
      });
      break;

    case "/connect":
      window.scrollTo({
        top: 4700,
        behavior: "smooth",
      });
      break;

    default:
      navigate("/not-found");
      window.scrollTo({
        top: 500,
        behavior: "smooth",
      });
      break;
  }
};
