import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center pt-24 pb-20">
      <div className="text-center space-y-6">
        <h1 className="text-8xl font-bold tracking-tight text-zinc-800 md:text-9xl">
          404
        </h1>
        <p className="text-xl text-zinc-400 font-medium">Page not found</p>
        <p className="mx-auto max-w-sm text-sm text-zinc-500">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-white"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
