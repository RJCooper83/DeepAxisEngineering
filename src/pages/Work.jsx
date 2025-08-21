const cases = [
  {h:"Medical stainless op-time", d:"Op-time cut by 27% via adaptive toolpaths + better chip thinning; zero burrs."},
  {h:"Ti-6Al-4V chatter kill", d:"Stability map + variable flute end mills eliminated harmonics; finish within spec."},
  {h:"OSP post overhaul", d:"Safe retracts, proper M-code map, subspindle sync. Operators stopped hand-editing."},
]
export default function Work() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight">Selected Results</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {cases.map((c,i)=> (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold">{c.h}</div>
              <div className="text-sm text-slate-600 mt-2">{c.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
