import { PropTypes } from "../../utils/exports";

export default function Typing({ content }) {
  return (
    <div className="container">
      <h1 className="typed">{content}</h1>
    </div>
  );
}

Typing.propTypes = {
  content: PropTypes.string.isRequired,
}