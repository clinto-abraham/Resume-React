/* eslint-disable react/prop-types */
import { React } from "../utils/commons";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log("Error at error boundary", error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="card">
          <h1> Something went wrong</h1>
          <p>{`Error caught at this component: ${this.props.name}`}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
