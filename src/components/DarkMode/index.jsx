import { useDispatch, useSelector } from "react-redux";
import { registerDarkModeToggle } from "../../redux/navbarSlice";
// MdDarkMode
import { MdDarkMode } from "react-icons/Md";

const DarkMode = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.navbar);
  const handleToggleDarkMode = () => {
    dispatch(registerDarkModeToggle(!darkMode));
  };
  return (
    <div>
      <button className="btn" onClick={handleToggleDarkMode}>
        <MdDarkMode className="btn__icon-dark" />
      </button>
    </div>
  );
};

export default DarkMode;
