import { useEffect, useState } from "../../../utils/commons";

export default function IntroHeader() {
  const [name, setName] = useState("header-90");

  const handleScroll = () => {
    // console.log(window.scrollY, "window.scrollY", name);
    if (window.scrollY > 50 || document.documentElement.scrollTop > 50) {
      // document.getElementById("header").style.fontSize = "30px";
      setName("header-30");
    } else {
      // document.getElementById("header").style.fontSize = "90px";
      setName("header-90");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header
        // id="header"
        className="header"
      >
        {/* <div id="header">
          <h1 id={name}>I am Clinto</h1>
        </div> */}
        <div>
          <div id={name} className="header__logo-box">
            <img
              src="https://public-personal-data.s3.ap-south-1.amazonaws.com/progamming+files/logo-white.png"
              alt="Logo"
              className="header__logo"
            />
          </div>

          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">
                Top Of Cliff Developer!
              </span>
              <span className="heading-primary--sub">dive into pure codes</span>
            </h1>

            <button
              onClick={handleScroll}
              className="btn btn--white btn--animated"
            >
              Dive in
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
