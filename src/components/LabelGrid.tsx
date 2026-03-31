import { useState, useMemo } from 'react'
import { labels } from '../data/labels'

const TAG_STYLES: Record<string, { bg: string; text: string; activeBg: string; border: string }> = {
  miljo: { bg: '#dff0d8', text: '#2d6a1e', activeBg: '#2d6a1e', border: '#dff0d8' },
  halsa: { bg: '#d9edf7', text: '#1a5276', activeBg: '#1a5276', border: '#d9edf7' },
  djurvalf: { bg: '#fce8d5', text: '#8a4b1a', activeBg: '#8a4b1a', border: '#fce8d5' },
  ursprung: { bg: '#f5e6cc', text: '#7d5a2f', activeBg: '#7d5a2f', border: '#f5e6cc' },
  ekologiskt: { bg: '#e8f2eb', text: '#2e6b3e', activeBg: '#2e6b3e', border: '#e8f2eb' },
  'socialt-ansvar': { bg: '#f0e0f0', text: '#6b2e6b', activeBg: '#6b2e6b', border: '#f0e0f0' },
  'hav-fiske': { bg: '#d6eaf8', text: '#1a3d5c', activeBg: '#1a3d5c', border: '#d6eaf8' },
}

function TagBadge({ tagId, label }: { tagId: string; label: string }) {
  const style = TAG_STYLES[tagId]
  if (!style) return null
  return (
    <span
      style={{ background: style.bg, color: style.text }}
      className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide"
    >
      {label}
    </span>
  )
}

export default function LabelGrid() {
  const [search, setSearch] = useState('')
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const allTags = useMemo(() => {
    const seen = new Set<string>()
    const tags: { id: string; label: string }[] = []
    for (const l of labels) {
      for (const t of l.tags) {
        if (!seen.has(t.id)) {
          seen.add(t.id)
          tags.push({ id: t.id, label: t.label })
        }
      }
    }
    return tags
  }, [labels])

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return labels.filter((label) => {
      if (q) {
        const searchable = [
          label.name,
          label.cardDescription,
          ...label.description,
          ...label.tags.map((t) => t.label),
        ]
          .join(' ')
          .toLowerCase()
        if (!searchable.includes(q)) return false
      }
      if (activeFilters.length > 0) {
        const labelTagIds = label.tags.map((t) => t.id)
        if (!activeFilters.every((f) => labelTagIds.includes(f))) return false
      }
      return true
    })
  }, [labels, search, activeFilters])

  function toggleFilter(tagId: string) {
    setActiveFilters((prev) =>
      prev.includes(tagId) ? prev.filter((f) => f !== tagId) : [...prev, tagId]
    )
  }

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Sök märkning..."
        aria-label="Sök märkning"
        className="w-full px-4 py-2.5 text-base border border-[#e0ddd8] rounded-lg bg-white text-[#2c2c2c] mb-4 focus:outline-none focus:border-[#2e6b3e] focus:ring-2 focus:ring-[#2e6b3e]/20 placeholder:text-[#5a5a5a]"
        style={{ fontFamily: 'inherit' }}
      />

      <div className="flex flex-wrap gap-2 mb-6" role="group" aria-label="Filtrera efter kategori">
        <button
          onClick={() => setActiveFilters([])}
          className="text-xs font-semibold px-3 py-1 rounded-full border-2 uppercase tracking-wide transition-colors cursor-pointer"
          style={
            activeFilters.length === 0
              ? { background: '#2e6b3e', color: '#fff', borderColor: '#2e6b3e' }
              : { background: '#fff', color: '#5a5a5a', borderColor: '#e0ddd8' }
          }
        >
          Alla
        </button>
        {allTags.map((tag) => {
          const style = TAG_STYLES[tag.id]
          const isActive = activeFilters.includes(tag.id)
          return (
            <button
              key={tag.id}
              onClick={() => toggleFilter(tag.id)}
              className="text-xs font-semibold px-3 py-1 rounded-full border-2 uppercase tracking-wide transition-colors cursor-pointer"
              style={
                isActive
                  ? { background: style?.activeBg ?? '#2e6b3e', color: '#fff', borderColor: style?.activeBg ?? '#2e6b3e' }
                  : { background: '#fff', color: '#5a5a5a', borderColor: style?.border ?? '#e0ddd8' }
              }
            >
              {tag.label}
            </button>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-[#5a5a5a] text-sm py-8 text-center">Inga märkningar matchar sökningen.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((label) => (
          <a
            key={label.id}
            href={`/labels/${label.id}`}
            className="block bg-white border border-[#e0ddd8] rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#2e6b3e] focus-visible:outline-offset-2 no-underline"
          >
            <img
              src={label.image}
              alt={label.name}
              className="w-full h-28 object-contain mb-4 rounded"
              loading="lazy"
            />
            <h2 className="text-lg font-semibold mb-2 text-[#2e6b3e]">{label.name}</h2>
            <p className="text-[#5a5a5a] text-sm flex-1 mb-4">{label.cardDescription}</p>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {label.tags.map((tag) => (
                <TagBadge key={tag.id} tagId={tag.id} label={tag.label} />
              ))}
            </div>
            <span className="inline-block mt-3 font-semibold text-sm text-[#2e6b3e]">Läs mer →</span>
          </a>
        ))}
      </div>
    </div>
  )
}
