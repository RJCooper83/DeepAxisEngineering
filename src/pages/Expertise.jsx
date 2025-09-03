export default function Expertise() {
  return (
    <section className="py-16 lg:py-24 bg-slate-900">
      <div className="rounded-2xl border border-slate-800 bg-black/30 p-6 text-brand-gray">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Controller & CAM Expertise
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Controls */}
          <div className="rounded-2xl border border-slate-700 p-6 bg-slate-800">
            <h3 className="font-semibold text-white">Controls</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              <li><strong>Okuma OSP</strong> – Deep hands-on knowledge</li>
              <li><strong>Fanuc</strong> – Standard across many machines</li>
              <li><strong>Haas</strong> – Simple, reliable, operator-friendly</li>
              <li><strong>Siemens</strong> – Advanced multi-axis features</li>
              <li><strong>Heidenhain</strong> – Precision milling focus</li>
              <li><strong>Mazak</strong> – Mazatrol conversational & multi-axis</li>
              <li><strong>Mitsubishi</strong> – Fanuc-like with unique quirks</li>
            </ul>
          </div>

          {/* CAM */}
          <div className="rounded-2xl border border-slate-700 p-6 bg-slate-800">
            <h3 className="font-semibold text-white">CAM</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              <li><strong>GibbsCAM</strong> – Gold standard for Mill/Turn & Swiss</li>
              <li><strong>Fusion 360</strong> – Simple, versatile</li>
              <li><strong>Esprit</strong> – Swiss & Mill/Turn, steep learning curve</li>
              <li><strong>MasterCAM</strong> – Industry standard for milling</li>
            </ul>
          </div>
        </div>

        {/* Image row */}
        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <figure className="rounded-xl border border-slate-700 overflow-hidden">
              <div className="relative h-40 md:h-48">
                <img
                  src="/img/expertise/Okuma.jpg"
                  alt="Okuma OSP control panel"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <figcaption className="px-3 py-2 text-xs text-slate-400">Okuma OSP</figcaption>
            </figure>

            {/* Card 2 */}
            <figure className="rounded-xl border border-slate-700 overflow-hidden">
              <div className="relative h-40 md:h-48">
                <img
                  src="/img/expertise/CNCMill.jpg"
                  alt="5-axis milling in process"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <figcaption className="px-3 py-2 text-xs text-slate-400">5-Axis Machining</figcaption>
            </figure>

            {/* Card 3 */}
            <figure className="rounded-xl border border-slate-700 overflow-hidden">
              <div className="relative h-40 md:h-48">
                <img
                  src="/img/expertise/Gibbs.png"
                  alt="GibbsCAM programming screen"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <figcaption className="px-3 py-2 text-xs text-slate-400">GibbsCAM</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
