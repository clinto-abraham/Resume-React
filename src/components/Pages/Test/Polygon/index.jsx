import { useEffect, useRef } from "react";

const Polygon = () => {
  const creativePolygon = useRef("creative");
  // Get the id of the <path> element and the length of <path>
  console.log(
    creativePolygon,
    "creativePolygon",
    creativePolygon?.current,
    "creativePolygon?.current",
    window.document,
    "window.document",
    document,
    "document"
  );
  // let creative = window.getElementById("creative");

  // let length = creative.getTotalLength();

  // // The start position of the drawing
  // creative.style.strokeDasharray = length;

  // // Hide the creative by offsetting dash. Remove this line to show the creative before scroll draw
  // creative.style.strokeDashoffset = length;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    const scrollPercent =
      (window.body.scrollTop + window.documentElement.scrollTop) /
      (window.documentElement.scrollHeight -
        window.documentElement.clientHeight);

    const draw = length * scrollPercent;
    console.log(draw);

    // Reverse the drawing (when scrolling upwards)
    // creative.style.strokeDashoffset = length - draw;
  }
  return (
    <div>
      <svg id="growingPolygon">
        <polygon
          id="creative"
          ref={creativePolygon}
          stroke="green"
          strokeWidth="6"
          transform="translate(100,0)"
          points="50,0 21,90 98,35 2,35 79,90"
          className="Star"
        />
        Sorry, your browser does not support inline SVG.
      </svg>
    </div>
  );
};

export default Polygon;

export const PathPolygon = () => {
  // Get the id of the <path> element and the length of <path>
  var creative = window.getElementById("creative");
  var length = creative.getTotalLength();

  // The start position of the drawing
  creative.style.strokeDasharray = length;

  // Hide the creative by offsetting dash. Remove this line to show the creative before scroll draw
  creative.style.strokeDashoffset = length;

  // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
  window.addEventListener("scroll", handleScroll);

  function handleScroll() {
    var scrollPercent =
      (window.body.scrollTop + window.documentElement.scrollTop) /
      (window.documentElement.scrollHeight -
        window.documentElement.clientHeight);

    var draw = length * scrollPercent;

    // Reverse the drawing (when scrolling upwards)
    creative.style.strokeDashoffset = length - draw;
  }
  return (
    <div>
      <svg id="growingPolygon">
        <path
          id="creative"
          stroke="red"
          strokeWidth="6"
          d="M100,200 C100,100 250,100 250,200 S400,300 400,200"
          className="CurvedHemispherePath"
        />
        <path
          id="creative"
          fill="none"
          stroke="red"
          strokeWidth="10"
          d="M150 0 L75 200 L225 200 Z"
          className="triangle"
        />
        Sorry, your browser does not support inline SVG.
      </svg>
    </div>
  );
};

export const LogoPolygon = () => {
  // function handleScroll() {
  //   var scrollPercent =
  //     (window.body.scrollTop + window.documentElement.scrollTop) /
  //     (window.documentElement.scrollHeight -
  //       window.documentElement.clientHeight);

  //   var draw = length * scrollPercent;

  //   // Reverse the drawing (when scrolling upwards)
  //   creative.style.strokeDashoffset = length - draw;
  // }
  return (
    <div>
      <svg id="growingPolygon">
        <path
          id="creative"
          stroke="green"
          strokeWidth="6"
          d="M100,200 C100,100 250,100 250,200 S400,300 400,200"
          className="CurvedHemispherePath"
        />
        Sorry, your browser does not support inline SVG.
      </svg>
    </div>
  );
};

export const Circle = () => {
  // Get the id of the <path> element and the length of <path>
  var creative = window.getElementById("creative");
  var length = creative.getTotalLength();

  // The start position of the drawing
  creative.style.strokeDasharray = length;

  // Hide the creative by offsetting dash. Remove this line to show the creative before scroll draw
  creative.style.strokeDashoffset = length;

  // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
  window.addEventListener("scroll", handleScroll);

  function handleScroll() {
    var scrollPercent =
      (window.body.scrollTop + window.documentElement.scrollTop) /
      (window.documentElement.scrollHeight -
        window.documentElement.clientHeight);

    var draw = length * scrollPercent;

    // Reverse the drawing (when scrolling upwards)
    creative.style.strokeDashoffset = length - draw;
  }
  return (
    <div>
      <svg id="growingPolygon">
        <circle
          id="creative"
          cx="350"
          stroke="red"
          fill="none"
          strokeWidth="16"
          cy="350"
          r="100"
          className="Circle"
        />
      </svg>
    </div>
  );
};
