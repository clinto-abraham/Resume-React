import { Link } from "react-router-dom";

export default function ServiceSubscriptions() {
  return (
    <section className="section-tours" id="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most popular Services</h2>
      </div>

      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  The Frontend Development
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>3 years support</li>
                  <li>Up to 30 designs</li>
                  <li>3 environment</li>
                  <li>Sleep tight until all work is finished</li>
                  <li>Ratings: 4/5</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$297</p>
                </div>
                <Link
                  to="/popup"
                  //   href="/popup"
                  className="btn btn--white"
                >
                  Add to cart
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2">
                  The Backend Development
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>5 years support</li>
                  <li>Up to 3 designs patterns</li>
                  <li>2 environment</li>
                  <li>Postman testing</li>
                  <li>Sleep tight until all work is finished</li>
                  <li>Ratings: 4.5/5</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$497</p>
                </div>
                <Link // to="/popup"
                  className="btn btn--white"
                >
                  Add to cart
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--3">
                  The Cloud Support
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>Salesforce Marketing Cloud</li>
                  <li>Salesforce Administrator</li>
                  <li>MongoDB NoSQL</li>
                  <li>AWS SQL deployment</li>
                  <li>Lambda functions</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-3">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$897</p>
                </div>
                <Link // to="/popup"
                  className="btn btn--white"
                >
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge">
        <Link to="/" className="btn btn--green">
          Discover all tours
        </Link>
      </div>
    </section>
  );
}
