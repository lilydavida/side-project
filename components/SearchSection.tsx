import { useState } from "react";
import { Input } from "./ui/input";
import { Card } from "./ui/card";

type SearchSectionProps = {
  mode?: "legacy" | "aeo";
};

export function SearchSection({ mode = "legacy" }: SearchSectionProps) {
  const [query, setQuery] = useState("");

  return (
    <section className="max-w-4xl mx-auto space-y-4">
      <div className="flex gap-3">
        <Input
          placeholder={
            mode === "legacy"
              ? 'Try: "Alcohol free toner"'
              : 'Try: "Alcohol-free soothing toner safe for pregnancy"'
          }
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <Card className="p-4 text-sm text-slate-400 border-slate-800 bg-slate-900/60">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">
          {mode === "legacy" ? "Legacy Search (Keyword Match)" : "AEO Search (Semantic Match)"}
        </p>
        <p>
          This is a placeholder search UI wired for the case study. Implement the real search against
          your product catalog when ready. Current query:{" "}
          <span className="text-slate-200 font-semibold">{query || "∅"}</span>
        </p>
      </Card>
    </section>
  );
}

