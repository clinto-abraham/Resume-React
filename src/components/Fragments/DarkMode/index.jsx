import { useDispatch, useSelector } from "react-redux";
import { registerDarkModeToggle } from "../../../redux/navbarSlice";
// DarkModeIcon
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ButtonTOC from "../ButtonTOC";

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
                <LightModeIcon className="btn__icon-dark" />
              ) : (
                <DarkModeIcon className="btn__icon-dark" />
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
