export default function About() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight">About Deep Axis Engineering</h1>

        <p className="mt-4 text-slate-700">
          I’m Rob, CNC programmer and consultant. Deep Axis Engineering was started to help job shops and
          manufacturers cut cycle time, hit tighter tolerances, and free up operators. You can have an expert programmer only when you need one.
        </p>

        <p className="mt-4 text-slate-700">
          With experience across <span className="font-semibold">Fanuc, Mitsubishi, Okuma OSP, Haas, Siemens, Heidenhain, and Mazak</span> controls,
          plus GibbsCAM, Esprit, and Fusion&nbsp;360, I bridge the gap between CAD/CAM and the shop floor.
        </p>

        <h2 className="mt-10 text-xl font-semibold">Focus areas</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-1">
          <li>First-article turnkey setups</li>
          <li>Post and macro tuning</li>
          <li>Cycle-time reduction strategies</li>
          <li>Operator training & mentoring</li>
        </ul>

                {/* Image */}
        <div className="flex justify-center">
          <img
            src="/RobertCooper.png"
            alt="Rob Cooper"
            className="rounded-2xl shadow-lg max-w-xs w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
