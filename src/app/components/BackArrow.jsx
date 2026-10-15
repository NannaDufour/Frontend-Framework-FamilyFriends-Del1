import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";

const BackArrow = () => {
  return (
    <button>
      <Link href="/">
        <FiChevronLeft className="h-10 w-10 text-text-icon bg-glass rounded-full p-2 " />
      </Link>
    </button>
  );
};

export default BackArrow;
