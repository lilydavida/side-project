import pagesData from "@/content/pages.json"

export interface Page {
  id: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  href: string
  published: boolean
  createdAt: string
  type: "dashboard" | "article" | "custom"
}

export function getAllPages(): Page[] {
  return pagesData.pages
    .filter((page) => page.published)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

export function getPageById(id: string): Page | undefined {
  return pagesData.pages.find((page) => page.id === id)
}

export async function savePage(page: Page): Promise<void> {
  // In a real CMS, this would save to a database or file system
  // For now, this is a placeholder for the admin interface
  console.log("[v0] Saving page:", page)
}
