import Link from "next/link";
import { FiHome, FiStar } from "react-icons/fi";
import Chat from "./Chat";
import Profile from "./Profile";

const Nav = ({ home = false, favourite = false }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-20 items-center justify-around rounded-t-3xl bg-white/80 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-xl">
      <Link
        href="/"
        aria-label="Home"
        className={home ? "text-coral" : "text-neutral-400"}
      >
        <FiHome className="h-6 w-6" />
      </Link>
      <Link
        href="/detailview"
        aria-label="Favourites"
        className={favourite ? "text-coral" : "text-neutral-400"}
      >
        <FiStar className="h-6 w-6" />
      </Link>
      <Chat />
      <Profile />
    </nav>
  );
};

export default Nav;
