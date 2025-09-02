import { useEffect, useState, useMemo } from "react";

const GALLERY_TAGS = ["All", "Lathe","Mill", "Mill/Turn", "5-Axis", "Swiss", "Aluminum", "Stainless", "Titanium","Plastic"];

const gallery = [
  { img: "/img/gallery/MB1.png", h: "Muzzle Brake", d: "Tight concentricity, Engraving, Angled Teeth 17-4", tags: ["Mill/Turn", "Stainless"] },
  { img: "/img/gallery/Acrylic.png", h: "Acrylic Demo Part", d: "Demo Part to show inter-workings", tags: ["Lathe", "Plastic"] },
  { img: "/img/gallery/Connector.png", h: "Firearm Connecter", d: "Acme ID Thread Double Turret Machine", tags: ["Mill/Turn", "Stainless"] },
  { img: "/img/gallery/Swiss4.png", h: "Aerspace Tooling", d: "Swiss Part out of A2", tags: ["Swiss"] },
  { img: "/img/gallery/Flange.png", h: "Custom Automotive Part", d: "Intake part made from 6061", tags: ["Lathe","Aluminum"] },
  { img: "/img/gallery/Diffuser.jpg", h: "Firearm Part", d: "Diffuser 17-4", tags: ["Mill/Turn","Stainless"] },
  { img: "/img/gallery/Paint.jpg", h: "Automotive Paint Component", d: "Plastic with very tight GDT", tags: ["Mill/Turn","Plastic"] },
  { img: "/img/gallery/Extractor.jpg", h: "Tank Turrent Part", d: "Made from Hardened Forging Defnse part with very tight GDT", tags: ["Mill/Turn"] },
  { img: "/img/gallery/Segthrd.jpg", h: "Segment Thread Macro", d: "These were a test for my macro 8-32 10-32 3/8-24", tags: ["Swiss"] },
  { img: "/img/gallery/Plate.png", h: "Plate for Automotive Manufacturing", d: "Milled Aluminum Plate", tags: ["Mill","Aluminum"] },
  { img: "/img/gallery/Manual.jpg", h: "Manual Machining", d: "Hard Turn a relief for easy press fit", tags: ["Lathe"] },
  { img: "/img/gallery/Knurl.jpg", h: "Kurling", d: "Knurling a medical part with lower turret as a tailstock", tags: ["Lathe"] },
  { img: "/img/gallery/Pinchturn.jpg", h: "Pinch-Turning", d: "Pinch-Turning 13-8 Stainless Steal to save time", tags: ["Lathe"] },
  { img: "/img/gallery/Tailstock.jpg", h: "Tailstock", d: "Using the Sub Spindle with live center as a tailstock on a long part", tags: ["Lathe"] },
  { img: "/img/gallery/Fiveaxis.jpg", h: "5 Axis Mill/Turn", d: "Angled drill in plastic part was 7 ops reduced to 1", tags: ["5-Axis","Mill/Turn"] },
  { img: "/img/gallery/Canoe.jpg", h: "5 Axis Mill/Turn Prototype", d: "Aluminum Prototype Part for automotive industry", tags: ["5-Axis","Mill/Turn"] },
  { img: "/img/gallery/Mount.png", h: "Mill/Turn Production", d: "17-4 Part where 10,000 Pieces were required", tags: ["Mill/Turn", "Stainless"] },
  { img: "/img/gallery/Swiss5.png", h: "Brass Component", d: "5-Axis Swiss Part: 2 angled holes 1 with tap", tags: ["5-Axis","Swiss"] }
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [filter, setFilter] = useState("All");
  const [show, setShow] = useState(9);
  const [touchX, setTouchX] = useState(null);

  const filtered = useMemo(
    () => (filter === "All" ? gallery : gallery.filter((g) => g.tags.includes(filter))),
    [filter]
  );

  // Ensure index is in-bounds whenever the filtered list changes
  useEffect(() => {
    if (index >= filtered.length) setIndex(0);
  }, [filtered.length, index]);

  const active = filtered[index];

  // Keyboard nav + scroll lock while lightbox is open
  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % filtered.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + filtered.length) % filtered.length);
    }
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, filtered.length]);

  return (
    <section className="py-16 lg:py-24">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-200">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h2 className="text-3xl font-bold tracking-tight">Gallery of Machined Parts</h2>
          <div className="flex flex-wrap gap-2">
            {GALLERY_TAGS.map((t) => (
              <button
                key={t}
                onClick={() => {
                  setFilter(t);
                  setShow(6);   // reset pagination
                  setIndex(0);  // reset selection
                }}
                className={
                  filter === t
                    ? "px-3 py-1 rounded-xl bg-white text-slate-900 text-sm font-semibold"
                    : "px-3 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-sm"
                }
                aria-pressed={filter === t}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Grid or empty state */}
        {filtered.length === 0 ? (
          <div className="mt-10 text-center text-slate-400">
            No items yet for <span className="font-semibold text-slate-200">{filter}</span>. Check back soon.
          </div>
        ) : (
          <>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.slice(0, show).map((g, i) => (
                <div key={`${g.h}-${i}`} className="group rounded-2xl overflow-hidden border border-slate-200/20 bg-slate-800">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-black/30">
                    <img
                      src={g.img}
                      alt={g.h}
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full h-full object-cover cursor-zoom-in transition-transform duration-300 group-hover:scale-[1.03]"
                      onClick={() => {
                        setIndex(i);
                        setOpen(true);
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-sm font-semibold text-white">{g.h}</div>
                    <div className="text-xs text-slate-300 mt-1">{g.d}</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {g.tags.map((tag) => (
                        <span key={tag} className="text-[10px] uppercase tracking-wide bg-slate-700/70 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {show < filtered.length && (
              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => setShow((n) => Math.min(n + 6, filtered.length))}
                  className="px-4 py-2 rounded-xl bg-white text-slate-900 text-sm font-semibold hover:opacity-90"
                >
                  Load more
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Lightbox */}
      {open && active && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active?.h || "Image preview"}
          onClick={() => setOpen(false)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX == null) return;
              const dx = e.changedTouches[0].clientX - touchX;
              if (dx > 40) setIndex((i) => (i - 1 + filtered.length) % filtered.length);
              if (dx < -40) setIndex((i) => (i + 1) % filtered.length);
              setTouchX(null);
            }}
          >
            <img
              src={active.img}
              alt={active.h}
              className="max-h-[85vh] max-w-screen-lg rounded-xl shadow-2xl"
              decoding="async"
            />
            <div className="mt-3 text-center text-slate-200">
              <div className="font-semibold">{active.h}</div>
              <div className="text-sm text-slate-300">{active.d}</div>
              <div className="mt-1 text-xs text-slate-400">
                {active.tags.map((t) => (
                  <span key={t} className="mx-1">#{t}</span>
                ))}
              </div>
            </div>

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-3 -right-3 rounded-full bg-white/90 text-slate-900 px-3 py-1 text-sm font-medium shadow"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Prev/Next desktop */}
            {filtered.length > 1 && (
              <>
                <button
                  onClick={() => setIndex((i) => (i - 1 + filtered.length) % filtered.length)}
                  className="absolute left-[-3rem] top-1/2 -translate-y-1/2 hidden md:block bg-white/90 text-slate-900 px-3 py-2 rounded-full"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  onClick={() => setIndex((i) => (i + 1) % filtered.length)}
                  className="absolute right-[-3rem] top-1/2 -translate-y-1/2 hidden md:block bg-white/90 text-slate-900 px-3 py-2 rounded-full"
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}

            {/* Prev/Next mobile */}
            {filtered.length > 1 && (
              <div className="mt-4 flex justify-center gap-3 md:hidden">
                <button
                  onClick={() => setIndex((i) => (i - 1 + filtered.length) % filtered.length)}
                  className="px-4 py-2 bg-white text-slate-900 rounded-xl"
                  aria-label="Previous image (mobile)"
                >
                  Prev
                </button>
                <button
                  onClick={() => setIndex((i) => (i + 1) % filtered.length)}
                  className="px-4 py-2 bg-white text-slate-900 rounded-xl"
                  aria-label="Next image (mobile)"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
