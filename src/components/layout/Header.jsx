import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <h1 className="Header__logo">
        <img src="./public/yellow-diamond.png" alt="" />
        <a href="#">Portfolio</a>
      </h1>
      <div className="Header__copyright">Fitz Angelo&nbsp;2023&nbsp;&copy;</div>
    </header>
  );
}

export default Header;
