import { Link } from "react-router-dom";

export default function ServiceTestimony() {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source
            src="https://public-personal-data.s3.ap-south-1.amazonaws.com/progamming+files/video.mp4"
            type="video/mp4"
          />
          <source
            src="https://public-personal-data.s3.ap-south-1.amazonaws.com/progamming+files/video.webm"
            type="video/webm"
          />
          Your browser is not supported!
        </video>
      </div>

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img
              src="https://public-personal-data.s3.ap-south-1.amazonaws.com/progamming+files/nat-8.jpg"
              alt="Person on a tour"
              className="story__img"
            />
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              I had the best week ever with my family
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
              aspernatur libero repellat quis consequatur ducimus quam nisi
              exercitationem omnis earum qui.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img
              src="nat-9.jpg"
              alt="Person on a tour"
              className="story__img"
            />
            <figcaption className="story__caption">Jack Wilson</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              WOW! My life is completely different now
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
              aspernatur libero repellat quis consequatur ducimus quam nisi
              exercitationem omnis earum qui.
            </p>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge">
        <Link to="/" className="btn-text">
          Read all stories &rarr;
        </Link>
      </div>
    </section>
  );
}
