export default function About() {
  return (
    
    <section className="py-16 lg:py-24 bg-gray">
            
                {/* Image */}
        <div className="flex justify-center">
          <img
            src="/RobertCooper.png"
            alt="Rob Cooper"
            className="rounded-2xl shadow-lg max-w-xs w-full object-cover"
          />
        </div>

      <div className="rounded-2xl border border-slate-800 bg-black/30 p-6 text-red-600">
        <h1 className="text-3xl font-bold tracking-tight">About Deep Axis Engineering</h1>

    <div className="mt-4 text-gray-700 dark:text-gray-200 space-y-4">
  <p>
    I’m Rob, CNC programmer and consultant, and the founder of Deep Axis
    Engineering. I help job shops and manufacturers cut cycle times, hit
    tighter tolerances, and free up operators. Think of it as having an
    expert programmer but only when you need one.
  </p>

  <p>
    I’ve been in CNC machining for nearly 20 years. My career started in
    2006 as an operator running lathes and mills. I quickly stood out as
    someone who could get things done, so I was given opportunities to
    learn setups and programming. Then came the 2008 recession, which
    paused my training, but once the industry bounced back, I jumped right
    back into it. Within a few years, I was promoted to programmer and took
    over all the lathe programming.
  </p>

  <p>
    Since then, I’ve been growing nonstop. I spent several years doing
    contract work, which gave me the chance to learn from a wide range of
    shops and highly skilled machinists. Every job, every person, and every
    shop taught me something new. Along the way, I built experience across
    industries including Aerospace, Medical, Gas &amp; Oil, Defense, and
    Automotive each with their own unique challenges and standards.
  </p>

  <p>
    I take pride in my work and have a knack for troubleshooting,
    optimizing, and figuring out how to achieve project goals. Over the
    years I’ve led machine purchases, developed new machine workflows,
    created setup and process sheets, written procedure diagrams, extended
    tooling life, and pushed machines to use features in ways they weren’t
    originally designed for.
  </p>

  <p>
    At the end of the day, my job is simple: solve complex problems with
    practical solutions that save time and money.
  </p>

  <h2 className="text-xl font-semibold text-red-600 mt-6">
    Why I Started Deep Axis Engineering
  </h2>

  <p>
    Over the years, I saw the same challenges come up again and again in
    different shops. Too many places were losing time and money because
    their programming wasn’t optimized, their processes weren’t documented,
    or their machines weren’t being used to their full potential. Operators
    were tied up with problems that could have been solved upstream, and
    talented machinists were stuck fighting fires instead of pushing
    production forward.
  </p>

  <p>
    I started Deep Axis Engineering to change that. My goal is to give
    shops access to the kind of programming expertise that usually only
    comes with a full-time hire, but in a way that’s flexible,
    cost-effective, and tailored to their exact needs. For me, this isn’t
    just about writing code for a machine—it’s about solving problems,
    creating efficient workflows, and helping shops succeed long-term.
  </p>

  <p>
    I also believe in sharing what I know. When I solve a problem, I don’t just want to hand over the fix
    I want to explain how it was solved and why it worked. That way, the next time a similar challenge comes up, 
    the team has the tools and understanding to tackle it themselves. For me, success isn’t just about solving today’s 
    problem it’s about helping shops build confidence and capability for the long run. I feel a personal stake in every
    project that I take on, and I will not stop until the job is done right.
  </p>
</div>

        <p className="mt-4 text-white-700">
          With experience across <span className="font-semibold">Fanuc, Mitsubishi, Okuma OSP, Haas, Siemens, Heidenhain, and Mazak</span> controls,
          plus GibbsCAM, Esprit, and Fusion&nbsp;360, I bridge the gap between CAD/CAM and the shop floor.
        </p>

      </div>
    </section>
  );
}
