import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-100 via-white to-slate-100" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              CNC Consulting, Programming, &
              <span className="block text-slate-900">Turnkey Setups that Ship Parts</span>
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Deep Axis Engineering helps job shops and manufacturers hit cycle-time, finish, and tolerance targets—without burning operator hours. On-site or remote.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-2xl bg-slate-900 text-white px-5 py-3 font-medium hover:bg-slate-800">Book a free 30-min consult</Link>
              <Link to="/services" className="rounded-2xl border border-slate-300 px-5 py-3 font-medium hover:bg-slate-100">See services</Link>
            </div>
            <div className="mt-6 text-xs text-slate-500">Fanuc • Okuma OSP • Haas • Siemens • Heidenhain • Mazak • DMG Mori • GibbsCAM • Fusion 360</div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-white shadow-xl border border-slate-200 p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  {k:"Cycle Time", v:"−22%"},
                  {k:"Scrap", v:"−60%"},
                  {k:"Uptime", v:"+18%"},
                ].map((m, i) => (
                  <div key={i} className="rounded-2xl border border-slate-200 p-4">
                    <div className="text-2xl font-bold">{m.v}</div>
                    <div className="text-xs uppercase tracking-wide text-slate-500">{m.k}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-slate-900 text-white p-4">
                <div className="text-sm">Post Optimization</div>
                <div className="text-xs text-white/70">Tool-centerline arcs • Safe retracts • Subspindle handoff • Live-tool limits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / BADGES */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 place-items-center text-xs text-slate-500">
            {["GibbsCAM","Fusion 360","Okuma OSP","Fanuc","Haas","DMG Mori"].map((b,i)=> (
              <div key={i} className="w-full rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm">{b}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
