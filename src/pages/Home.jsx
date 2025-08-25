import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-100 via-white to-slate-100" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] text-red-600">
              CNC Consulting, Programming, & 
              <span className="block text-red-600">Turnkey Setups that Ship Parts</span>
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Deep Axis Engineering helps job shops and manufacturers hit cycle‑time, finish, and tolerance targets without burning operator hours. I can come on‑site or work remote.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-2xl bg-slate-800 text-white px-5 py-3 font-medium hover:bg-slate-800">
                Book a free 30‑min consult
              </Link>
              <Link to="/services" className="rounded-2xl border border-slate-300 px-5 py-3 font-medium hover:bg-red-700">
                See services
              </Link>
            </div>
            <div className="mt-6 text-xs text-slate-500">
              Fanuc • Okuma OSP • Haas • Siemens • Heidenhain • Mazak • Mitsubishi • GibbsCAM • Fusion 360 • Esprit
            </div>
          </div>

          {/* Stats + Pricing Models */}
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-slate-800 shadow-xl border border-slate-200 p-6">
              {/* Top stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { k: "Cycle Time", v: "−26%" },
                  { k: "Scrap", v: "−31%" },
                  { k: "Uptime", v: "+22%" },
                ].map((m, i) => (
                  <div key={i} className="rounded-2xl border border-slate-200 p-4 text-white">
                    <div className="text-2xl font-bold">{m.v}</div>
                    <div className="text-xs uppercase tracking-wide text-white/70">{m.k}</div>
                  </div>
                ))}
              </div>

              {/* Pricing models */}
              <div className="mt-6 rounded-2xl bg-slate-900 text-white p-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="rounded-xl border border-white/10 p-3">
                    <div className="text-sm font-semibold">Custom Quotes</div>
                    <div className="mt-1 text-xs text-white/70">
                      Project‑based pricing tailored to scope & deliverables.
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 p-3">
                    <div className="text-sm font-semibold"> Rates</div>
                    <div className="mt-1 text-xs text-white/70">
                      Onsite or Remote - Programming, setups, consulting, and training billed hourly.
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 p-3">
                    <div className="text-sm font-semibold">Retainer Support</div>
                    <div className="mt-1 text-xs text-white/70">
                      Ongoing optimization, troubleshooting, & programming each month.
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <Link
                    to="/contact"
                    className="inline-block text-xs font-medium underline underline-offset-4 text-white/90 hover:text-white"
                  >
                    Get a quick estimate →
                  </Link>
                   <img
                    src="/img/CNCCutter.jpg"
                    alt="Continuous Improvement"
                    className="rounded-lg w-full max-h-40 object-contain mt-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / BADGES */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-nowrap justify-center items-center gap-4 overflow-x-auto py-1">
            {["GibbsCAM","Fusion 360","Esprit","Okuma OSP","Fanuc","Haas","Mitsubishi"].map((b,i)=> (
              <div
                key={i}
                className="shrink-0 rounded-xl border border-slate-200 bg-slate-800 px-4 py-2 text-center text-xs text-white shadow-sm"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
