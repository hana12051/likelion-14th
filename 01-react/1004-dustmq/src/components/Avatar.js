const { createElement: h } = React

const FALLBACK =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
      <rect width="100%" height="100%" fill="#0b1220"/>
      <circle cx="32" cy="24" r="14" fill="#1f2937"/>
      <rect x="10" y="40" width="44" height="18" rx="9" fill="#1f2937"/>
    </svg>`
  )

export default function Avatar({ src, alt = '프로필 이미지' }) {
  return h('img', {
    className: 'avatar',
    src: src || FALLBACK,
    alt,
    style: {
      inlineSize: '64px',
      blockSize: '64px',
      borderRadius: '50%',
      objectFit: 'cover',
      background: '#0b1220',
      border: '1px solid #1f2937',
    },
  })
}
