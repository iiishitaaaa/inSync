import Image from "next/image";
import Clock from "./components/Clock";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between  bg-gray-900">
        <div className="z-10 max-w-5xl w-full min-h-screen items-center justify-center font-mono text-sm flex">
          <Clock />
        </div>
        <Footer />
      </main>
    </>
  );
}
