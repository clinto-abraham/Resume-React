import {
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
} from "../utils/commons";

const ErrorDisplay = (error) => {
  let navigate = useNavigate();
  return (
    <div className="card">
      <h1>Oops!</h1>
      <h2>{error.status}</h2>
      <p>{error.statusText}</p>
      {error.data?.message && <p>{error.data.message}</p>}
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
};

function RootBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div className="card">
          <h1>{"This page doesn't exist!"}</h1>
          {ErrorDisplay(error)}
        </div>
      );
    }

    if (error.status === 401) {
      return (
        <div className="card">
          <h1>{"You aren't authorized to see this"}</h1>
          {ErrorDisplay(error)}
        </div>
      );
    }

    if (error.status === 503) {
      return (
        <div className="card">
          <h1>{"Looks like our API is down"}</h1>
          {ErrorDisplay(error)}
        </div>
      );
    }

    if (error.status === 418) {
      return (
        <div className="card">
          <div>🫖</div>
          {ErrorDisplay(error)}
        </div>
      );
    }
  } else {
    return <h1>Something went wrong</h1>;
  }
}

export default RootBoundary;
