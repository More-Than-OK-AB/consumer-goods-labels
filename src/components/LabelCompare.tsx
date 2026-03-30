import { useState, useEffect, useMemo } from 'react'
import { labels } from '../data/labels'

const POPULAR_COMPARISONS = [
  { title: 'KRAV vs EU-ekologiskt', ids: ['krav', 'eu-ekologiskt'] },
  { title: 'MSC vs ASC', ids: ['msc', 'asc'] },
  { title: 'FSC vs PEFC', ids: ['fsc', 'pefc'] },
  { title: 'KRAV vs Svenskt Sigill', ids: ['krav', 'svenskt-sigill'] },
  { title: 'Svanen vs EU Ecolabel', ids: ['svanen', 'eu-ecolabel'] },
  { title: 'KRAV vs Demeter', ids: ['krav', 'demeter'] },
]

const TAG_ORDER = ['ekologiskt', 'miljo', 'halsa', 'djurvalf', 'ursprung', 'socialt-ansvar', 'hav-fiske']

function getLabelById(labels: Label[], id: string): Label | undefined {
  return labels.find((l) => l.id === id)
}

export default function LabelCompare() {
  const [selectedIds, setSelectedIds] = useState<[string, string, string]>(['', '', ''])

  // Read URL params on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const idsParam = params.get('ids')
    if (idsParam) {
      const ids = idsParam.split(',').filter((id) => labels.some((l) => l.id === id)).slice(0, 3)
      setSelectedIds([ids[0] ?? '', ids[1] ?? '', ids[2] ?? ''])
    }
  }, [])

  // Update URL when selection changes
  useEffect(() => {
    const clean = selectedIds.filter(Boolean)
    const newUrl = clean.length > 0 ? `/jamfor?ids=${clean.join(',')}` : '/jamfor'
    window.history.replaceState(null, '', newUrl)
  }, [selectedIds])

  function setSelection(index: number, value: string) {
    setSelectedIds((prev) => {
      const next: [string, string, string] = [...prev] as [string, string, string]
      next[index] = value
      return next
    })
  }

  function setQuick(ids: string[]) {
    setSelectedIds([ids[0] ?? '', ids[1] ?? '', ids[2] ?? ''])
  }

  const selected = useMemo(
    () => selectedIds.filter(Boolean).map((id) => getLabelById(labels, id)).filter(Boolean) as Label[],
    [labels, selectedIds]
  )

  const allTagIds = useMemo(() => {
    const seen = new Set<string>()
    for (const l of labels) for (const t of l.tags) seen.add(t.id)
    return TAG_ORDER.filter((id) => seen.has(id))
  }, [labels])

  const tagLabelMap = useMemo(() => {
    const map: Record<string, string> = {}
    for (const l of labels) for (const t of l.tags) if (!map[t.id]) map[t.id] = t.label
    return map
  }, [labels])

  return (
    <div>
      {/* Selectors */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        {([0, 1, 2] as const).map((i) => (
          <select
            key={i}
            value={selectedIds[i]}
            onChange={(e) => setSelection(i, e.target.value)}
            aria-label={i < 2 ? `Välj märkning ${i + 1}` : 'Välj en tredje märkning (valfritt)'}
            className="flex-1 px-3 py-2 text-sm border border-[#e0ddd8] rounded-lg bg-white text-[#2c2c2c] focus:outline-none focus:border-[#2e6b3e] focus:ring-2 focus:ring-[#2e6b3e]/20 cursor-pointer"
            style={{ fontFamily: 'inherit' }}
          >
            <option value="">{i < 2 ? 'Välj märkning...' : 'Välj en tredje (valfritt)...'}</option>
            {labels.map((l) => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        ))}
      </div>

      {/* Quick links */}
      <div className="mb-8">
        <p className="text-sm font-semibold text-[#5a5a5a] mb-2">Populära jämförelser:</p>
        <div className="flex flex-wrap gap-2">
          {POPULAR_COMPARISONS.map((comp) => (
            <button
              key={comp.title}
              onClick={() => setQuick(comp.ids)}
              className="text-sm px-3 py-1 rounded-full bg-[#e8f2eb] text-[#2e6b3e] font-medium hover:bg-[#2e6b3e] hover:text-white transition-colors cursor-pointer border-0"
            >
              {comp.title}
            </button>
          ))}
        </div>
      </div>

      {/* Hint when only one selected */}
      {selected.length === 1 && (
        <p className="text-sm text-[#5a5a5a] py-4">Välj minst en märkning till för att jämföra.</p>
      )}

      {/* Comparison table */}
      {selected.length >= 2 && (
        <div className="overflow-x-auto">
          <table
            className="w-full border-collapse text-sm"
            aria-label="Jämförelsetabell för märkningar"
            style={{ tableLayout: 'fixed' }}
          >
            <thead>
              <tr>
                <th
                  className="text-left font-semibold text-[#5a5a5a] px-4 py-3 border border-[#e0ddd8] bg-[#f8f7f4] w-36"
                  scope="col"
                />
                {selected.map((label) => (
                  <th
                    key={label.id}
                    scope="col"
                    className="text-center px-4 py-3 border border-[#e0ddd8] bg-[#2e6b3e] text-white font-semibold"
                  >
                    {label.image && (
                      <img
                        src={`/${label.image}`}
                        alt={label.name}
                        className="h-12 w-full object-contain mb-2"
                      />
                    )}
                    <a href={`/labels/${label.id}`} className="text-white hover:underline">
                      {label.name}
                    </a>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Beskrivning */}
              <tr>
                <th scope="row" className="text-left font-semibold px-4 py-3 border border-[#e0ddd8] bg-[#f8f7f4] text-[#2c2c2c] align-top">
                  Beskrivning
                </th>
                {selected.map((label) => (
                  <td key={label.id} className="px-4 py-3 border border-[#e0ddd8] align-top text-[#2c2c2c]">
                    {label.description[0] ?? '—'}
                  </td>
                ))}
              </tr>

              {/* Kategorier */}
              <tr>
                <th scope="row" className="text-left font-semibold px-4 py-3 border border-[#e0ddd8] bg-[#f8f7f4] text-[#2c2c2c] align-top">
                  Kategorier
                </th>
                {selected.map((label) => (
                  <td key={label.id} className="px-4 py-3 border border-[#e0ddd8] align-top font-semibold text-[#2c2c2c]">
                    {label.tags.map((t) => t.label).join(', ')}
                  </td>
                ))}
              </tr>

              {/* Per-tag rows */}
              {allTagIds
                .filter((tagId) => selected.some((l) => l.tags.some((t) => t.id === tagId)))
                .map((tagId) => (
                  <tr key={tagId}>
                    <th scope="row" className="text-left font-semibold px-4 py-3 border border-[#e0ddd8] bg-[#f8f7f4] text-[#2c2c2c] align-top">
                      {tagLabelMap[tagId]}
                    </th>
                    {selected.map((label) => {
                      const tag = label.tags.find((t) => t.id === tagId)
                      return (
                        <td key={label.id} className="px-4 py-3 border border-[#e0ddd8] align-top text-[#2c2c2c]">
                          {tag ? tag.explanation : <span className="text-[#5a5a5a]">—</span>}
                        </td>
                      )
                    })}
                  </tr>
                ))}

              {/* Trovärdighet */}
              <tr>
                <th scope="row" className="text-left font-semibold px-4 py-3 border border-[#e0ddd8] bg-[#f8f7f4] text-[#2c2c2c] align-top">
                  Trovärdighet
                </th>
                {selected.map((label) => (
                  <td key={label.id} className="px-4 py-3 border border-[#e0ddd8] align-top text-[#2c2c2c]">
                    {label.credibility.summary}
                  </td>
                ))}
              </tr>

              {/* Webbplats */}
              <tr>
                <th scope="row" className="text-left font-semibold px-4 py-3 border border-[#e0ddd8] bg-[#f8f7f4] text-[#2c2c2c] align-top">
                  Webbplats
                </th>
                {selected.map((label) => (
                  <td key={label.id} className="px-4 py-3 border border-[#e0ddd8] align-top">
                    {label.website ? (
                      <a
                        href={label.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2e6b3e] hover:underline break-all"
                      >
                        {label.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                      </a>
                    ) : (
                      <span className="text-[#5a5a5a]">—</span>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
