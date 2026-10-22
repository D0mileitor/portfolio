import { useReveal } from '../../hooks/useReveal'

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...props }) {
  const ref = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { '--reveal-delay': `${delay}ms`, ...style } : style}
      {...props}
    >
      {children}
    </Tag>
  )
}
