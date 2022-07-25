import "./NavBar.css";
import CarWidget from "../CarWidget/CarWidget";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCategories } from "../db/data";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);


  return (
    <nav className="NavBar container-fluid">
      <div className="logoContainer">
        <Link to="/"> <img
          src={"../bxl-steam.svg"}
          alt="IconStore"
          width="75"
          className="d-inline-flex"
        /></Link>
      </div>
      <div className="nav-menus">
        <button className="btn">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noreferrer"
          >
            RickRoll
          </a>
        </button>
        <button className="btn">
          <a
            href="https://www.linkedin.com/in/lucasf32zs/"
            target="_blank"
            rel="noreferrer"
          >
            Contacto
          </a>
        </button>
        <button className="btn">
          <Link to="/detail/:productId">Buscar Productos</Link>
        </button>

        <button className="btn">
          {categories.map((cat) => (
            <NavLink key={cat.id} to={`/category/${cat.id}`}>
              {cat.description}
            </NavLink>
          ))}
        </button>
      </div>
      <div className="CarWidget">
        <CarWidget />
      </div>
    </nav>
  );
};

export default NavBar;