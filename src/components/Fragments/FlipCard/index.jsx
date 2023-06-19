/* eslint-disable react/prop-types */
const FlipCard = ({ className }) => {
  return (
    <div id="flip-box">
      <div className={`flip-box-inner_${className}`}>
        <div className="flip-box-front">
          <h2>Front Side</h2>
        </div>
        <div className={`flip-box-back_${className}`}>
          <h2>Back Side</h2>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

// const FlipCardVertical = () => {
//   return (
//     <div id="flip-box_vertical">
//       <div className="flip-box-inner">
//         <div className="flip-box-front">
//           <h2>Front Side</h2>
//         </div>
//         <div className="flip-box-back">
//           <h2>Back Side</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlipCardVertical;
