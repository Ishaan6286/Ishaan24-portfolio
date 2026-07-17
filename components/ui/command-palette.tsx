"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, FileText, Briefcase, Layout, Terminal } from "lucide-react";
import { projects, skills } from "@/lib/portfolio-data";

type SearchResult = {
  id: string;
  title: string;
  subtitle?: string;
  href: string;
  icon: React.ElementType;
  category: string;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Toggle with Ctrl+K or Cmd+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Generate index
  const getResults = (): SearchResult[] => {
    if (!query) return [];
    const lowerQuery = query.toLowerCase();

    const results: SearchResult[] = [];

    // Search Projects
    projects.forEach((p) => {
      if (p.name.toLowerCase().includes(lowerQuery) || p.techStack.some(t => t.toLowerCase().includes(lowerQuery))) {
        results.push({
          id: p.slug,
          title: p.name,
          subtitle: p.tagline,
          href: `/projects/${p.slug}`,
          icon: Layout,
          category: "Projects",
        });
      }
    });

    // Search Pages
    const pages = [
      { name: "Home", href: "/", icon: Command },
      { name: "Projects", href: "/projects", icon: Layout },
      { name: "Experience", href: "/experience", icon: Briefcase },
      { name: "Resume", href: "/resume", icon: FileText },
      { name: "Philosophy", href: "/philosophy", icon: Terminal },
      { name: "Contact", href: "/contact", icon: Command },
    ];
    pages.forEach((p) => {
      if (p.name.toLowerCase().includes(lowerQuery)) {
        results.push({
          id: p.href,
          title: p.name,
          href: p.href,
          icon: p.icon,
          category: "Pages",
        });
      }
    });

    return results;
  };

  const results = getResults();

  // Reset index when query changes
  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % (results.length || 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + (results.length || 1)) % (results.length || 1));
      }
      if (e.key === "Enter" && results.length > 0) {
        e.preventDefault();
        router.push(results[activeIndex].href);
        setOpen(false);
        setQuery("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, results, activeIndex, router]);

  // Focus input on open
  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] pointer-events-none px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/[0.1] bg-[#111113] shadow-2xl pointer-events-auto"
            >
              <div className="flex items-center border-b border-white/[0.06] px-4">
                <Search size={18} className="text-zinc-500" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search projects, technologies, pages..."
                  className="w-full bg-transparent p-4 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <div className="flex items-center gap-1 shrink-0">
                  <kbd className="hidden sm:inline-block rounded-md border border-white/[0.1] bg-white/[0.05] px-2 py-0.5 text-[10px] font-medium text-zinc-400">ESC</kbd>
                </div>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-2 scrollbar-hide">
                {results.length > 0 ? (
                  <div className="space-y-1">
                    {results.map((result, i) => {
                      const Icon = result.icon;
                      return (
                        <div
                          key={result.id}
                          className={`flex cursor-pointer items-center gap-3 rounded-xl p-3 transition-colors ${
                            i === activeIndex
                              ? "bg-white/[0.06]"
                              : "hover:bg-white/[0.03]"
                          }`}
                          onClick={() => {
                            router.push(result.href);
                            setOpen(false);
                            setQuery("");
                          }}
                          onMouseEnter={() => setActiveIndex(i)}
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.06] bg-[#09090b]">
                            <Icon size={14} className="text-zinc-400" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-zinc-200">{result.title}</div>
                            {result.subtitle && (
                              <div className="text-xs text-zinc-500">{result.subtitle}</div>
                            )}
                          </div>
                          <div className="ml-auto text-[10px] font-medium uppercase tracking-wider text-zinc-600">
                            {result.category}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : query ? (
                  <div className="p-8 text-center text-sm text-zinc-500">
                    No results found for &quot;{query}&quot;
                  </div>
                ) : (
                  <div className="p-8 text-center text-sm text-zinc-500">
                    Try searching for &quot;FastAPI&quot;, &quot;Runli&quot;, or &quot;Resume&quot;
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
