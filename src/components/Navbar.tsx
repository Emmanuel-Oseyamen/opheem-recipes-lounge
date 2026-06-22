"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <h1 className="text-xl font-bold text-white">
          Opheem
        </h1>

        <nav className="hidden gap-8 text-white md:flex">
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="#contact"
          className="rounded-lg bg-[#D4A373] px-5 py-2 font-semibold text-black"
        >
          Reserve
        </a>

      </div>
    </header>
  );
}