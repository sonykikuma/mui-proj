import Image from "next/image";
import BasicMenu from "./components/Menu";
import Navbar from "./components/Navbar";
import Top from "./components/Top";
import Main from "./components/Main";
import MediaCard from "./components/MediaCard";
import TitlebarImageList from "./components/TitlebarImageList";

export default function Home() {
  return (
    <>
      {" "}
      <Navbar />
      <Top />
      <MediaCard />
      <TitlebarImageList />
    </>
  );
}
