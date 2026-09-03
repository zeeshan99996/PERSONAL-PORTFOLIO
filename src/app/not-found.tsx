import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#161618] text-white flex flex-col items-center justify-center p-8 text-center select-none font-sans">
      <span className="font-mono text-sm text-[#CCFF00] font-bold">// 404 NOT FOUND</span>
      <h1 className="text-5xl sm:text-7xl font-black uppercase text-white mt-2">
        PAGE NOT FOUND
      </h1>
      <p className="text-sm text-zinc-400 max-w-md mt-4 font-body">
        The requested URL does not exist or has been moved. Return to Zeeshan's portfolio home page.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#CCFF00] px-6 py-3 font-mono text-xs font-bold text-black hover:bg-white transition-all shadow-lg"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>BACK TO PORTFOLIO</span>
      </Link>
    </main>
  );
}
