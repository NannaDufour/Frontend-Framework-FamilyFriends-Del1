import { Suspense } from "react";
import SearchSection from "./components/searchSection";
import Nav from "./components/Nav";
import BreedList from "./components/BreedList";

export default function ListView({ searchParams }) {
  return (
    <main className="pb-28">
      <SearchSection />
      <Suspense fallback={<div className="mt-6">Loading...</div>}>
        <BreedList searchParams={searchParams} />
      </Suspense>
      <Nav home />
    </main>
  );
}
