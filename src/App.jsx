export default function DeepAxisEngineering() {
  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-slate-900 text-white grid place-items-center font-bold">Δ</div>
            <span className="font-semibold tracking-tight">Deep Axis Engineering</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-slate-600">Services</a>
            <a href="#process" className="hover:text-slate-600">Process</a>
            <a href="#expertise" className="hover:text-slate-600">Expertise</a>
            <a href="#work" className="hover:text-slate-600">Work</a>
            <a href="#contact" className="rounded-xl bg-slate-900 text-white px-4 py-2 hover:bg-slate-800">Free Consult</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
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
              <a href="#contact" className="rounded-2xl bg-slate-900 text-white px-5 py-3 font-medium hover:bg-slate-800">Book a free 30‑min consult</a>
              <a href="#services" className="rounded-2xl border border-slate-300 px-5 py-3 font-medium hover:bg-slate-100">See services</a>
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
                <div className="text-xs text-white/70">Tool‑centerline arcs • Safe retracts • Subspindle handoff • Live‑tool limits</div>
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

      {/* SERVICES */}
      <section id="services" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Services</h2>
          <p className="mt-2 text-slate-600">Start with what moves the needle. Fixed‑bid or hourly, on‑site or remote.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title:"CNC Programming",
                body:"2.5D to full 5‑axis for mill/turn, Swiss, and VMC/HMC. Material focus: stainless, Ti, Al, Ni alloys.",
                bullets:["Cycle‑time reduction","Toolpath strategy","Workholding selection"],
              },
              {
                title:"Turnkey Setups",
                body:"From print to first‑article. Setup sheets, probing, offsets, program prove‑out, operator handoff.",
                bullets:["Process planning","Fixture design","In‑process inspection"],
              },
              {
                title:"Post & Macro Tuning",
                body:"Clean posts for GibbsCAM/Fusion. Safe retracts, M‑code mapping, dynamic limits, probing macros.",
                bullets:["OSP/Fanuc/Haas","Subspindle/ATC logic","Error handling"],
              },
              {
                title:"Shop Optimization",
                body:"Cut the waste. Feeds & speeds, tool libraries, tool life tracking, standard ops, DFM feedback.",
                bullets:["Libraries/templates","Kitting & staging","QA loop"],
              },
              {
                title:"On‑Call Troubleshooting",
                body:"Stuck on a feature? Chatter? TIR? Chip weld? Get fast, actionable fixes via video or on‑site.",
                bullets:["Root‑cause first","Documented fix","Follow‑up check"],
              },
              {
                title:"Training & Upskilling",
                body:"Level up programmers and operators with targeted workshops tailored to your parts and machines.",
                bullets:["CAM best practices","Controller tips","Metrology basics"],
              },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.body}</p>
                <ul className="mt-4 space-y-1 text-sm list-disc pl-5 text-slate-700">
                  {s.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">How We Work</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              {n:1, t:"Discovery", d:"Quick call + part samples, goals, machines, constraints."},
              {n:2, t:"Plan", d:"Quote with scope, deliverables, timeline, and acceptance tests."},
              {n:3, t:"Execute", d:"Programming, posts, setup, prove‑out. Clear updates and docs."},
              {n:4, t:"Handoff", d:"Runbook + training + follow‑up to lock in gains."},
            ].map((p, i) => (
              <div key={i} className="rounded-2xl bg-white border border-slate-200 p-6">
                <div className="h-8 w-8 rounded-full bg-slate-900 text-white grid place-items-center font-semibold">{p.n}</div>
                <div className="mt-3 font-semibold">{p.t}</div>
                <div className="text-sm text-slate-600">{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Controller & CAM Expertise</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
              <h3 className="font-semibold">Controls</h3>
              <p className="text-sm text-slate-600 mt-2">Okuma OSP, Fanuc, Haas, Siemens, Heidenhain, Mazak, DMG Mori. Subspindle handoff, C/Y/B axes, live tool limits, safe start/restart, probing cycles.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
              <h3 className="font-semibold">CAM</h3>
              <p className="text-sm text-slate-600 mt-2">GibbsCAM and Fusion 360 with tuned posts, tool libraries, and templates for stainless, titanium, and aluminum. Emphasis on chip control and tool life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WORK / CASES (placeholders) */}
      <section id="work" className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Selected Results</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[ 
              {h:"Medical stainless op‑time", d:"Op‑time cut by 27% via adaptive toolpaths + better chip thinning; zero burrs."},
              {h:"Ti‑6Al‑4V chatter kill", d:"Stability map + variable flute end mills eliminated harmonics; finish within spec."},
              {h:"OSP post overhaul", d:"Safe retracts, proper M‑code map, subspindle sync. Operators stopped hand‑editing."},
            ].map((c,i)=> (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-semibold">{c.h}</div>
                <div className="text-sm text-slate-600 mt-2">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Let’s get your parts running right</h2>
          <p className="mt-2 text-slate-600">Tell me about your machines, parts, and bottlenecks. I’ll suggest a clear, low‑risk starting point.</p>
          <form className="mt-8 grid gap-3 text-left">
            <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Name" />
            <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Email" />
            <textarea className="rounded-xl border border-slate-300 px-4 py-3 min-h-[120px]" placeholder="What are you working on? Machines, materials, problems…" />
            <button type="button" className="rounded-2xl bg-slate-900 text-white px-5 py-3 font-medium hover:bg-slate-800">Request consult</button>
            <p className="text-xs text-slate-500">Prefer email? <a className="underline" href="mailto:hello@deepaxis.engineering">hello@deepaxis.engineering</a></p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div>© {new Date().getFullYear()} Deep Axis Engineering</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#" className="hover:text-slate-700">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
