import { useDispatch, useSelector } from "react-redux";
import { registerDarkModeToggle } from "../../redux/navbarSlice";
// MdDarkMode
import { MdDarkMode } from "react-icons/Md";
import { BsFillSunFill } from "react-icons/Bs";
import ButtonTOC from "../Buttons/ButtonTOC";

const DarkMode = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.navbar);
  const handleToggleDarkMode = () => {
    dispatch(registerDarkModeToggle(!darkMode));
  };
  return (
    <section className="grid">
      <section className="row">
        <div className="col-3-of-4">
          <h2>Jesus Christ Blood Matters</h2>
        </div>
        <div className="col-1-of-4">
          <ButtonTOC
            title={
              darkMode ? (
                <BsFillSunFill className="btn__icon-dark" />
              ) : (
                <MdDarkMode className="btn__icon-dark" />
              )
            }
            id="btn"
            action={handleToggleDarkMode}
          />
        </div>
      </section>
    </section>
  );
};

export default DarkMode;
