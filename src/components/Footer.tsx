export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black py-16 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <h3 className="text-2xl font-bold">
          Opheem Recipes & Lounge
        </h3>

        <p className="mt-4 max-w-xl text-slate-400">
          Premium dining, exceptional cuisine, handcrafted drinks,
          and a welcoming lounge experience in the heart of Obiaruku.
        </p>

        <div className="mt-8">
          <h4 className="text-sm font-semibold uppercase tracking-[3px] text-[#D4A373]">
            Visit Us
          </h4>

          <p className="mt-3 text-slate-300">
            Along New Sapele/Agbor Road,
            Obinomba, Obiaruku 322111,
            Delta State, Nigeria.
          </p>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Opheem Recipes & Lounge. All rights reserved.
          </p>

          <p className="mt-2 text-sm text-slate-600">
            Website concept and design by Osas Web Studio.
          </p>
        </div>

      </div>
    </footer>
  );
}