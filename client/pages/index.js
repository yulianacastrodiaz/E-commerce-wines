import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../actions";
import Cards from "../components/Cards";
import Filters from "../components/Filters";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <main>
      <Navbar />
      <Search />
      <Filters />
      <Cards />
    </main>
  );
}
