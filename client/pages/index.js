import Head from "next/head";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Cards />
    </main>
  );
}
