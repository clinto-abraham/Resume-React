import { Link, useLocation } from "../../../utils/commons";
import { IMAGES } from "../../../utils/IMAGES";

function Gallery() {
  let location = useLocation();
  console.log(location, "location");
  return (
    <div style={{ padding: "0 24px" }}>
      <h2>Gallery</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "24px",
        }}
      >
        {IMAGES.map((image) => (
          <Link
            key={image.id}
            to={`/img/${image.id}`}
            // This is the trick! Set the `backgroundLocation` in location state
            // so that when we open the modal we still see the current page in
            // the background.
            state={{ backgroundLocation: location }}
          >
            <img
              width={200}
              height={200}
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                height: "auto",
                borderRadius: "8px",
              }}
              src={image.src}
              alt={image.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
