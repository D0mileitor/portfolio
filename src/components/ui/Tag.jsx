export default function Tag({ children, tone = 'default' }) {
  const tones = {
    default: 'border-line bg-surface-2/60 text-muted',
    accent: 'border-accent/30 bg-accent-soft text-accent',
  }
  return (
    <li
      className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[0.7rem] leading-none whitespace-nowrap sm:text-xs ${tones[tone]}`}
    >
      {children}
    </li>
  )
}

export function TagList({ items, tone, className = '', label }) {
  return (
    <ul className={`flex flex-wrap gap-1.5 sm:gap-2 ${className}`} aria-label={label}>
      {items.map((item) => (
        <Tag key={item} tone={tone}>
          {item}
        </Tag>
      ))}
    </ul>
  )
}
