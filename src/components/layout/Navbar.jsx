import { Link } from "react-router";
import Style from "./Navbar.module.css";
import { useState } from "react";

export default function Navbar() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    console.log(e);
    console.log(`Searching for: ${search}`);
  };

  return (
    <nav className={`${Style.navbar} column`}>
      <section className="row">
        <img src="" alt="" className={Style.logo} />
        <input
          type="text"
          name="searchbar"
          id="searchbar"
          placeholder="What are you looking for?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={Style.searchBar}
        />

        <img
          onClick={handleSearch}
          src="/svgIcons/search.svg"
          alt="search icon"
          className={Style.SearchIcon}
        />
        <div className="row">
          <Link to="#">
            <img
              src="/svgIcons/user.svg"
              alt="an icon of a person"
              className={Style.iconSize}
            />
            <p className={Style.navText}>Log in</p>
          </Link>
          <Link to="#">
            <img
              src="/svgIcons/userPlus.svg"
              alt="an icon of a person with a pluss sign"
              className={Style.iconSize}
            />
            <p className={Style.navText}>Create Account</p>
          </Link>
          <Link to="#">
            <img
              src="/svgIcons/cart.svg"
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
