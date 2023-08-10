import Image from "next/image";
import Clock from "./components/Clock";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#060B19]">
      <div className="z-10 max-w-5xl w-full min-h-screen items-center justify-center font-mono text-sm lg:flex">
        <Clock />
      </div>
    </main>
  );
}
