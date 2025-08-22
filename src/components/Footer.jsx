export default function Footer() {
  return (
<footer className="py-10 border-t border-slate-800 bg-black/30">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-brand-gray/70">
    <div>© {new Date().getFullYear()} Deep Axis Engineering</div>
    <div className="flex items-center gap-4">
      <a href="#" className="hover:text-brand-blue">Terms</a>
      <a href="#" className="hover:text-brand-blue">Privacy</a>
    </div>
  </div>
</footer>
  )
}
