import { useRouteError, useNavigate } from "react-router-dom";

export default function RouterErrorPage() {
  const error = useRouteError();
  let navigate = useNavigate();
  return (
    <div id="router-error-page">
      <h6>Oops!</h6>
      <p>Sorry, an unexpected error has occurred.</p>
      <h1>
        <i>{error.statusText || error.message}</i>
      </h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}
