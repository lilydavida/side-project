"use client"

import { useState, useTransition } from "react";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { searchMessyProducts } from "@/app/actions/search";

type SearchSectionProps = {
  mode?: "legacy" | "aeo";
};

export function SearchSection({ mode = "legacy" }: SearchSectionProps) {
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleSearch = () => {
    const trimmedQuery = inputValue.trim();
    setSearchQuery(trimmedQuery);

    if (!trimmedQuery) {
      setResults([]);
      return;
    }

    const promise = searchMessyProducts(trimmedQuery);
    startTransition(() => {
      promise.then((data) => {
        setResults(data || []);
      });
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="max-w-4xl mx-auto space-y-4">
      <div className="flex gap-3">
        <Input
          placeholder={
            mode === "legacy"
              ? 'Try: "Alcohol free toner" (Press Enter to search)'
              : 'Try: "Alcohol-free soothing toner safe for pregnancy" (Press Enter to search)'
          }
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isPending}
        />
      </div>
      <Card className="p-4 text-sm text-slate-400 border-slate-800 bg-slate-900/60">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">
          {mode === "legacy" ? "Legacy Search (Keyword Match)" : "AEO Search (Semantic Match)"}
        </p>
        {isPending && (
          <p className="text-slate-400 italic">Searching...</p>
        )}
        {!isPending && searchQuery && (
          <div className="space-y-2">
            <p className="text-slate-300">
              Found <span className="font-semibold text-slate-200">{results.length}</span> result{results.length !== 1 ? 's' : ''} for:{" "}
              <span className="text-slate-200 font-semibold">"{searchQuery}"</span>
            </p>
            {results.length > 0 && (
              <div className="mt-4 space-y-2">
                {results.map((product, idx) => (
                  <div key={idx} className="p-3 bg-slate-800/50 rounded border border-slate-700">
                    <h4 className="font-semibold text-slate-200">{product.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">{product.vendor} • ${product.price}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        {!searchQuery && !isPending && (
          <p className="text-slate-500">Enter a search query and press Enter to see results...</p>
        )}
      </Card>
    </section>
  );
}
