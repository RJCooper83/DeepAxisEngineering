export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <div>© {new Date().getFullYear()} Deep Axis Engineering</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-slate-700">Terms</a>
          <a href="#" className="hover:text-slate-700">Privacy</a>
        </div>
      </div>
    </footer>
  )
}
