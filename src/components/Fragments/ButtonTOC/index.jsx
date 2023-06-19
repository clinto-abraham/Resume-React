/* eslint-disable react/prop-types */
const ButtonTOC = ({ title, id, action }) => {
  return (
    <button id={id} onClick={action}>
      {title}
    </button>
  );
};

export default ButtonTOC;
