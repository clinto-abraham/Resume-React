import { useRouteError, useNavigate } from "../utils/commons";

export default function RouterBoundary() {
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
