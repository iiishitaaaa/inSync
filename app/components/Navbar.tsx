import react from "react";
import Image from "next/image";
import Logo from "../images/icon.svg";
import GitHub from "../images/github-white.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed flex w-full justify-center border-b-2 border-slate-700">
      <div className="top-0 flex w-full max-w-5xl justify-between px-8 py-4 items-center">
        <div className="flex items-center gap-5">
          <Image src={Logo} width={44} height={44} alt="Logo" />
          <h1 className="text-zinc-200">inSync</h1>
          <hr />
        </div>
        <div>
          <Link href="/">
            <Image src={GitHub} width={44} height={44} alt="GitHub Repo" />
          </Link>
        </div>
      </div>
    </header>
  );
}
