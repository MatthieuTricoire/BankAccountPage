import Logo from "./Logo";
import User from "./User";

const Header = () => {
  return (
    <header>
      <div className="header row container">
        <Logo />
        <User username="Picsou" />
      </div>
    </header>
  );
};

export default Header;
