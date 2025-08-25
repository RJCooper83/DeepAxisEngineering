export default function Process() {
  const steps = [
    { n: 1, t: "Discovery", d: "Quick call + part samples, goals, machines, constraints." },
    { n: 2, t: "Plan", d: "Quote with scope, deliverables, timeline, and acceptance tests." },
    { n: 3, t: "Execute", d: "Programming, posts, setup, prove-out. Clear updates and docs." },
    { n: 4, t: "Handoff", d: "Runbook + training + follow-up to lock in gains." },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-200">
        <h2 className="text-3xl font-bold tracking-tight">How We Work</h2>

        {/* Steps 1–4 */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((p) => (
            <div key={p.n} className="rounded-2xl bg-slate-800 border border-slate-700 p-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="shrink-0 h-8 w-8 rounded-full bg-slate-700 text-white grid place-items-center text-sm font-semibold">
                  {p.n}
                </div>
                <h3 className="text-lg font-semibold text-white">{p.t}</h3>
              </div>
              <p className="text-sm text-slate-300">{p.d}</p>
            </div>
          ))}
        </div>

        {/* Step 5 full-width */}
        <div className="mt-6 rounded-2xl bg-slate-800 border border-slate-700 p-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="shrink-0 h-8 w-8 rounded-full bg-slate-700 text-white grid place-items-center text-sm font-semibold">
              5
            </div>
            <h3 className="text-lg font-semibold text-white">Continuous Improvement</h3>
          </div>
          <p className="text-sm text-slate-300">
            Ongoing support, optimization, and new strategies to keep you ahead.
          </p>
        </div>
      </div>
    </section>
  );
}
