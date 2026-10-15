import { Geist } from "next/font/google";

const geist = Geist({ subsets: ["latin"] });

const Logo = () => {
  return (
    <h1 className={`font-bold ${geist.variable} text-xl`}>FamilyFriends</h1>
  );
};

export default Logo;

// Noter fra undervisning: En funktion som er et komponent i React. class er et reserveret keyword i JavaScript. Når man skal lave et komponnt er det denne syntaks.//
