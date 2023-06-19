/* eslint-disable react/prop-types */
import React from "react";

export default class Modal extends React.PureComponent {
  componentDidUpdate() {
    if (this.props.modalOpen) {
      console.log("Open!", this.props.modalOpen);
      document.body.classList.add("drawer-open");
    } else {
      console.log("Closed!", this.props.modalOpen);
      document.body.classList.remove("drawer-open");
    }
  }

  render() {
    return (
      <div className="mymodal" id={this.props.modalName}>
        <div
          onClick={this.props.toggleModal}
          className={`mymodal-overlay ${this.props.modalOpen && "active"}`}
        ></div>
        <div
          className={`mymodal-content d-flex flex-column ${
            this.props.modalOpen && "active"
          }`}
        >
          <header className="p-2 border-bottom d-flex">
            <span
              className="material-icons clickable"
              onClick={this.props.toggleModal}
            >
              close
            </span>
            <div className="flex-grow-1 ml-2">{this.props.modalTitle}</div>
          </header>
          <div className="p-2 flex-grow-1">{this.props.children}</div>
          <footer className="p-2 border-top">&copy; ChidoPrime 2021</footer>
        </div>
      </div>
    );
  }
}

// import { Dialog } from "@reach/dialog";
// import React from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import getImageById from "../../../utils/IMAGES";

// function Modal() {
//   let navigate = useNavigate();
//   let { id } = useParams();
//   let image = getImageById(Number(id));
//   let buttonRef = React.useRef(null);

//   function onDismiss() {
//     navigate(-1);
//   }

//   if (!image) return null;

//   return (
//     <Dialog
//       aria-labelledby="label"
//       onDismiss={onDismiss}
//       initialFocusRef={buttonRef}
//       style={{
//         height: "100%",
//         width: "auto",
//         margin: 0,
//         padding: 0,
//         display: "grid",
//         justifyContent: "center",
//       }}
//     >
//       <div
//         style={{
//           display: "grid",
//           justifyContent: "center",
//           padding: "8px 8px",
//         }}
//       >
//         <h1
//           id="label"
//           style={{ margin: 0, display: "grid", justifyContent: "center" }}
//         >
//           {image.title}
//         </h1>
//         <img
//           style={{
//             margin: "16px 0",
//             borderRadius: "8px",
//             width: "100%",
//             height: "auto",
//           }}
//           width={400}
//           height={400}
//           src={image.src}
//           alt=""
//         />
//         <button
//           style={{ display: "block" }}
//           ref={buttonRef}
//           onClick={onDismiss}
//         >
//           Close X
//         </button>
//       </div>
//     </Dialog>
//   );
// }

// export default Modal;
