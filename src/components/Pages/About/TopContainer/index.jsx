// import JavascriptIcon from '@mui/icons-material/Javascript';
// import { Typography } from '@mui/material';
import { Typing } from '../Helpers';

const TopContainer = () => {
    return (
        <div id="top-shell">
            <span className="top-container">
                {/* <img className="first-cloud" src="../Images/cloud.png" alt="clouds" /> */}
                <Typing content='A  Software Developer (.JS )' />
                {/* <h1>A  Javascript (.<JavascriptIcon /> )Developer</h1> */}
                <h6>with stacks: </h6>
                <h6>
                    REACT.js || NEXT.JS || EXPRESS.JS || NODE.JS || SALESFORCE ADMININSTRATOR
                </h6>
                {/* <a target="_blank" rel="noreferrer" href="https://reactjs.org">
                    <img src='../Images/react.svg' className="logo react" alt="React logo" />
                </a>
                <img className="second-cloud" src="../Images/cloud.png" alt="clouds" />
                <img className="mountain" src="../Images/mountain.png" alt="mountain" /> */}
            </span>
        </div>
    );
};

export default TopContainer;


// import { IoIosChatbubbles } from "react-icons/io";