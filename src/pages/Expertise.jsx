export default function Expertise() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight">Controller & CAM Expertise</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
            <h3 className="font-semibold">Controls</h3>
            <p className="text-sm text-slate-600 mt-2">
              Okuma OSP, Fanuc, Haas, Siemens, Heidenhain, Mazak, DMG Mori. Subspindle handoff, C/Y/B axes, live tool limits, safe start/restart, probing cycles.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
            <h3 className="font-semibold">CAM</h3>
            <p className="text-sm text-slate-600 mt-2">
              GibbsCAM and Fusion 360 with tuned posts, tool libraries, and templates for stainless, titanium, and aluminum. Emphasis on chip control and tool life.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
