export default function Services() {
  const services = [
    {
      title:"CNC Programming",
      body:"2.5D to full 5-axis for mill/turn, Swiss, and VMC/HMC. Material focus: stainless, Ti, Al, Ni alloys.",
      bullets:["Cycle-time reduction","Toolpath strategy","Workholding selection"],
    },
    {
      title:"Turnkey Setups",
      body:"From print to first-article. Setup sheets, probing, offsets, program prove-out, operator handoff.",
      bullets:["Process planning","Fixture design","In-process inspection"],
    },
    {
      title:"Post & Macro Tuning",
      body:"Clean posts for GibbsCAM/Fusion. Safe retracts, M-code mapping, dynamic limits, probing macros.",
      bullets:["OSP/Fanuc/Haas","Subspindle/ATC logic","Error handling"],
    },
    {
      title:"Shop Optimization",
      body:"Cut the waste. Feeds & speeds, tool libraries, tool life tracking, standard ops, DFM feedback.",
      bullets:["Libraries/templates","Kitting & staging","QA loop"],
    },
    {
      title:"On-Call Troubleshooting",
      body:"Stuck on a feature? Chatter? TIR? Chip weld? Get fast, actionable fixes via video or on-site.",
      bullets:["Root-cause first","Documented fix","Follow-up check"],
    },
    {
      title:"Training & Upskilling",
      body:"Level up programmers and operators with targeted workshops tailored to your parts and machines.",
      bullets:["CAM best practices","Controller tips","Metrology basics"],
    },
  ]
  return (
    <section className="py-16 lg:py-24 bg-grey">
      <div className="rounded-2xl border border-slate-800 bg-black/30 p-6 text-brand-black">
        <h2 className="text-3xl font-bold tracking-tight">Services</h2>
        <p className="mt-2 text-white">Start with what moves the needle. Fixed-bid or hourly, on-site or remote.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-slate-800 p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white">{s.body}</p>
              <ul className="mt-4 space-y-1 text-sm list-disc pl-5 text-white">
                {s.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
