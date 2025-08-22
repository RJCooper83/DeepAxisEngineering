const cases = [
  {
    img: "/img/cases/medical-part.jpg",
    h: "Medical stainless op-time",
    d: "Op-time cut by 27% via adaptive toolpaths + better chip thinning; zero burrs."
  },
  {
    img: "/img/cases/titanium-part.jpg",
    h: "Ti-6Al-4V chatter kill",
    d: "Stability map + variable flute end mills eliminated harmonics; finish within spec."
  },
  {
    img: "/img/cases/osp-post.png", 
    h: "OSP post overhaul",
    d: "Safe retracts, proper M-code map, subspindle sync. Operators stopped hand-editing."
  },
];

export default function Work() {
  return (
    <section className="py-16 lg:py-24">
      <div className="rounded-2xl border border-slate-800 bg-black/30 p-6 text-slate-200">
        <h2 className="text-3xl font-bold tracking-tight">Selected Results</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-slate-800 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="text-sm font-semibold text-white">{c.h}</div>
                <div className="text-sm text-slate-300 mt-2">{c.d}</div>
              </div>
              <img
                src={c.img}
                alt={c.h}
                className="h-24 w-auto mx-auto mt-4 object-contain rounded-md"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
