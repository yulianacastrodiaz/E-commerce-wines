import Head from "next/head";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Creation from "../components/Creation"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Cards />
      <Creation />
    </main>
  );
}
