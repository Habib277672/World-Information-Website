import { NavLink } from "react-router-dom";
import { FaArrowRightFromBracket } from "react-icons/fa6";

export const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid gird-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">Explore the World, Our at a Time.</h1>
          <p className="paragraph">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>

          <NavLink to="/country" className="hero-btn">
            <button className="btn btn-darken btn-inline bg-white-box">
              Start Exploring {""}
              <span className="hero-icon">
                <FaArrowRightFromBracket />
              </span>
            </button>
          </NavLink>
        </div>
        <div className="hero-image">
          <img
            src="/Images/world.png"
            alt="Hero-Image"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
};
