export default function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Let’s get your parts running right</h2>
        <p className="mt-2 text-slate-600">
          Tell me about your machines, parts, and bottlenecks. I’ll suggest a clear, low‑risk starting point.
        </p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/success"
          className="mt-8 grid gap-3 text-left"
        >
          {/* Netlify needs this to map the submission to the 'contact' form */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot (hidden) */}
          <p className="hidden">
            <label>
              Don’t fill this: <input name="bot-field" />
            </label>
          </p>

          <input name="name" className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Name" required />
          <input name="email" type="email" className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Email" required />
          <textarea name="message" className="rounded-xl border border-slate-300 px-4 py-3 min-h-[120px]" placeholder="What are you working on?" required />

          {/* reCAPTCHA placeholder (Netlify injects the widget here on the live site) */}
          <div data-netlify-recaptcha="true" className="my-2" />

          <button type="submit" className="rounded-2xl bg-slate-900 text-white px-5 py-3 font-medium hover:bg-slate-800">
            Request consult
          </button>

          <p className="text-xs text-slate-500">
            Prefer email? <a className="underline" href="mailto:hello@deepaxis.engineering">hello@deepaxis.engineering</a>
          </p>
        </form>
      </div>
    </section>
  );
}
