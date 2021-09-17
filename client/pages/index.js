import Head from "next/head";
import Cards from "../components/Cards";
import Filters from "../components/Filters";
import Navbar from "../components/Navbar";
import Creation from "../components/Creation"
import Search from "../components/Search";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Search />
      <Filters />
      <Cards />
      <Creation />
    </main>
  );
}
