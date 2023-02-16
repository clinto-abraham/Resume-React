import JavascriptIcon from '@mui/icons-material/Javascript';
import { Typography } from '@mui/material';
import reactLogo from '../../assets/react.svg'

const TopContainer = () => {
    return (
        <div id="top-shell">
            <span className="top-container">
                <img className="first-cloud" src="../Images/cloud.png" alt="clouds" />
                <h1>A  Javascript (.<JavascriptIcon /> )Developer</h1>
                <h2>with stacks: </h2>
                <Typography variant="h6">
                    REACT.js || NEXT.JS || EXPRESS.JS || NODE.JS || SALESFORCE ADMININSTRATOR
                </Typography>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <img className="second-cloud" src="../Images/cloud.png" alt="clouds" />
                <img className="mountain" src="../Images/mountain.png" alt="mountain" />
            </span>
        </div>
    );
};

export default TopContainer;


// import { IoIosChatbubbles } from "react-icons/io";