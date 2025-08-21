export default function Contact() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Let’s get your parts running right</h2>
        <p className="mt-2 text-slate-600">
          Tell me about your machines, parts, and bottlenecks. I’ll suggest a clear, low-risk starting point.
        </p>
        <form name="contact" method="POST" data-netlify="true" className="mt-8 grid gap-3 text-left">
          <input type="hidden" name="form-name" value="contact" />
          <input className="rounded-xl border border-slate-300 px-4 py-3" name="name" placeholder="Name" required />
          <input className="rounded-xl border border-slate-300 px-4 py-3" name="email" type="email" placeholder="Email" required />
          <textarea className="rounded-xl border border-slate-300 px-4 py-3 min-h-[120px]" name="message" placeholder="What are you working on? Machines, materials, problems…" required />
          <button className="rounded-2xl bg-slate-900 text-white px-5 py-3 font-medium hover:bg-slate-800">Request consult</button>
          <p className="text-xs text-slate-500">Prefer email? <a className="underline" href="mailto:rcooper@gmail.com">rcooper@gmail</a></p>
        </form>
      </div>
    </section>
  )
}
