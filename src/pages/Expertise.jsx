export default function Expertise() {
  return (
    <section className="py-16 lg:py-24 bg-slate-900">
      <div className="rounded-2xl border border-slate-800 bg-black/30 p-6 text-brand-gray">
        <h2 className="text-3xl font-bold tracking-tight">Controller & CAM Expertise</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 bg-slate-800">
            <h3 className="font-semibold">Controls</h3>
            <p className="text-sm text-white">
              Okuma OSP, Fanuc, Haas, Siemens, Heidenhain, Mazak, Mitsubishi. Subspindle handoff, C/Y/B axes, live tool limits, safe start/restart, probing cycles. 
              5 Axis Mill turns, Swiss, large, medium, small, and tiny parts. I can get them all done.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 bg-slate-800">
            <h3 className="font-semibold">CAM</h3>
            <p className="text-sm text-white">
              GibbsCAM, Fusion 360, Esprit, MasterCAM with tuned posts, tool libraries, and templates for stainless, titanium, aluminum, amoung others. Emphasis on chip control and tool life.
              I can also write custom macros for ease of switching tools and parts.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
