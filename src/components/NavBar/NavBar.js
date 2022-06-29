import "./NavBar.css";

const NavBar = () => {
  
  return (
    <nav className="NavBar container-fluid">
      <div className="logoContainer">
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
          <a
            href="https://github.com/Kleizardx/"
            target="_blank"
            rel="noreferrer"
          >
            Productos
          </a>
        </button>
        <button className="btn">
          <a
            href="https://www.youtube.com/watch?v=DWcJFNfaw9c"
            target="_blank"
            rel="noreferrer"
          >
            Categorias
          </a>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
