import { Link } from "react-router-dom";

export default function IntroHeader() {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src="logo-white.png" alt="Logo" className="header__logo" />
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>

        <Link to="/section-tours" className="btn btn--white btn--animated">
          Discover our tours
        </Link>
      </div>
    </header>
  );
}
