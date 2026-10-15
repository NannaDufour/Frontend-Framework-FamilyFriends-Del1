import Logo from "./Logo";
import Notification from "./Notification";

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between mb-6">
      <Logo />
      <Notification hasNew />
    </header>
  );
};

export default Header;
