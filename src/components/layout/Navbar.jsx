import { Link } from "react-router";
import Style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <section className="row">
        <img src="" alt="" className={Style.logo} />
        <input
          type="text"
          name="searchbar"
          id="searchbar"
          placeholder="What are you looking for?"
          value={""}
          className={Style.searchBar}
        />
        <label htmlFor="searchbar">
          <Link to="#">
            <img
              src="./svgIcons/search.svg"
              alt=""
              className={Style.SearchIcon}
            />
          </Link>
        </label>
        <div className="row">
          <div>
            <img
              src="./svgIcons/user.svg"
              alt="an icon of a person"
              className={Style.iconSize}
            />
            <p className={Style.navText}>Log in</p>
          </div>
          <div>
            <img
              src="./svgIcons/userPlus.svg"
              alt="an icon of a person with a pluss sign"
              className={Style.iconSize}
            />
            <p className={Style.navText}>Create Account</p>
          </div>
          <Link to="#">
            <img
              src="./svgIcons/cart.svg"
              alt="an icon of a shopping cart"
              className={Style.iconSize}
            />
            <p className={Style.navText}>Cart</p>
          </Link>
        </div>
      </section>
      <Link to="/">Home</Link>
    </nav>
  );
}
