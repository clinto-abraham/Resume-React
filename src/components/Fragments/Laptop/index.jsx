/* eslint-disable react/prop-types */
const Laptop = ({ link }) => {
  return (
    <div className="laptop">
      <div className="content">
        <iframe src={link} id="iframe" />
      </div>
    </div>
  );
};

export default Laptop;
