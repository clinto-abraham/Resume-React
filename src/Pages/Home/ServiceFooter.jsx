import { Link } from "react-router-dom";

export default function ServiceFooter() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo">
          <source // srcset="logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x"
            media="(max-width: 37.5em)"
          />
          <img // srcset="logo-green-1x.png 1x, img/logo-green-2x.png 2x"
            alt="Full logo"
            src="logo-green-2x.png"
          />
        </picture>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <Link to="/" className="footer__link">
                  Company
                </Link>
              </li>
              <li className="footer__item">
                <Link to="/" className="footer__link">
                  Contact us
                </Link>
              </li>
              <li className="footer__item">
                <Link to="/" className="footer__link">
                  Carrers
                </Link>
              </li>
              <li className="footer__item">
                <Link to="/" className="footer__link">
                  Privacy policy
                </Link>
              </li>
              <li className="footer__item">
                <Link to="/" className="footer__link">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by
            <Link to="/" className="footer__link">
              Jonas Schmedtmann
            </Link>
            for his online course
            <Link to="/" className="footer__link">
              Advanced CSS and Sass
            </Link>
            . Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use
            this webpage for both personal and commercial use, but NOT to claim
            it as your own design. A credit to the original author, Jonas
            Schmedtmann, is of course highly appreciated!
          </p>
        </div>
      </div>
    </footer>
  );
}
