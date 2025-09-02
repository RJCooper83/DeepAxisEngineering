import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom"; // <-- add this

/** ----------------- Selected Results (yours) ----------------- */
const cases = [
  {
    img: "/img/cases/medical-part.jpg",
    h: "Medical stainless op-time",
    d: "Op-time cut by 27% via adaptive toolpaths + better chip thinning; zero burrs.",
  },
  {
    img: "/img/cases/titanium-part.jpg",
    h: "Ti-6Al-4V chatter kill",
    d: "Stability map + variable flute end mills eliminated harmonics; finish within spec.",
  },
  {
    img: "/img/cases/post.png",
    h: "Post overhaul",
    d: "Safe retracts, proper M-code map, subspindle sync. Operators stopped hand-editing.",
  },
  {
    img: "/img/cases/process.jpg",
    h: "Process Review",
    d: "This part was 5ops Lathe/Mill redone to 1op on a Mill/Turn",
  },
  {
    img: "/img/cases/swiss.jpg",
    h: "Swiss Machining",
    d: "Long parts, Tiny Parts, Segment Threading, and Difficult Materials",
  },
  {
    img: "/img/cases/Probe.jpg",
    h: "Probing and Checking in the machine",
    d: "Operators can easily see if they need to rerun something before pulling the part",
  },
];

export default function Work() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const active = cases[index];

  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % cases.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + cases.length) % cases.length);
    }
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <section className="py-16 lg:py-24">
      {/* -------- Selected Results -------- */}
      <div className="rounded-2xl border border-slate-800 bg-black/30 p-6 text-slate-200">
        <h2 className="text-3xl font-bold tracking-tight">Selected Results</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <div
              key={`case-${i}`}
              className="rounded-2xl border border-slate-200/20 bg-slate-800 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="text-sm font-semibold text-white">{c.h}</div>
                <div className="text-sm text-slate-300 mt-2">{c.d}</div>
              </div>
              <img
                src={c.img}
                alt={c.h}
                className="h-24 w-auto mx-auto mt-4 object-contain rounded-md cursor-zoom-in"
                loading="lazy"
                decoding="async"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* -------- Link to Gallery -------- */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          Gallery of Machined Parts
        </h3>
        <p className="text-slate-300 mb-6">
          Explore more examples of our machining work, from Swiss to 5-Axis and
          everything in between.
        </p>
        <Link
          to="/gallery"
          className="inline-block px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow hover:bg-slate-200 transition"
        >
          View Full Gallery
        </Link>
      </div>

      {/* -------- Lightbox -------- */}
      {open && active && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.img}
              alt={active.h}
              className="max-h-[85vh] max-w-screen-lg w-auto h-auto rounded-xl shadow-2xl"
            />
            <div className="mt-3 text-center text-slate-200">
              <div className="font-semibold">{active.h}</div>
              <div className="text-sm text-slate-300">{active.d}</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-3 -right-3 rounded-full bg-white/90 text-slate-900 px-3 py-1 text-sm font-medium shadow"
            >
              ✕
            </button>
            <button
              onClick={() => setIndex((i) => (i - 1 + cases.length) % cases.length)}
              className="absolute left-[-3rem] top-1/2 -translate-y-1/2 hidden md:block bg-white/90 text-slate-900 px-3 py-2 rounded-full"
            >
              ‹
            </button>
            <button
              onClick={() => setIndex((i) => (i + 1) % cases.length)}
              className="absolute right-[-3rem] top-1/2 -translate-y-1/2 hidden md:block bg-white/90 text-slate-900 px-3 py-2 rounded-full"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
