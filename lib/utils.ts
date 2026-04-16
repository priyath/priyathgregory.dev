// Client-safe utilities (no Node.js imports)

// Format date like "Jan 2024"
export function formatDate(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}
