export default function Process() {
  const steps = [
    {n:1, t:"Discovery", d:"Quick call + part samples, goals, machines, constraints."},
    {n:2, t:"Plan", d:"Quote with scope, deliverables, timeline, and acceptance tests."},
    {n:3, t:"Execute", d:"Programming, posts, setup, prove-out. Clear updates and docs."},
    {n:4, t:"Handoff", d:"Runbook + training + follow-up to lock in gains."},
  ]
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight">How We Work</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {steps.map((p, i) => (
            <div key={i} className="rounded-2xl bg-white border border-slate-200 p-6">
              <div className="h-8 w-8 rounded-full bg-slate-900 text-white grid place-items-center font-semibold">{p.n}</div>
              <div className="mt-3 font-semibold">{p.t}</div>
              <div className="text-sm text-slate-600">{p.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
