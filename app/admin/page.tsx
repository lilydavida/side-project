"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Save, Trash2, Eye, EyeOff } from "lucide-react"
import type { Page } from "@/lib/cms"

export default function AdminPage() {
  const [pages, setPages] = useState<Page[]>([
    {
      id: "dashboard",
      title: "Follow the Money trail",
      subtitle: "Revenue vs. Spending across the 4-layer AI stack",
      description: "Interactive dashboard tracking $400B in AI infrastructure spending.",
      tags: ["AI Infrastructure", "Revenue Analytics", "Financial Data"],
      href: "/ai-infrastructure-unit-economics",
      published: true,
      createdAt: "2025-01-15",
      type: "dashboard",
    },
    {
      id: "insights",
      title: "The $280B Misalignment",
      subtitle: "Research & Analysis",
      description: "Deep dive into AI pricing economics.",
      tags: ["AI Economics", "Pricing Strategy"],
      href: "/insights",
      published: true,
      createdAt: "2025-01-15",
      type: "article",
    },
  ])

  const [editingPage, setEditingPage] = useState<Page | null>(null)

  const handleSave = () => {
    if (!editingPage) return

    const existingIndex = pages.findIndex((p) => p.id === editingPage.id)
    if (existingIndex >= 0) {
      const newPages = [...pages]
      newPages[existingIndex] = editingPage
      setPages(newPages)
    } else {
      setPages([...pages, editingPage])
    }
    setEditingPage(null)
  }

  const handleDelete = (id: string) => {
    setPages(pages.filter((p) => p.id !== id))
  }

  const togglePublished = (id: string) => {
    setPages(pages.map((p) => (p.id === id ? { ...p, published: !p.published } : p)))
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-slate-200">Content Manager</h1>
          <Button
            onClick={() =>
              setEditingPage({
                id: `page-${Date.now()}`,
                title: "",
                subtitle: "",
                description: "",
                tags: [],
                href: "",
                published: false,
                createdAt: new Date().toISOString().split("T")[0],
                type: "article",
              })
            }
            className="gap-2"
          >
            <Plus className="h-4 w-4" />
            New Page
          </Button>
        </div>

        {editingPage && (
          <Card className="mb-8 border-slate-800 bg-slate-900/50 p-6">
            <h2 className="mb-4 text-xl font-semibold text-slate-200">
              {editingPage.id.startsWith("page-") ? "Create New Page" : "Edit Page"}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm text-slate-400">Title</label>
                <Input
                  value={editingPage.title}
                  onChange={(e) => setEditingPage({ ...editingPage, title: e.target.value })}
                  className="bg-slate-800/50 border-slate-700"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-400">Subtitle</label>
                <Input
                  value={editingPage.subtitle}
                  onChange={(e) => setEditingPage({ ...editingPage, subtitle: e.target.value })}
                  className="bg-slate-800/50 border-slate-700"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-400">Description</label>
                <Textarea
                  value={editingPage.description}
                  onChange={(e) => setEditingPage({ ...editingPage, description: e.target.value })}
                  className="bg-slate-800/50 border-slate-700"
                  rows={3}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-400">Tags (comma-separated)</label>
                <Input
                  value={editingPage.tags.join(", ")}
                  onChange={(e) =>
                    setEditingPage({ ...editingPage, tags: e.target.value.split(",").map((t) => t.trim()) })
                  }
                  className="bg-slate-800/50 border-slate-700"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-400">URL Path</label>
                <Input
                  value={editingPage.href}
                  onChange={(e) => setEditingPage({ ...editingPage, href: e.target.value })}
                  className="bg-slate-800/50 border-slate-700"
                  placeholder="/my-new-page"
                />
              </div>
              <div className="flex gap-3">
                <Button onClick={handleSave} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Page
                </Button>
                <Button onClick={() => setEditingPage(null)} variant="outline">
                  Cancel
                </Button>
              </div>
            </div>
          </Card>
        )}

        <div className="space-y-4">
          {pages.map((page) => (
            <Card key={page.id} className="border-slate-800 bg-slate-900/50 p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <h3 className="text-lg font-medium text-slate-200">{page.title}</h3>
                    <span
                      className={`rounded px-2 py-0.5 text-xs ${page.published ? "bg-green-900/30 text-green-400" : "bg-slate-800 text-slate-500"}`}
                    >
                      {page.published ? "Published" : "Draft"}
                    </span>
                  </div>
                  <p className="mb-2 text-sm text-slate-400">{page.subtitle}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {page.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-slate-700/50 bg-slate-800/30 px-2 py-0.5 text-xs text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" onClick={() => togglePublished(page.id)} className="h-8 w-8 p-0">
                    {page.published ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => setEditingPage(page)} className="h-8 px-3">
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDelete(page.id)}
                    className="h-8 w-8 p-0 text-red-400 hover:text-red-300"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
